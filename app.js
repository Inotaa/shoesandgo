/* ============================
   LEGO Dimensions – app.js
   ============================ */

const contentEl = document.getElementById("content");
const searchInput = document.getElementById("searchInput");
const statsEl = document.getElementById("stats");
const toggleOwnedBtn = document.getElementById("toggleOwnedFilter");
const resetBtn = document.getElementById("resetBtn");

let showOwnedOnly = false;

/* --------- Utils stockage --------- */
function storageKey(set) {
  return "legoDim_owned_" + set;
}

function isOwned(set) {
  return localStorage.getItem(storageKey(set)) === "true";
}

function setOwned(set, value) {
  localStorage.setItem(storageKey(set), value);
}

/* --------- Groupement par licence --------- */
function groupByLicense(packs) {
  const map = {};
  packs.forEach(p => {
    if (!map[p.license]) map[p.license] = [];
    map[p.license].push(p);
  });
  return map;
}

/* --------- Filtrage --------- */
function getFilteredPacks() {
  const q = searchInput.value.toLowerCase().trim();

  return DIMENSIONS_PACKS.filter(p => {
    const matchesSearch =
      !q ||
      p.set.includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.license.toLowerCase().includes(q) ||
      p.packType.toLowerCase().includes(q);

    const matchesOwned =
      !showOwnedOnly || isOwned(p.set);

    return matchesSearch && matchesOwned;
  });
}

/* --------- Rendu --------- */
function render() {
  contentEl.innerHTML = "";

  const filtered = getFilteredPacks();
  const grouped = groupByLicense(filtered);

  Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .forEach(license => {
      const packs = grouped[license];

      const ownedCount = packs.filter(p => isOwned(p.set)).length;

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

  updateStats(filtered);
}

/* --------- Carte --------- */
function renderCard(p) {
  const owned = isOwned(p.set);
  const imgUrl = `https://images.brickset.com/sets/images/${p.set}-1.jpg`;

  return `
    <div class="card">
      <div class="thumb">
        <img src="${imgUrl}" alt="${p.name}"
             onerror="this.style.display='none'">
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
                   ${owned ? "checked" : ""}
                   onchange="window.toggleOwned('${p.set}', this.checked)">
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

/* --------- Stats --------- */
function updateStats(currentList) {
  const total = DIMENSIONS_PACKS.length;
  const owned = DIMENSIONS_PACKS.filter(p => isOwned(p.set)).length;
  const shown = currentList.length;

  statsEl.textContent =
    `Possédés : ${owned} / ${total} — Affichés : ${shown}`;
}

/* --------- Actions globales --------- */
window.toggleOwned = function (set, checked) {
  setOwned(set, checked);
  render();
};

/* --------- Events --------- */
searchInput.addEventListener("input", render);

toggleOwnedBtn.addEventListener("click", () => {
  showOwnedOnly = !showOwnedOnly;
  toggleOwnedBtn.setAttribute("aria-pressed", showOwnedOnly);
  toggleOwnedBtn.textContent =
    showOwnedOnly ? "Afficher : Possédés" : "Afficher : Tous";
  render();
});

resetBtn.addEventListener("click", () => {
  if (!confirm("Supprimer toute la progression ?")) return;
  DIMENSIONS_PACKS.forEach(p =>
    localStorage.removeItem(storageKey(p.set))
  );
  render();
});

/* --------- Init --------- */
render();
