let currentPage = 0;
const thumbsContainer = document.getElementById('thumbs');
const pageInfo = document.getElementById('page-info');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const digimonInfo = document.getElementById('digimon-info');
const manualInput = document.getElementById('digimon-id');
const loadButton = document.getElementById('load-digimon');

// Load thumbnails with pagination
async function loadThumbnails(page = 0) {
  try {
    const res = await fetch(`https://digi-api.com/api/v1/digimon?page=${page}`);
    const data = await res.json();

    thumbsContainer.innerHTML = '';
    data.content.forEach(d => {
      const div = document.createElement('div');
      div.className = 'thumb';
      div.innerHTML = `<img src="${d.image}" alt="${d.name}"><div>${d.name} <br>Id:  ${d.id}</div>`;
      div.addEventListener('click', () => loadDigimonDetails(d.id));
      thumbsContainer.appendChild(div);
    });

    // Update pagination
    currentPage = data.pageable.currentPage;
    pageInfo.textContent = `Page ${currentPage + 1} of ${data.pageable.totalPages}`;
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= data.pageable.totalPages - 1;

  } catch (err) {
    console.error('Failed to load Digimon list', err);
    thumbsContainer.innerHTML = '<p>Error loading Digimon list.</p>';
  }
}

// Load digimon details by ID
async function loadDigimonDetails(id) {
  try {
    const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
    if (!res.ok) throw new Error('Not found');

    const digimon = await res.json();

    const name = digimon.name;
    const imageUrl = digimon.images[0]?.href || '';
    const level = digimon.levels.map(lvl => lvl.level).join(', ') || 'Unknown';
    const types = digimon.types.map(t => t.type).join(', ') || 'Unknown';
    const attributes = digimon.attributes.map(attr => attr.attribute).join(', ') || 'Unknown';
    const description = digimon.descriptions.find(desc => desc.language === "en_us")?.description || "No description available.";
    const skills = digimon.skills.map(skill => `<li><strong>${skill.skill}:</strong> ${skill.description}</li>`).join('');

    digimonInfo.innerHTML = `
      <h2>${name}</h2>
      ${imageUrl ? `<img src="${imageUrl}" alt="${name}">` : ''}
      <p><span class="section-title">Description:</span> ${description}</p>
      <p><span class="section-title">Level:</span> ${level}</p>
      <p><span class="section-title">Type(s):</span> ${types}</p>
      <p><span class="section-title">Attribute(s):</span> ${attributes}</p>
      <p class="section-title">Skills:</p>
      <ul>${skills || '<li>No skills listed.</li>'}</ul>
    `;
  } catch (err) {
    console.error('Failed to load Digimon details', err);
    digimonInfo.innerHTML = `<p>Digimon not found or error fetching data.</p>`;
  }
}

// Manual input handler
loadButton.addEventListener('click', () => {
  const id = manualInput.value.trim();
  if (id) loadDigimonDetails(id);
});

// Pagination buttons
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) loadThumbnails(currentPage - 1);
});

nextBtn.addEventListener('click', () => {
  loadThumbnails(currentPage + 1);
});

// Init
loadThumbnails();
