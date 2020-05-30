function calculateInsurance(){
    
var name = document.getElementById("name").value; //Html input id name
var country = document.getElementById("select").value;
var age = Number(document.getElementById("age").value);
var ps = Number(document.getElementById("horsepower").value);
var output = document.getElementById("result");//Html p id result
var costsAustria = (ps * 100 / age + 50);
var costsHungary = (ps * 120 / age + 100);
//var costsGreece = (ps * 150 / (age +3) + 50);
var costs;






    if (country == "Austria") {
            output.innerHTML = `The costs for ${ps} horsepower when you are ${age}, is ${(ps * 100 / age + 50).toFixed(2)}€ in ${country}, ${name}.`;
    } 

    else if (country == "Hungary"){
            output.innerHTML = `The costs for ${ps} horsepower when you are ${age}, is ${(ps * 120 / age + 100).toFixed(2)}€ in ${country}, ${name}.`;

    }

    else {
            output.innerHTML = `The costs for ${ps} horsepower when you are ${age}, is ${(ps * 150 / (age +3) + 50).toFixed(2)}€ in ${country}, ${name}.`;
    }

}


var button = document.getElementById("calc");
button.addEventListener("click", calculateInsurance, false);//Event Listener