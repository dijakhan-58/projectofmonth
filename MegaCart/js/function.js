/* DATA */
const snData = [
  { icon: "bi bi-grid-fill", label: "All Departments" },
  { icon: "bi bi-stars", label: "Beauty" },
  { icon: "bi bi-bag-heart", label: "Fashion" },
  { icon: "bi bi-cpu", label: "Electronics" },
  { icon: "bi bi-house-heart", label: "Home & Decor" },
  { icon: "bi bi-bicycle", label: "Sports" },
  { icon: "bi bi-book", label: "Books" },
  { icon: "bi bi-shop", label: "Groceries" },
  { icon: "bi bi-controller", label: "Gaming" },
  { icon: "bi bi-baby-fill", label: "Kids & Baby" },
  { icon: "bi bi-tag-fill", label: "Sale 🔥" },
];
const heroData = [
  {
    cls: "s-light",
    eyebrow: "Best Seller",
    title: "Galaxy S13+ Ultra.",
    sub: "Supercharged for pros.",
    price: "$999.00",
    note: "From $999.00 or $41.62/mo per month",
    img: "https://placehold.co/460x300/dde4f0/050842?text=Galaxy+S13+Ultra",
  },
  {
    cls: "s-dark",
    eyebrow: "New Arrival",
    title: "MacBook Air M3.",
    sub: "Thinnest. Fastest. Ever.",
    price: "$1,099.00",
    note: "From $1,099.00 or $45.79/mo per month",
    img: "https://placehold.co/460x300/050842/c5caf5?text=MacBook+Air+M3",
  },
  {
    cls: "s-blue",
    eyebrow: "Limited Offer",
    title: "iPhone 16 Pro Max.",
    sub: "Titanium. A17 Pro chip.",
    price: "$1,199.00",
    note: "From $1,199.00 or $49.95/mo per month",
    img: "https://placehold.co/460x300/dde8f8/050842?text=iPhone+16+Pro",
  },
];
const sideData = [
  {
    bg: "#e8eaf8",
    tagColor: "#050842",
    tag: "NEW ARRIVAL",
    title: "Pixel 9 Pro",
    price: "From $999.00",
    img: "https://placehold.co/140x100/e8eaf8/050842?text=Pixel+9",
  },
  {
    bg: "#fde8ec",
    tagColor: "#e8363d",
    tag: "BEST PRICE",
    title: "AirPods Pro 2",
    price: "From $199.00",
    img: "https://placehold.co/140x100/fde8ec/1e2246?text=AirPods",
  },
];
const catsData = [
  { icon: "bi bi-stars", name: "Beauty", count: 124 },
  { icon: "bi bi-bag-heart", name: "Fashion", count: 318 },
  { icon: "bi bi-cpu", name: "Electronics", count: 214 },
  { icon: "bi bi-house-heart", name: "Home & Decor", count: 176 },
  { icon: "bi bi-bicycle", name: "Sports", count: 98 },
  { icon: "bi bi-book", name: "Books", count: 245 },
  { icon: "bi bi-shop", name: "Groceries", count: 412 },
  { icon: "bi bi-controller", name: "Gaming", count: 87 },
  { icon: "bi bi-baby-fill", name: "Kids & Baby", count: 153 },
];
const promoData = [
  {
    cls: "pc-lt",
    size: "col-md-6 col-lg-4",
    tag: "BIG SAVING",
    title: "Galaxy S13 Lite\nLove The Price.",
    price: "From $429.00",
    btn: "Buy Now",
    img: "https://placehold.co/185x162/dde4f0/050842?text=S13+Lite",
  },
  {
    cls: "pc-pk",
    size: "col-md-6 col-lg-4",
    tag: "15% OFF",
    title: "Smartwatch 7\nLight On Price.",
    price: "From $399.00",
    btn: "Learn More",
    img: "https://placehold.co/185x162/fde8ec/e8363d?text=Watch+7",
  },
  {
    cls: "pc-bl",
    size: "col-md-6 col-lg-4",
    tag: "SMART HOME",
    title: "Five Bold Colors.\n$99 Each.",
    price: "From $229.00",
    btn: "Buy Now",
    img: "https://placehold.co/185x162/dde8f8/1a5ca8?text=HomePod",
  },
  {
    cls: "pc-cr",
    size: "col-md-6 col-lg-4",
    tag: "BEST PRICE",
    title: "5th Generation\nAirPods.",
    price: "From $499.00",
    btn: "Learn More",
    img: "https://placehold.co/170x145/faf0e4/f47c2a?text=AirPods",
  },
  {
    cls: "pc-lv",
    size: "col-md-6 col-lg-4",
    tag: "FLAT 25% OFF",
    title: "Headset Max 3rd\nGeneration.",
    price: "From $549.00",
    btn: "Buy Now",
    img: "https://placehold.co/170x145/ede8fa/6a3fbf?text=Headset",
  },
  {
    cls: "pc-nv",
    size: "col-md-6 col-lg-4",
    tag: "NEWLY ADDED",
    title: "Mac Book Pro.\nNew Arrival.",
    price: "From $2499",
    btn: "Learn More",
    img: "https://placehold.co/170x145/0b1178/c5caf5?text=MacBook",
  },
];
const prodData = [
  {
    brand: "Apple",
    name: "MacBook Air M3 13-inch",
    price: 1099,
    old: 1299,
    off: 15,
    rat: 5,
    rev: 212,
    badge: "n",
    cat: "new",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=MacBook+Air",
  },
  {
    brand: "Samsung",
    name: "Galaxy S24 Ultra 256GB",
    price: 899,
    old: 1199,
    off: 25,
    rat: 5,
    rev: 341,
    badge: "s",
    cat: "selling",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Galaxy+S24",
  },
  {
    brand: "Sony",
    name: "WH-1000XM6 Wireless ANC",
    price: 299,
    old: 349,
    off: 14,
    rat: 4,
    rev: 178,
    badge: "h",
    cat: "featured",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Sony+XM6",
  },
  {
    brand: "Apple",
    name: 'iPad Pro 12.9" M4 WiFi',
    price: 1099,
    old: null,
    off: null,
    rat: 5,
    rev: 94,
    badge: "n",
    cat: "new",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=iPad+Pro",
  },
  {
    brand: "Garmin",
    name: "Fenix 7 Solar Sapphire",
    price: 599,
    old: 699,
    off: 14,
    rat: 4,
    rev: 67,
    badge: "s",
    cat: "selling",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Fenix+7",
  },
  {
    brand: "Dell",
    name: "XPS 15 OLED Touch 2024",
    price: 1749,
    old: 1999,
    off: 13,
    rat: 5,
    rev: 55,
    badge: "h",
    cat: "featured",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Dell+XPS",
  },
  {
    brand: "Bose",
    name: "QuietComfort Ultra Buds",
    price: 279,
    old: 329,
    off: 15,
    rat: 4,
    rev: 130,
    badge: "n",
    cat: "new",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Bose+QC",
  },
  {
    brand: "Google",
    name: "Pixel 9 Pro 256GB Obsidian",
    price: 999,
    old: null,
    off: null,
    rat: 5,
    rev: 88,
    badge: "n",
    cat: "new",
    img: "https://placehold.co/300x185/f0f1f6/050842?text=Pixel+9",
  },
];
const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "Bose",
  "Google",
  "LG",
  "Microsoft",
  "Lenovo",
  "HP",
  "Asus",
  "Razer",
];
const tabs = ["New Products", "Best Selling", "Featured Products"];
const tabMap = {
  new_products: "new",
  best_selling: "selling",
  featured_products: "featured",
};

