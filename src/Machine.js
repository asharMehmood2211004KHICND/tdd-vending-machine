module.exports = class Machine {
    constructor() {
        
    }
    




    seeSelections() {
        let items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
        return items;
        
    }

    deposit(amount_entered){
        this.last_amount_entered = amount_entered;
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
    
    addMoney(added_money){
     let  total_money = this.last_amount_entered+=added_money;
       return total_money;
        
    }

    // selectItem(code){
    //     let item_code = ['crisps','chocolate','mints'];
    //      //rate_list = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    //     if(item_code.includes(code) ){
    //         return "thanks"
                
    //     }else{
    //         return 'The item you selected is unavailable';
    //     }
        
    // }


    selectItem(code){
        let item_code = ['crisps','chocolate','mints'];
        let rate_list = [{crisps: 100}, {chocolate: 350}, {mints: 70}];
        if(item_code.includes(code) ){


            // rate_list.forEach(element => {
            //     // console.log(element);
            //     if(this.last_amount_entered < rate_list[2].mints){}

                
            // })
            // ;
            
            if(this.last_amount_entered < rate_list[2].mints){
                console.log(rate_list[2].code);    
                return `Your deposit is insufficient. Please add Rs ${rate_list[2].mints - this.last_amount_entered} for this item`;
                
            }
                
        }else{
            return 'The item you selected is unavailable';
        }
        
    }

};


// const machine = new Machine();
// machine.deposit(33);