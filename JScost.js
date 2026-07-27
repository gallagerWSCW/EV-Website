function calculateCost(){

    let battery = Number(document.getElementById("battery").value);
    let cost = Number(document.getElementById("cost").value);
    let distance = Number(document.getElementById("distance").value);

    if(battery <= 0 || cost <= 0 || distance <= 0){
        document.getElementById("result").innerHTML = 
        "Enter a valid number";
        return;
    }

    let totalCost = battery * cost;
    let costPerKm = totalCost / distance;

    document.getElementById("result").innerHTML =
    "Cost per km: $" + costPerKm.toFixed(2);
}

function resetCalculator(){
    document.getElementById("battery").value ="";
    document.getElementById("cost").value ="";
    document.getElementById("distance").value ="";
    document.getElementById("result").innerHTML ="";

}




function calculateFuelCost(){

    let fuelPrice = Number(document.getElementById("fuelPrice").value);
    let fuelConsumption = Number(document.getElementById("fuelConsumption").value);

    if(fuelPrice <= 0 || fuelConsumption <= 0){
        document.getElementById("result").innerHTML = 
        "Enter a valid number";
        return;
    }

    let costPerKm = (fuelPrice * fuelConsumption)/100;

    document.getElementById("resultfuel").innerHTML =
    "Cost per km: $" + costPerKm.toFixed(2);
}

function resetFuelCalculator(){
    document.getElementById("fuelConsumption").value ="";
    document.getElementById("fuelPrice").value ="";
    document.getElementById("resultfuel").innerHTML ="";

}