/* RENDERS */
// subnav
const snRow = document.getElementById("snRow");
snData.forEach((s, i) => {
  const el = document.createElement("div");
  el.className = "sn-item" + (i === 0 ? " active" : "");
  el.innerHTML = `<i class="${s.icon}"></i>${s.label}`;
  el.onclick = () => {
    document
      .querySelectorAll(".sn-item")
      .forEach((x) => x.classList.remove("active"));
    el.classList.add("active");
  };
  snRow.appendChild(el);
});
// hero
const hw = document.getElementById("heroWrap");
heroData.forEach((s) => {
  hw.innerHTML += `<div class="swiper-slide"><div class="hero-slide ${s.cls}"><div class="slide-body"><div class="s-eyebrow">${s.eyebrow}</div><h1 class="s-title">${s.title}</h1><div class="s-sub">${s.sub}</div><div class="s-price">${s.price}</div><div class="s-note">${s.note}</div><div class="s-btns"><button class="btn-n">Buy Now</button><button class="btn-o">Learn More</button></div></div><div class="slide-img"><img src="${s.img}" alt="${s.title}"/></div></div></div>`;
});
// side
const hs = document.getElementById("heroSide");
sideData.forEach((s) => {
  hs.innerHTML += `<div class="side-banner" style="background:${s.bg}" onmouseenter="this.style.boxShadow='var(--sh2)';this.style.transform='translateY(-3px)'" onmouseleave="this.style.boxShadow='';this.style.transform=''"><div><div class="sb-tag" style="color:${s.tagColor}">${s.tag}</div><div class="sb-title">${s.title}</div><div class="sb-price">${s.price}</div></div><img src="${s.img}" style="max-height:80px;object-fit:contain;flex-shrink:0" alt=""/></div>`;
});
// categories
const cg = document.getElementById("catsGrid");
catsData.forEach((c) => {
  cg.innerHTML += `<div class="col-4 col-sm-3 col-md-2 col-lg"><a href="#" class="cat-itm"><div class="cat-box"><i class="${c.icon}"></i></div><div class="cat-nm">${c.name}</div><div class="cat-ct">${c.count} items</div></a></div>`;
});
// promos
const pg = document.getElementById("promoGrid");
promoData.forEach((p) => {
  pg.innerHTML += `<div class="${p.size}"><div class="pcard ${p.cls}"><div class="p-tag">${p.tag}</div><div class="p-ttl">${p.title.replace("\n", "<br>")}</div><div class="p-price">${p.price}</div><button class="p-btn">${p.btn}</button><img src="${p.img}" class="p-img" alt="" style="border-radius:8px"/></div></div>`;
});
// products
function renderProds(list) {
  const g = document.getElementById("prodGrid");
  g.innerHTML = "";
  list.forEach((p) => {
    const st = Array.from(
      { length: 5 },
      (_, i) => `<i class="bi bi-star${i < p.rat ? "-fill" : ""}"></i>`,
    ).join("");
    g.innerHTML += `<div class="col-6 col-md-4 col-lg-3"><div class="pc"><span class="bdg bdg-${p.badge}">${p.badge === "n" ? "NEW" : p.badge === "s" ? "SALE" : "HOT"}</span><div class="wsh"><i class="bi bi-heart"></i></div><div class="pc-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div><div class="pc-body"><div class="pc-brand">${p.brand}</div><div class="pc-name">${p.name}</div><div><span class="pc-stars">${st}</span> <span class="pc-rev">(${p.rev})</span></div><div class="pc-prices"><span class="pc-price">$${p.price}</span>${p.old ? `<span class="pc-old">$${p.old}</span>` : ""}${p.off ? `<span class="pc-off">-${p.off}%</span>` : ""}</div><button class="pc-add" onclick="addCart('${p.name}')"><i class="bi bi-bag-plus"></i> Add to Cart</button></div></div></div>`;
  });
}
renderProds(prodData);
// tabs
const tt = document.getElementById("trendTabs");
tabs.forEach((t, i) => {
  const key = t.toLowerCase().replace(/ /g, "_");
  const el = document.createElement("button");
  el.className = "t-tab" + (i === 0 ? " active" : "");
  el.textContent = t;
  el.onclick = () => {
    document
      .querySelectorAll(".t-tab")
      .forEach((x) => x.classList.remove("active"));
    el.classList.add("active");
    const f = prodData.filter((p) => p.cat === tabMap[key]);
    renderProds(f.length ? f : prodData);
  };
  tt.appendChild(el);
});
document.getElementById("pNext").onclick = () =>
  renderProds([...prodData].reverse());
