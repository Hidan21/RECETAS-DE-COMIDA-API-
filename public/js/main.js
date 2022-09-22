import { activarMenu } from '../js/menu/navMenu.js';
import { iniciar } from '../js/swiper/swiper.js';
import {
  formulario,
  ventanaFlotante,
  fetchAPI,
} from '../js/consultarApi/api.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchAPI();
});
iniciar();
activarMenu();
