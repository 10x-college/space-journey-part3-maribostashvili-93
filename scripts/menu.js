const menuData = [
  // --- MAINS (მთავარი კერძები) ---
  {
    image: "assets/nebula_nudles.jpeg",
    alt: "Nebula Noodles",
    category: "mains",
    ingredients: [
      "Plasma Rice Noodles",
      "Bioluminescent Algae",
      "Void Broth",
      "Star Anise",
    ],
    title: "Nebula Noodle Soup",
    description:
      "Glowing purple broth with stardust spices. A local favorite in the Orion Belt.",
    origin: "ORION",
    price: "15 Cr",
  },
  {
    image: "assets/QuantumBurger.jpeg",
    alt: "Quantum Burger",
    category: "mains",
    ingredients: [
      "Anti-Matter Patty",
      "Gamma-Irradiated Lettuce",
      "Levitation Yeast Bun",
      "Neon Cheese",
    ],
    title: "Quantum Burger",
    description:
      "The patties levitate. Eat quickly before it phases into another dimension.",
    origin: "EARTH-616",
    price: "22 Cr",
  },
  {
    image: "assets/SolarFlareWings.jpeg",
    alt: "Solar Flare Wings",
    category: "mains",
    ingredients: [
      "Phoenix Poultry",
      "Magma Hot Sauce",
      "Solar Dust",
      "Thermal Spices",
    ],
    title: "Solar Flare Wings",
    description:
      "Wings that emit actual heat and light. Served with thermal protective gloves.",
    origin: "THE SUN",
    price: "18 Cr",
  },
  {
    image: "assets/VoidSteak.jpeg",
    alt: "Void Steak",
    category: "mains",
    ingredients: [
      "Bovine from the Void",
      "Dark Matter Rub",
      "Electric Blue Jus",
    ],
    title: "Void Steak",
    description:
      "Pitch black crust with a glowing electric blue center. Tastes like infinity.",
    origin: "DEEP SPACE",
    price: "45 Cr",
  },
  {
    image: "assets/Xeno-EggsBenedict.jpeg",
    alt: "Xeno-Eggs Benedict",
    category: "mains",
    ingredients: ["Reptilian Eggs", "Green Hollandaise", "Cyber-Ham"],
    title: "Xeno-Eggs Benedict",
    description:
      "Spotted green eggs from an unknown species. Safe for human consumption (mostly).",
    origin: "KRYPTON",
    price: "20 Cr",
  },
  {
    image: "assets/RadioactiveRamen.jpeg",
    alt: "Radioactive Ramen",
    category: "mains",
    ingredients: ["Uranium-Enriched Broth", "Glowing Noodles", "Mutated Pork"],
    title: "Radioactive Ramen",
    description:
      "Neon green noodles in a dark oily broth. (Geiger counter not included).",
    origin: "CHERNOBYL-2",
    price: "18 Cr",
  },
  {
    image: "assets/CometCurry.jpeg",
    alt: "Comet Curry",
    category: "mains",
    ingredients: ["Icy Mint Yogurt", "Red Tail Curry", "Speed-Grown Rice"],
    title: "Comet Curry",
    description: "Spicy red curry served with a cooling tail of mint yogurt.",
    origin: "HALLEY",
    price: "21 Cr",
  },
  {
    image: "assets/HyperdriveHotdog.jpeg",
    alt: "Hyperdrive Hotdog",
    category: "mains",
    ingredients: ["Sonic Sausage", "Blue Relish Streaks", "Chrome Bun"],
    title: "Hyperdrive Hotdog",
    description:
      "Streaked with neon blue relish to look like it's moving at lightspeed.",
    origin: "REST STOP 5",
    price: "9 Cr",
  },
  {
    image: "assets/SupernovaSushi.jpeg",
    alt: "Supernova Sushi",
    category: "mains",
    ingredients: ["Exploding Roe", "Stellar Salmon", "Wasabi Flare"],
    title: "Supernova Sushi",
    description:
      "The fish roe glows bright orange and pops with intense flavor.",
    origin: "NEO-TOKYO",
    price: "25 Cr",
  },
  {
    image: "assets/Mars-DustTacos.jpeg",
    alt: "Mars-Dust Tacos",
    category: "mains",
    ingredients: ["Red Corn Shells", "Iron-Rich Meat", "Spicy Dust"],
    title: "Mars-Dust Tacos",
    description:
      "Red shells with a dusty texture, filled with spicy Martian meat.",
    origin: "MARS",
    price: "14 Cr",
  },

  // --- SIDES (გარნირები/საუზმეულობა) ---
  {
    image: "assets/AsteroidMeatballs.jpeg",
    alt: "Asteroid Meatballs",
    category: "sides",
    ingredients: [
      "Ground Meteorite Beef",
      "Crater Breadcrumbs",
      "Molten Marinara",
    ],
    title: "Asteroid Meatballs",
    description: "Crunchy, cratered spheres served with a dipping lava sauce.",
    origin: "MARS BELT",
    price: "19 Cr",
  },
  {
    image: "assets/LunarCheeseFries.jpeg",
    alt: "Lunar Cheese Fries",
    category: "sides",
    ingredients: ["Vacuum Fried Potatoes", "Grey Moon-Cheese", "Regolith Salt"],
    title: "Lunar Cheese Fries",
    description:
      "Fries covered in a grey powdery cheese that looks exactly like moon dust.",
    origin: "THE MOON",
    price: "10 Cr",
  },
  {
    image: "assets/BlackHoleBagel.jpeg",
    alt: "Black Hole Bagel",
    category: "sides",
    ingredients: [
      "Vantablack Dough",
      "Event Horizon Cream Cheese",
      "Dark Seeds",
    ],
    title: "Black Hole Bagel",
    description:
      "Absorbs 99.9% of visible light. The densest bagel in the universe.",
    origin: "VOID SECTOR",
    price: "8 Cr",
  },
  {
    image: "assets/Orbital.jpeg",
    alt: "Orbital Onion Rings",
    category: "sides",
    ingredients: ["Saturn Onions", "Magnetic Batter", "Gravity Sauce"],
    title: "Orbital Onion Rings",
    description:
      "Crispy rings suspended magnetically around a central sauce cup.",
    origin: "SATURN",
    price: "11 Cr",
  },

  // --- DESSERTS (დესერტები) ---
  {
    image: "assets/Zero-GGelato.jpeg",
    alt: "Zero-G Gelato",
    category: "desserts",
    ingredients: [
      "Condensed Nebula Milk",
      "Anti-Gravity Stabilizers",
      "Frozen Nitrogen",
    ],
    title: "Zero-G Gelato",
    description:
      "Floating scoops of ice cream. You have to chase them to eat them.",
    origin: "STATION X",
    price: "12 Cr",
  },
  {
    image: "assets/StardustPancakes.jpeg",
    alt: "Stardust Pancakes",
    category: "desserts",
    ingredients: [
      "Fluffy Cloud Batter",
      "Edible Gold Glitter",
      "Galactic Syrup",
    ],
    title: "Stardust Pancakes",
    description:
      "A fluffy stack served with glittering syrup that sparkles in the dark.",
    origin: "VENUS",
    price: "16 Cr",
  },
  {
    image: "assets/DarkMatterMousse.jpeg",
    alt: "Dark Matter Mousse",
    category: "desserts",
    ingredients: ["Concentrated Cocoa", "Gravity Waves", "Silver Flakes"],
    title: "Dark Matter Mousse",
    description: "A dessert so heavy it curves spacetime around your spoon.",
    origin: "LAB 1",
    price: "13 Cr",
  },
  {
    image: "assets/Cryo-FrozenCake.jpeg",
    alt: "Cryo-Frozen Cake",
    category: "desserts",
    ingredients: [
      "Blue Velvet",
      "Liquid Nitrogen Frosting",
      "Edible Ice Shards",
    ],
    title: "Cryo-Frozen Cake",
    description:
      "Encased in thin ice, heavy cold vapor rolls off it as you eat.",
    origin: "HOTH",
    price: "16 Cr",
  },
  {
    image: "assets/NanoBanana.jpeg",
    alt: "Nano Banana Split",
    category: "desserts",
    ingredients: ["Metallic Bananas", "Pixelated Cherries", "Synth-Cream"],
    title: "Nano Banana Split",
    description:
      "Metallic gold bananas with toppings that look like pixel blocks.",
    origin: "CYBERTRON",
    price: "17 Cr",
  },

  // --- DRINKS (სასმელები) ---
  {
    image: "assets/ChromosphereCocktail.jpeg",
    alt: "Chromosphere Cocktail",
    category: "drinks",
    ingredients: ["Liquid Prism", "Dry Ice", "Fermented Starfruit"],
    title: "Chromosphere Cocktail",
    description: "A drink that shifts colors every time you take a sip.",
    origin: "BAR 99",
    price: "14 Cr",
  },
];

