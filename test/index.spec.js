'use strict'

const { expect } = require('chai');
const { getCountryName } = require('../index');

describe('ISO 3166 Country Code', () => {
    describe('Existing country code', () => {
        it('should get country name', () => {
            const country = getCountryName('PL');
            expect(country).to.equal('Poland');
        });
    });
    describe('Not existing country code', () => {
        it('should throw error', () => {
            let error;
            try {
                getCountryName('XX');
            } catch (e) {
                error = e;
            }
            expect(error.message).to.equal('Country not found');
        });
    });
});