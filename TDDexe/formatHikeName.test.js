import test from 'node:test'
import assert from 'node:assert'
import { formatHikeName,getWeatherCategory } from './formatHikeName.js'

test('TDD red',()=>{
    assert.equal(formatHikeName("Forest Loop", "Galilee"),"Hike: Forest Loop (Galilee)")
})

test('check category freezing',()=>{
    assert.equal(getWeatherCategory(-1),"freezing")
})

test('check category cold',()=>{
    assert.equal(getWeatherCategory(1),"cold")
})

test('check category warm',()=>{
    assert.equal(getWeatherCategory(27),"warm")
})

test('check category hot',()=>{
    assert.equal(getWeatherCategory(40),"hot")
})