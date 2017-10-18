const LinkedList = require('./LinkedList.js')

const Truck = function(size){
    let type = size;
    let inventory = new LinkedList();
    let capacity = setCapacity(size);

    function setCapacity(){
        type = type.toLowerCase();
        if(size = "small"){
            return 1000;
        }
        else if(size = "medium"){
            return 2000;
        }
        else if(size = "large"){
            return 5000;
        }
    }
}
