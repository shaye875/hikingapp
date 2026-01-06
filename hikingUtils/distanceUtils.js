export function kmToMeters(km){
    if(!(typeof(km) === 'number')){
        throw new Error("onli numbers")
    }
    const kilom = Number(km)
    return kilom*1000
}

export function caloriesBurned(weightInKg, distanceInKm){
    if((!(typeof(weightInKg) === 'number')) || (!(typeof(distanceInKm) === 'number'))){
        throw new Error("onli numbers")
    }
    const calories = weightInKg*distanceInKm*1.036
    return calories
}