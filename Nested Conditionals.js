let password = prompt("Set your password");
if(password.length >= 6){
    if(password.indexOf(" ") === -1) {
        console.log("Valid Password");
    }else{
        console.log("Passowrd must not have spaces");
    }
}else{
    console.log("Weak Password");
}

let cgpa = prompt("Your final CGPA");
let experience = prompt("Your experience in years");
if(cgpa >= 3){
    if(experience >= 1){
        console.log("Eligible for MS");
    }else{
        console.log("Not eligible for MS due to less experience");
    }
}else{
    console.log("Not eligible for MS due to low CGPA");
}

const average = 50.96;
const strikeRate = 120.23;
if(average >= 30){
    if(strikeRate >= 140){
        console.log("Bring him to the camp");
    }else{
        console.log("He is a bit slower");
    }
}else{
    console.log("He needs more consistency");
}
