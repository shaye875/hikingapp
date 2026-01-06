export function formatHikeName(a,b){
    return `Hike: ${a} (${b})`
}

export function getWeatherCategory(temp){
    if(temp < 25){
        if(temp < 0){
            return "freezing"
        }
        return  "cold"
    }
    if(temp > 35){
        return "hot"
    }
    return "warm"
}