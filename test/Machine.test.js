const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(expected).toEqual(actual);
    });

});
