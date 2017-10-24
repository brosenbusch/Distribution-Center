const Truck = function(size){
    let type = size;
    let inventory = [];
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

  function spaceEfficiency(){
      let sum = 0;
      let len = inventory.length;
      for(let x=0; x<len; x++){
        sum += inventory[x].space;
      }
      return sum/capacity;
  }
}
module.exports = Truck;