// 1. ელემენტების შერჩევა (მხოლოდ ერთხელ!)
const menuGrid = document.getElementById("menuGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

// 2. ფუნქცია: მენიუს გამოტანა ეკრანზე
function displayMenuItems(menuItems) {
  // გასუფთავება ძველი კონტენტის
  menuGrid.innerHTML = "";

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // ინგრედიენტების სიის აწყობა
    const ingredientsHTML = item.ingredients
      .map((i) => `<li>${i}</li>`)
      .join("");

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="${item.alt}" />
        <div class="ingredients-overlay">
          <h4>Scanner Analysis</h4>
          <ul>
            ${ingredientsHTML}
          </ul>
        </div>
      </div>

      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">
          ${item.description}
        </p>
        <div class="card-footer">
          <span class="origin">${item.origin}</span>
          <span class="price">${item.price}</span>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// 3. თავიდან გამოვიტანოთ ყველა კერძი (გვერდის ჩატვირთვისას)
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuData);
});

// 4. ფილტრის ღილაკებზე კლიკის ლოგიკა
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // კატეგორიის წაკითხვა ღილაკიდან (data-id)
    const category = e.currentTarget.dataset.id;

    // ვიზუალი: Active კლასის გადატანა
    filterBtns.forEach((b) => b.classList.remove("active"));
    e.currentTarget.classList.add("active");

    // ფილტრაცია
    const menuCategory = menuData.filter((menuItem) => {
      // თუ კატეგორია ემთხვევა, ვაბრუნებთ ელემენტს
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    // ეკრანზე გამოტანა
    if (category === "all") {
      displayMenuItems(menuData);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});
