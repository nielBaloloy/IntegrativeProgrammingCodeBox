
//car
let car={
  name:"Sedan",
  color:"red",
  Price:5000,
  model:"1970",
  quantity:2,
  drive:function(){
    return `I am driving ${this.name}`;
  }
};
let displayCar = document.getElementById("ObjectList");
let carDiv = document.createElement("div");
carDiv.innerHTML = `Car Name:${car.name} <br/>
                    Car Color:${car.color} <br/>
                    Car Function:${car.drive()}`;
displayCar.appendChild(carDiv);


  
