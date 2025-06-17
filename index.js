function scuberGreetingForFeet(feet){
  let sample;
  if (feet <= 400){
    sample = "This one is on me!";
  } else if (feet <=2000){
    sample= "That will be twenty bucks.";
  } else if(feet <=2500) {
    sample = "I will gladly take your thirty bucks.";
  } else {
    sample = "No can do.";
  }
  return sample;
}

function ternaryCheckCity(city){
  const myCity = "NYC";
  return city === myCity ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  //const isTip = "generous"
  let myTip;
  switch(tip) {
    case "generous":
      myTip = "Thank you so much.";
      break;
    case "not as generous":
      myTip = "Thank you.";
      break;
    default :
      myTip = "Bye.";
      break;
  }
  return myTip;
}