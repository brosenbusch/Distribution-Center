const Product = require('./Product.js');
const Queue = require('./queue.js');
const Truck = require('./Truck.js');
//require all of the other files, with node.js,  linkedlist.js, and queue.js

function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return Warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberoftrucks;x++){
        //decide truck size
        let randomnumber = Math.random();
        if(randomnumber <= 0.33){
            size = "small";
        }
        else if(randomnumber > 0.33 && randomnumber < 0.66){
            size = "medium";
        }
        else{
            size = "large";
        }
        theFleet.enqueue(new Truck(size));
    }
    return theFleet;

}
function distribute(wh,tf){
    //distribute the products in the warehouse to the truck fleet.
    let ready = new Queue();
    while(!wh.isEmpty() && !tf.isEmpty()){
        let currentTruck = tf.dequeue();
        while(currentTruck.spaceEfficiency()<1){
            currentTruck.inventory.push(wh.dequeue());
        }
        if(currentTruck.spaceEfficiency()>1){
            wh.enqueue(currentTruck.inventory.pop());
        }
        ready.enqueue(currentTruck);
    }
    return ready;
}

function main(){
    console.log("Started...\n")
    let flemhouse = configureWareHouse(10);
    let flemfleet = configureTruckFleet(10);

    let ready = distribute(flemhouse,flemfleet);

    ready.print();
    flemhouse.print();
    flemfleet.print();
    while(!ready.isEmpty()){
        console.log("Truck with products...");
        console.log("----------------------");
        let t = ready.dequeue();
        console.log(t.spaceEfficiency());
        for(let x=0; x<ct.inventory.length; x++){
            console.log(ct.inventory[x].name);
        }
    }
}

main();
