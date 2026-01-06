import {test} from 'node:test'
import assert from 'node:assert'
import { kmToMeters,caloriesBurned } from './distanceUtils.js'

test('function kmMeters basick checking',()=>{
    assert.equal(kmToMeters(1),1000)
})

test('function kmMeters type checking',()=>{
    assert.throws(()=>{
        kmToMeters("9")
    },Error)
})

test('function kmMeters check ziro',()=>{
    assert.equal(kmToMeters(0),0)
})

test('function kmMeters negativ number',()=>{
    assert.equal(kmToMeters(-1),-1000)
})

test('function caloriesBurned basick checing',()=>{
    assert.equal(caloriesBurned(70,5),362.6)
})

test('function caloriesBurned type checking',()=>{
    assert.throws(()=>{
        caloriesBurned("3",2)
    },Error)
})

test('function caloriesBurned check ziro',()=>{
    assert.equal(caloriesBurned(0,3),0)
})

test('function caloriesBurned negativ number',()=>{
    assert.equal(caloriesBurned(3.5,70),3.5*70*1.036)
})
