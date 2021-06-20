// console.log("Hello")
//Road trip planner

let seatsInCar = 7;
let passengers = 2;
let infants = 1;
let infantSeat = 1;
let fullTank  = true;

//check that there's enought rooms for everyone

if(seatsInCar >=passengers &&infantSeat >= infants){
  console.log("ready for the road trip");
  if(fullTank){
    console.log("Readdy to hit the highway");

  }else{
    console.log("Must gas up before the interstate.")
  }
}else {
  console.log("There are no additional rooms aviable for more passengers.");
}


seatsInCar = 3;
passengers =1;

if(seatsInCar >= passengers){
  console.log("ready for the road trip")
}// end enough seats
else{
  console.log("Not ready. check car, passengers, and equipment");
}//end not enought seats
