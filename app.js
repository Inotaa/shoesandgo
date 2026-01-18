const contentEl = document.getElementById("content");
const searchInput = document.getElementById("searchInput");
const statsEl = document.getElementById("stats");
const toggleOwnedBtn = document.getElementById("toggleOwnedFilter");
const resetBtn = document.getElementById("resetBtn");

let showOwnedOnly = false;

/* ===== STORAGE ===== */
const keyOf = set => "legoDim_owned_" + set;
const isOwned = set => localStorage.getItem(keyOf(set)) === "true";
const setOwned = (set, v) => localStorage.setItem(keyOf(set), v);

/* ===== GROUP BY LICENSE ===== */
function groupByLicense(packs){
  return packs.reduce((acc,p)=>{
    (acc[p.license] ||= []).push(p);
    return acc;
  },{});
}

/* ===== FILTER ===== */
function getFiltered(){
  const q = searchInput.value.toLowerCase().trim();
  return DIMENSIONS_PACKS.filter(p=>{
    const okSearch =
      !q ||
      p.set.includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.license.toLowerCase().includes(q);

    const okOwned = !showOwnedOnly || isOwned(p.set);
    return okSearch && okOwned;
  });
}

/* ===== IMAGE URL ===== */
function imageUrl(set){
  // Tentative PNG, puis fallback JPG
  return `https://img.bricklink.com/ItemImage/SET/${set}-1.png`;
}

/* ===== RENDER ===== */
function render(){
  contentEl.innerHTML = "";
  const filtered = getFiltered();
  const grouped = groupByLicense(filtered);

  Object.keys(grouped).sort().forEach(license=>{
    const packs = grouped[license];
    const ownedCount = packs.filter(p=>isOwned(p.set)).length;

    const section = document.createElement("section");
    section.className = "license";
    section.innerHTML = `
      <div class="license__header">
        <div class="license__title">
          <h2>${license}</h2>
          <span class="badge">${ownedCount} / ${packs.length}</span>
        </div>
      </div>
      <div class="grid">
        ${packs.map(renderCard).join("")}
      </div>
    `;
    contentEl.appendChild(section);
  });

  updateStats();
}

/* ===== CARD ===== */
function renderCard(p){
  const png = imageUrl(p.set);
  const jpg = `https://img.bricklink.com/ItemImage/SET/${p.set}-1.jpg`;

  return `
    <div class="card">
      <div class="thumb">
        <img src="${png}"
             alt="${p.name}"
             onerror="this.onerror=null;this.src='${jpg}'">
      </div>

      <div class="card__body">
        <div class="card__name">${p.name}</div>

        <div class="card__meta">
          <span class="pill">${p.packType}</span>
          <span class="pill">${p.year}</span>
          <span class="pill">#${p.set}</span>
        </div>

        <div class="card__footer">
          <label class="check">
            <input type="checkbox"
              ${isOwned(p.set) ? "checked" : ""}
              onchange="toggleOwned('${p.set}', this.checked)">
            Possédé
          </label>

          <a class="smalllink"
             href="https://brickset.com/sets/${p.set}-1"
             target="_blank" rel="noopener">
            Brickset ↗
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ===== STATS ===== */
function updateStats(){
  const total = DIMENSIONS_PACKS.length;
  const owned = DIMENSIONS_PACKS.filter(p=>isOwned(p.set)).length;
  statsEl.textContent = `Possédés : ${owned} / ${total}`;
}

window.toggleOwned = function(set,val){
  setOwned(set,val);
  render();
};

/* ===== EVENTS ===== */
searchInput.addEventListener("input", render);

toggleOwnedBtn.addEventListener("click",()=>{
  showOwnedOnly = !showOwnedOnly;
  toggleOwnedBtn.textContent = showOwnedOnly ? "Afficher : Possédés" : "Afficher : Tous";
  toggleOwnedBtn.setAttribute("aria-pressed", showOwnedOnly);
  render();
});

resetBtn.addEventListener("click",()=>{
  if(!confirm("Tout réinitialiser ?")) return;
  DIMENSIONS_PACKS.forEach(p=>localStorage.removeItem(keyOf(p.set)));
  render();
});

/* ===== INIT ===== */
render();
