import { initNavbar } from './navbar.js';
import { initShop } from './shop.js';
import { initForms } from './forms.js';
import { updateYear } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initShop();
    initForms();
    updateYear();
});