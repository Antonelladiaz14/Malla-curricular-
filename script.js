// Maneja pestañas de semestres
const tabs = document.querySelectorAll('.tab-button');
const semestres = document.querySelectorAll('.semestre');
const infoRamo = document.getElementById('info-ramo');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Cambiar activo en botones
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Mostrar solo el semestre seleccionado
    const semestre = tab.getAttribute('data-semestre');
    semestres.forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-semestre') === semestre);
    });

    // Limpiar info al cambiar semestre
    infoRamo.innerHTML = '<h2>Detalles del ramo</h2><p>Haz clic en un ramo para ver sus detalles aquí.</p>';
  });
});

// Maneja clicks en ramos
const ramos = document.querySelectorAll('.ramo');
ramos.forEach(ramo => {
  ramo.addEventListener('click', () => {
    const nombre = ramo.getAttribute('data-nombre');
    const creditos = ramo.getAttribute('data-creditos') || 'N/A';
    const prereqs = ramo.getAttribute('data-prerequisitos') || 'Ninguno';
    const semestre = ramo.parentElement.getAttribute('data-semestre');
    const area = ramo.getAttribute('data-area');

    infoRamo.innerHTML = `
      <h2>${nombre}</h2>
      <p><strong>Créditos:</strong> ${creditos}</p>
      <p><strong>Semestre:</strong> ${semestre}°</p>
      <p><strong>Prerrequisitos:</strong> ${prereqs}</p>
      <p><strong>Área:</strong> ${capitalize(area)}</p>
    `;
  });

  // Permite usar teclado para seleccionar ramos
  ramo.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      ramo.click();
    }
  });
});

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
