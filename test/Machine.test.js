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


    it('I want to know how much money I have deposited, so that I know what I can purchase', () => {
        // setup
        const machine = new Machine();
        //machine.deposit(100);
        const expected = 'You have deposited Rs 100';

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(expected).toEqual(actual);
    });


    it('I want to add additional money, so that I can use the denominations I have to purchase an item.', () => {
        // setup
        const machine = new Machine();
        //machine.deposit(100);
        const expected = 'You have deposited Rs 150';

        // exercise
        machine.deposit(100);
        last_amount_entered=machine.last_amount_entered;
        const actual = `You have deposited Rs ${machine.addMoney(50)}`;

        // assert
        expect(expected).toEqual(actual);
    });

    it('I want to see a message if my item is unavailable, so that I can make another choice', () => {
        // setup
        const machine = new Machine();
        const expected = 'The item you selected is unavailable';

        // exercise
        const actual = machine.selectItem('dew');

        // assert
        expect(expected).toEqual(actual);
    });    

});
