// Solve:1  Radian To Degree.
function radianToDegree(radian){
    if(typeof radian !== 'number'){
    return 'please enter a number';
    }
    let pi = Math.PI;
    let degree = parseFloat(radian * (180/pi)).toFixed(2);
    return degree;
}



// Solve:2  Finding JavaScript File 
function isJavaScriptFile(fileName){ 
    if(typeof fileName !== 'string'){
    return 'please enter a string';
    }
	else if(fileName.endsWith('.js')){ 
		return true; 
	} 
	else{
    return false; 
    }
}



// Solve:3 Calculate Oil Price
function oilPrice(diesel, petrol, octane){
    if(typeof diesel !== 'number'){
    return 'please enter a number';
    }
    else if(typeof  petrol !== 'number'){
    return 'please enter a number';
    }
    else if(typeof octane !== 'number'){
    return 'please enter a number';
    }
    let totalDiesel = 114 * diesel;
    let totalPetrol = 130 * petrol;
    let totalOctane = 135 * octane;
    const totalPrice = totalDiesel + totalPetrol + totalOctane;
    return totalPrice;
}



// Solve:4 Public Bus Fare Amount
function publicBusFare(peoples){
    if(typeof peoples !== 'number'){
    return 'please enter a number';
    }
    let bus = peoples % 50;
    let microBus = bus % 11;
    let publicBusFare = 250 * microBus;
    return publicBusFare;
}



// Solve:5 BestFriend Similarity 
function isBestFriend(
    object1 = {name : ukraine, friend : russia}, 
    object2 = {name : russia, friend : ukraine}){

    if(typeof object1.name !== 'string'){
    return 'please enter a string';
    }
    else if(typeof object1.friend !== 'string'){
    return 'please enter a string';
    }
    else if(typeof object2.name !== 'string'){
    return 'please enter a string';
    }
    else if(typeof object2.friend !== 'string'){
    return 'please enter a string';
    }
    else if(object1.name === object2.friend && object2.name === object1.friend){
    return true;
    }
    else{
    return false;
    }
}