document.getElementById("pPrev").onclick = () => renderProds(prodData);
// brands
const bw = document.getElementById("brandWrap");
brands.forEach((b) => {
  bw.innerHTML += `<div class="swiper-slide br-item">${b}</div>`;
});

/* SWIPERS */
new Swiper(".heroSwiper", {
  loop: true,
  autoplay: { delay: 4500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
});
new Swiper(".brandsSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  autoplay: { delay: 1400, disableOnInteraction: false },
  breakpoints: {
    480: { slidesPerView: 4 },
    640: { slidesPerView: 5 },
    768: { slidesPerView: 6 },
    992: { slidesPerView: 8 },
    1200: { slidesPerView: 10 },
  },
});

/* COUNTDOWN */
let sec = 9 * 3600 + 45 * 60 + 22;
setInterval(() => {
  if (sec <= 0) return;
  sec--;
  const h = Math.floor(sec / 3600),
    m = Math.floor((sec % 3600) / 60),
    s = sec % 60;
  document.getElementById("t-h").textContent = String(h).padStart(2, "0");
  document.getElementById("t-m").textContent = String(m).padStart(2, "0");
  document.getElementById("t-s").textContent = String(s).padStart(2, "0");
}, 1000);

/* CART */
let cn = 0;
function addCart(name) {
  cn++;
  document.getElementById("cartCnt").textContent = cn;
  const t = document.createElement("div");
  t.className = "toast-n";
  t.innerHTML = `<i class="bi bi-check-circle-fill" style="color:#4caf50;font-size:18px"></i> <strong>${name.substring(0, 22)}…</strong> added!`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

/* HAMBURGER */
const navToggler = document.getElementById("navToggler");
const navMobile = document.getElementById("navMobile");
const togIcon = document.getElementById("togIcon");
navToggler.addEventListener("click", () => {
  const open = navMobile.classList.toggle("open");
  togIcon.className = open ? "bi bi-x-lg" : "bi bi-list";
});
function toggleNmDrop(e, id) {
  e.preventDefault();
  document.getElementById(id).classList.toggle("open");
}
