const Product = function (){

    let name = determineName();
    let price = determineNumber();
    let space = determineNumber();
    let prime = determinePrime();

    function determineName(){
        let word = "";
        for (let x=0; x<5; x++){
            let c = Math.floor(25*Math.random()+65);
            let letter = String.fromCharCode(c);
            word += letter;
        }
        return word;
    }

    function determineNumber(){
        let price = Math.round(10000*Math.random())/100;
        return price;
    }

    function determinePrime(){
        let num = Math.random();
        if (num >= 0.5){
            prime = true;
        }
        else{
            prime = false;
        }
    }
    return {name,price,space,prime};
}
module.exports = Product;
