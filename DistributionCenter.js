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
        theFleet.enqueue(new Truck());
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
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    let ready = distribute(flemhouse,flemfleet);
    //ready is empty
    console.log(ready.dequeue());
    for(let s=0;s<ready.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(!ready.isEmpty()){
          let ct = ready.dequeue();
          console.log(ct.spaceEfficiency());
          for(let x=0; x<ct.inventory.length; x++){
              console.log(ct.inventory[x].name);
          }
        }
    }
}

main();
