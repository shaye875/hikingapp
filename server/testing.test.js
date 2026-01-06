import { test, before, after } from "node:test";
import assert from "node:assert";
import { checkTemp } from "./post.js"
import { routeTemp } from "./router.js";
import { Router } from "express";
import { appendFile } from "node:fs";

async function getFetch(){
    const res = await fetch("http://localhost:8000/check-weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            temperature: 25, windSpeed: 15
        })
    })
    const data = await res.json()
    return data
}

test('check temp basic', () => {
    assert.deepEqual(checkTemp({ temperature: 25, windSpeed: 15 }), {
        "safe": "true",
        "message": "All conditions are good for hiking!"
    })
})

test('check TempServer false', () => {
    assert.deepEqual(checkTemp({ temperature: 40, windSpeed: 40 }), {
        "safe": "false",
        "message": "Too windy to hike!"
    })
})

test('check TempServer wind', () => {
    assert.deepEqual(checkTemp({ temperature: 25, windSpeed: 70 }), {
        "safe": "false",
        "message": "Too windy to hike!"
    })
})

let app

before(() => {
    app = routeTemp.listen(8000, () => { })
})

test('check server', async () => {
    assert.deepEqual(await getFetch(), {
        "safe": "true",
        "message": "All conditions are good for hiking!"
    })
})

after(() => {
    app.close()
})

