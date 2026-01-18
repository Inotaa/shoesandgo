/**
 * Packs LEGO Dimensions.
 * Images: https://images.brickset.com/sets/images/<SET>-1.jpg
 * Pages Brickset: https://brickset.com/sets/<SET>-1
 *
 * Sources utiles (listes & numéros) :
 * - Wikipédia FR (catégories de packs) : https://fr.wikipedia.org/wiki/Lego_Dimensions  (packs) :contentReference[oaicite:0]{index=0}
 * - Brickset (numéros + images, ex 71201) :contentReference[oaicite:1]{index=1}
 */

window.DIMENSIONS_PACKS = [
  // --- Starter Pack (il existe plusieurs versions console ; j’en mets 1 “générique”) ---
  { set:"71170", name:"Starter Pack", packType:"Starter Pack", license:"LEGO Dimensions", year:2015 },

  // --- Level Packs (Packs Aventures) ---
  { set:"71201", name:"Back to the Future Level Pack", packType:"Level Pack", license:"Retour vers le futur", year:2015 },
  { set:"71202", name:"The Simpsons Level Pack", packType:"Level Pack", license:"Les Simpson", year:2015 },
  { set:"71203", name:"Portal 2 Level Pack", packType:"Level Pack", license:"Portal 2", year:2015 },
  { set:"71204", name:"Doctor Who Level Pack", packType:"Level Pack", license:"Doctor Who", year:2015 },
  { set:"71228", name:"Ghostbusters Level Pack", packType:"Level Pack", license:"S.O.S. Fantômes (1984)", year:2016 },
  { set:"71235", name:"Midway Arcade Level Pack", packType:"Level Pack", license:"Midway Arcade", year:2016 },
  { set:"71245", name:"Adventure Time Level Pack", packType:"Level Pack", license:"Adventure Time", year:2016 },
  { set:"71248", name:"Mission: Impossible Level Pack", packType:"Level Pack", license:"Mission Impossible", year:2016 },
  { set:"71244", name:"Sonic the Hedgehog Level Pack", packType:"Level Pack", license:"Sonic the Hedgehog", year:2016 },
  { set:"71267", name:"The Goonies Level Pack", packType:"Level Pack", license:"Les Goonies", year:2017 },

  // --- Team Packs (Packs Équipes) ---
  { set:"71205", name:"Jurassic World Team Pack", packType:"Team Pack", license:"Jurassic World", year:2015 },
  { set:"71206", name:"Scooby-Doo Team Pack", packType:"Team Pack", license:"Scooby-Doo", year:2015 },
  { set:"71207", name:"Ninjago Team Pack", packType:"Team Pack", license:"LEGO Ninjago", year:2015 },
  { set:"71229", name:"DC Comics Team Pack", packType:"Team Pack", license:"DC Comics", year:2016 },
  { set:"71247", name:"Harry Potter Team Pack", packType:"Team Pack", license:"Harry Potter", year:2016 },
  { set:"71246", name:"Adventure Time Team Pack", packType:"Team Pack", license:"Adventure Time", year:2016 },
  { set:"71256", name:"Gremlins Team Pack", packType:"Team Pack", license:"Gremlins", year:2016 },
  { set:"71287", name:"Teen Titans Go! Fun Pack (Starfire)", packType:"Fun Pack", license:"Teen Titans Go!", year:2017 }, // utile si tu veux une licence Teen Titans même si Team Pack existe
  { set:"71255", name:"Teen Titans Go! Team Pack", packType:"Team Pack", license:"Teen Titans Go!", year:2017 },
  { set:"71285", name:"The Powerpuff Girls Team Pack", packType:"Team Pack", license:"Les Super Nanas", year:2017 },

  // --- Story Packs (Packs Histoire) ---
  { set:"71242", name:"Ghostbusters (2016) Story Pack", packType:"Story Pack", license:"SOS Fantômes (2016)", year:2016 },
  { set:"71253", name:"Fantastic Beasts Story Pack", packType:"Story Pack", license:"Les Animaux fantastiques", year:2016 },
  { set:"71264", name:"The LEGO Batman Movie Story Pack", packType:"Story Pack", license:"LEGO Batman, le film", year:2017 },

  // --- Fun Packs (Packs Héros) — gros morceau ---
  // LEGO Movie
  { set:"71212", name:"Emmet Fun Pack", packType:"Fun Pack", license:"La Grande Aventure LEGO", year:2015 },
  { set:"71213", name:"Bad Cop Fun Pack", packType:"Fun Pack", license:"La Grande Aventure LEGO", year:2015 },
  { set:"71214", name:"Benny Fun Pack", packType:"Fun Pack", license:"La Grande Aventure LEGO", year:2015 },
  { set:"71231", name:"Unikitty Fun Pack", packType:"Fun Pack", license:"La Grande Aventure LEGO", year:2015 },

  // DC
  { set:"71209", name:"Wonder Woman Fun Pack", packType:"Fun Pack", license:"DC Comics", year:2015 },
  { set:"71210", name:"Cyborg Fun Pack", packType:"Fun Pack", license:"DC Comics", year:2015 },
  { set:"71236", name:"Superman Fun Pack", packType:"Fun Pack", license:"DC Comics", year:2016 },
  { set:"71237", name:"Aquaman Fun Pack", packType:"Fun Pack", license:"DC Comics", year:2016 },
  { set:"71240", name:"Bane Fun Pack", packType:"Fun Pack", license:"DC Comics", year:2016 },

  // Simpsons
  { set:"71211", name:"Bart Simpson Fun Pack", packType:"Fun Pack", license:"Les Simpson", year:2015 },
  { set:"71227", name:"Krusty Fun Pack", packType:"Fun Pack", license:"Les Simpson", year:2015 },

  // Lord of the Rings
  { set:"71219", name:"Legolas Fun Pack", packType:"Fun Pack", license:"Le Seigneur des anneaux", year:2015 },
  { set:"71220", name:"Gimli Fun Pack", packType:"Fun Pack", license:"Le Seigneur des anneaux", year:2015 },
  { set:"71218", name:"Gollum Fun Pack", packType:"Fun Pack", license:"Le Seigneur des anneaux", year:2015 },

  // Wizard of Oz
  { set:"71221", name:"Wicked Witch Fun Pack", packType:"Fun Pack", license:"Le Magicien d'Oz", year:2015 },

  // Chima
  { set:"71222", name:"Laval Fun Pack", packType:"Fun Pack", license:"LEGO Chima", year:2015 },
  { set:"71223", name:"Cragger Fun Pack", packType:"Fun Pack", license:"LEGO Chima", year:2015 },
  { set:"71232", name:"Eris Fun Pack", packType:"Fun Pack", license:"LEGO Chima", year:2016 },

  // Ninjago
  { set:"71215", name:"Jay Fun Pack", packType:"Fun Pack", license:"LEGO Ninjago", year:2015 },
  { set:"71216", name:"Nya Fun Pack", packType:"Fun Pack", license:"LEGO Ninjago", year:2015 },
  { set:"71217", name:"Zane Fun Pack", packType:"Fun Pack", license:"LEGO Ninjago", year:2015 },
  { set:"71234", name:"Sensei Wu Fun Pack", packType:"Fun Pack", license:"LEGO Ninjago", year:2016 },
  { set:"71239", name:"Lloyd Fun Pack", packType:"Fun Pack", license:"LEGO Ninjago", year:2016 },

  // Ghostbusters / Ghostbusters 1984
  { set:"71233", name:"Stay Puft Fun Pack", packType:"Fun Pack", license:"S.O.S. Fantômes (1984)", year:2016 },
  { set:"71241", name:"Slimer Fun Pack", packType:"Fun Pack", license:"S.O.S. Fantômes (1984)", year:2016 },

  // Back to the Future
  { set:"71230", name:"Doc Brown Fun Pack", packType:"Fun Pack", license:"Retour vers le futur", year:2016 },

  // Doctor Who
  { set:"71238", name:"Cyberman Fun Pack", packType:"Fun Pack", license:"Doctor Who", year:2016 },

  // A-Team
  { set:"71251", name:"A-Team Fun Pack", packType:"Fun Pack", license:"Agence tous risques", year:2016 },

  // E.T.
  { set:"71258", name:"E.T. Fun Pack", packType:"Fun Pack", license:"E.T.", year:2016 },

  // Fantastic Beasts
  { set:"71257", name:"Tina Goldstein Fun Pack", packType:"Fun Pack", license:"Les Animaux fantastiques", year:2016 },

  // Adventure Time
  { set:"71285", name:"Marceline Fun Pack", packType:"Fun Pack", license:"Adventure Time", year:2016 },

  // LEGO Batman Movie
  { set:"71344", name:"Excalibur Batman Fun Pack", packType:"Fun Pack", license:"LEGO Batman, le film", year:2017 },

  // Knight Rider
  { set:"71286", name:"Knight Rider Fun Pack", packType:"Fun Pack", license:"Knight Rider", year:2017 },

  // Harry Potter
  { set:"71348", name:"Hermione Fun Pack", packType:"Fun Pack", license:"Harry Potter", year:2017 },

  // LEGO City
  { set:"71266", name:"Chase McCain Fun Pack", packType:"Fun Pack", license:"LEGO City", year:2017 },

  // Beetlejuice
  { set:"71349", name:"Beetlejuice Fun Pack", packType:"Fun Pack", license:"Beetlejuice", year:2017 },

  // Powerpuff Girls
  { set:"71343", name:"Buttercup Fun Pack", packType:"Fun Pack", license:"Les Super Nanas", year:2017 },
];

