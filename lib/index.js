const assertArraysEqual = require('../lib/assertArraysEqual');
const assertEquals = require('../lib/assertEqual');
const assertObjectsEqual = require('../lib/assertObjectsEqual');
const countLetters = require('../lib/countLetters');
const countOnly = require('../lib/countOnly');
const eqArrays = require('../lib/eqArrays');
const eqObjects = require('../lib/eqObjects');
const findKey = require('../lib/findKey');
const findKeyByValue = require('../lib/findKeyByValue');
const flatten = require('../lib/flatten');
const head = require('../lib/head');
const letterPositions = require('../lib/letterPositions');
const map = require('../lib/map');
const middle = require('../lib/middle');
const tail = require('../lib/tail');
const takeUntil = require('../lib/takeUntil');
const without = require('../lib/without');

const lotide = {
  assertArraysEqual: assertArraysEqual,
  assertEquals: assertEquals,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without
};

module.exports = lotide;