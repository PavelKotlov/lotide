# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pashakot/lotide`

**Require it:**

`const _ = require('@pashakot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts that two arrays are strictly equal.
* `assertEquals(actual, expected)`: asserts that two values are strictly equal.
* `assertObjectsEqual(actual, expected)`: asserts that two objects are strictly equal.
* `countLetters(sentence)`: returns an object where each key represents a letter from a give string and the value represents the number of times the letter has appeared in the sentence.
* `countOnly(allItems, itemsToCount)`: returns an object where each key represents an item and its value is the number of times it appears in an object.
* `eqArrays(arrayOne, arrayTwo)`: returns true if two given arrays are stictly equal.
* `eqObjects(object1, object2)`: returns true if two given objects are stictly equal.
* `findKey(object, callback)`: returns the key of the first matched value of an object.
* `findKeyByValue(object, value)`: returns the key of the exact matched value of an object
* `flatten(array)`: returns the parent array with all the nested arrays brought up to the highest level.
* `head(array)`: returns the first element in an array;
* `letterPositions(sentence)`: returns an array with all the positions of a given value in a string.
* `map(array, callback)`: returns a new array with updated values based on the requirements of the callback function.
* `middle(array)`: retunrs the middle values of an array, if an array contains less than two values the returned array is empty, else if an array contains an odd number of values the    middle value is returend, else if an array contains an even number of values the two middle values are returned.
* `tail(array)`: returns an array with all the element besides the first element.
* `takeUntil(array, callback)`: returns an array with all the elements up to the given element.
* `without(source, itemsToRemove)`: returns an array with all the values besides those that were given to be leftout.