'use strict';
/**
 * Author: Arek Jaworski
 */

/**
 * Country codes scraped from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
const countryCodes = require('./country-codes');

/**
 * Get country name for given ISO 3166 country code
 *
 * @param {String} code ISO 3166 two character country code
 * @returns {String} Country Name
 * @throws {Error}
 */
function getCountryName(code) {
  const country = countryCodes[code];
  if (!country) throw Error('Country not found');
  return country;
}

module.exports = { getCountryName };
