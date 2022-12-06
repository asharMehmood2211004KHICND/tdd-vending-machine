module.exports = class Machine {
    constructor() {
        
    }
    



    seeSelections() {
        let items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
        return items;
        
    }

    deposit(amount_entered){
        
        let arr = [10,20,50,100,500];

        // for(let i=0;i<=arr.length;i++){
        //     if(amount_entered == arr[i]){
        //         console.log(arr[i]);
        //        return `You have deposited Rs ${arr[i]}`;
        //     }else{
        //         return 'invalid amount';
        //     }
        // }

        if(arr.includes(amount_entered)){
            // return `You have deposited Rs ${amount_entered}`;
            return `You have deposited Rs ${amount_entered}`;
        }else{
            return 'invalid amount'
        }
    }
    

};


// const machine = new Machine();
// machine.deposit(33);