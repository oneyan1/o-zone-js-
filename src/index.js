"use strict";

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addToCart from './modules/addToCart';
import filterAndSearch from './modules/filterAndSearch';



(async function () {
    const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckbox();
    toggleCart();
    addToCart();
    filterAndSearch();
}());