export const formulario = document.querySelector('.formulario-receta');
export const contenedorPlatillos = document.querySelector(
  '.container-recet-card'
);
export const ventanaFlotante = document.querySelector('.info__platillos-div');

export let valueInput;
export const APP_ID = 'a656c93e';
export const APP_key = '55ac941fdc4fd97096e6f2f9352ee6c0';

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  valueInput = document.querySelector('#receta').value;
  fetchAPI(valueInput);
});
export async function fetchAPI(valueInput = 'pollo') {
  const baseURL = `https://api.edamam.com/search?q=${valueInput}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=30`;
  const res = await fetch(baseURL);
  const dat = await res.json();
  generarHTML(dat.hits);
}

export const generarHTML = (platillos) => {
  limpiarHTML();
  for (let prod of platillos) {
    const { image, ingredientLines, label, calories, url } = prod.recipe;
    const calorias = parseFloat(calories).toFixed(2);
    contenedorPlatillos.innerHTML += `
    <div class="card">
    <div class="receta__card">
      <div class="receta-img">
        <img src="${image}" alt="">
      </div>
      <div class="receta-detail">
        <h2>${label}</h2>
        <div class="parrafo-detail">
          <div class="info__receta-div">

            <p>
              ${ingredientLines}
            </p>
          </div>

        </div>
        <div class="buttons__card-receta">
          <div class="calorias-info">calorias: ${calorias}</div>
          <button class="cart-btn ver-recet">ver receta</button>
        </div>
      </div>

    </div>
  </div>
    `;
    const btn = document.querySelectorAll('.ver-recet');

    btn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const informacionPlatillos = e.target.parentElement.parentElement;
        console.log(informacionPlatillos);
        ventanaFlotante.style.display = 'block';
        ventanaFlotante.addEventListener('click', (e) => {
          if (e.target.classList.contains('cerrerV')) {
            ventanaFlotante.style.display = 'none';
          }
        });

        const titulo =
          informacionPlatillos.querySelector('.receta-detail h2').textContent;
        const detallesPts = informacionPlatillos.querySelector(
          '.info__receta-div p'
        ).textContent;

        ventanaFlotante.innerHTML = `
          <div class="titulo-info">
            <h2>${titulo}</h2>
            <h3 class="cerrerV">x</h3>
          </div>
          <p>${detallesPts}</p>
          <a href="${url}">ir a la receta</a>
        `;
      });
    });
  }
  formulario.reset();
};

export const limpiarHTML = () => {
  while (contenedorPlatillos.firstChild) {
    contenedorPlatillos.removeChild(contenedorPlatillos.firstChild);
  }
};
