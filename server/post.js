import { isInformation, isTypes } from "../utils/validatiom.js"

function checkValid(query) {
    const keys = ["temperature", "windSpeed"]
    const ifInformation = isInformation(keys, query)
    if (ifInformation === false) {
        return { "false": "missing information" }
    }
    const objTypes = { "temperature": 1, "windSpeed": 1 }
    const ifTypes = isTypes(objTypes, query)
    if (ifTypes === false) {
        return { "false": "one or more of types is wrong" }
    }
}

export function checkTemp(query) {
    const ifValid = checkValid(query)
    if (typeof (ifValid) === 'object') {
        return ifValid
    }
    if (query.temperature < 0 || query.temperature > 35 || query.windSpeed > 60) {
        return {
            "safe": "false",
            "message": "Too windy to hike!"
        }
    }
    return {
        "safe": "true",
        "message": "All conditions are good for hiking!"
    }
}