// Daycare Finder South Africa - beginner-friendly demo data and interactions.
// The sample centres below are fictional. Replace them only with verified listings.
const demoListings = [
  {id:"demo-1",name:"Little Acorns Daycare",area:"Germiston",province:"Gauteng",age:"Toddlers",fee:1350,phone:"",description:"A fictional example listing for the Germiston area.",demo:true},
  {id:"demo-2",name:"Rainbow Steps Preschool",area:"Johannesburg",province:"Gauteng",age:"Preschool",fee:1650,phone:"",description:"A fictional preschool example with a playful learning theme.",demo:true},
  {id:"demo-3",name:"Tiny Tots Learning House",area:"Durban",province:"KwaZulu-Natal",age:"Babies",fee:1900,phone:"",description:"A fictional baby-care example listing.",demo:true},
  {id:"demo-4",name:"Sunbeam Early Learning",area:"Cape Town",province:"Western Cape",age:"Toddlers",fee:2100,phone:"",description:"A fictional example to demonstrate province filtering.",demo:true},
  {id:"demo-5",name:"Busy Bees Preschool",area:"Mbombela",province:"Mpumalanga",age:"Preschool",fee:1450,phone:"",description:"A fictional example listing for the Mbombela area.",demo:true},
  {id:"demo-6",name:"Clever Cubs Daycare",area:"Polokwane",province:"Limpopo",age:"Toddlers",fee:1200,phone:"",description:"A fictional example listing with a lower monthly fee.",demo:true}
];

const $ = (selector) => document.querySelector(selector);
const storageKeys = {added:"daycareFinderAdded", favorites:"daycareFinderFavorites"};
const readStored = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch (error) { return fallback; }
};
let addedListings = readStored(storageKeys.added, []);
let favorites = readStored(storageKeys.favorites, []);

function allListings() { return [...demoListings, ...addedListings]; }
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderListings() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const province = $("#provinceFilter").value;
  const age = $("#ageFilter").value;
  const maxFee = $("#feeFilter").value === "" ? Infinity : Number($("#feeFilter").value);
  const filtered = allListings().filter(item => {
    const searchable = `${item.name} ${item.area} ${item.province}`.toLowerCase();
    return searchable.includes(search) && (!province || item.province === province) &&
      (!age || item.age === age) && item.fee <= maxFee;
  });
  $("#resultCount").textContent = `${filtered.length} ${filtered.length === 1 ? "listing" : "listings"}`;
  $("#emptyState").hidden = filtered.length !== 0;
  $("#listingGrid").innerHTML = filtered.map(item => {
    const isFavorite = favorites.includes(item.id);
    const mapQuery = encodeURIComponent(`${item.name}, ${item.area}, ${item.province}, South Africa}`);
    const contact = item.phone ? `<a class="small-button" href="tel:${escapeHTML(item.phone.replace(/[^+\d]/g,""))}">Call</a>` : "";
    return `<article class="listing-card">
      <div class="card-top"><div class="card-emoji">🏡</div><span class="age-pill">${escapeHTML(item.age)}</span></div>
      <h3>${escapeHTML(item.name)}</h3><p class="location">📍 ${escapeHTML(item.area)}, ${escapeHTML(item.province)}</p>
      <p class="description">${escapeHTML(item.description || "Contact the centre to ask about its programme and availability.")}</p>
      ${item.demo ? '<p class="location"><strong>Demo listing — fictional</strong></p>' : ""}
      <div class="card-bottom"><div class="fee">R${Number(item.fee).toLocaleString("en-ZA")}<small>per month · confirm fee</small></div>
        <div class="card-actions"><button class="small-button favorite ${isFavorite ? "active" : ""}" data-favorite="${escapeHTML(item.id)}" aria-label="Save ${escapeHTML(item.name)}">${isFavorite ? "♥ Saved" : "♡ Save"}</button>${contact}<a class="small-button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}">Map</a></div>
      </div></article>`;
  }).join("");
}
["searchInput","provinceFilter","ageFilter","feeFilter"].forEach(id => {
  $(`#${id}`).addEventListener("input", renderListings);
  $(`#${id}`).addEventListener("change", renderListings);
});
$("#resetBtn").addEventListener("click", () => {
  $("#searchInput").value = ""; $("#provinceFilter").value = "";
  $("#ageFilter").value = ""; $("#feeFilter").value = ""; renderListings();
});
$("#listingGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  const id = button.dataset.favorite;
  favorites = favorites.includes(id) ? favorites.filter(value => value !== id) : [...favorites, id];
  localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites));
  renderListings();
});
$("#addForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const listing = {
    id:`user-${Date.now()}`, name:form.get("name").trim(), area:form.get("area").trim(),
    province:form.get("province"), age:form.get("age"), fee:Number(form.get("fee")),
    phone:form.get("phone").trim(), description:form.get("description").trim(), demo:false
  };
  if (!listing.name || !listing.area || !listing.province || !listing.age || !Number.isFinite(listing.fee) || listing.fee < 0) return;
  addedListings.push(listing);
  localStorage.setItem(storageKeys.added, JSON.stringify(addedListings));
  event.currentTarget.reset();
  $("#formMessage").textContent = "Listing added on this device. It is not published for other visitors.";
  renderListings();
});
renderListings();
