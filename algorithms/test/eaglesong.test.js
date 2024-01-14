/*
 *
 * Algorithms (Updated)
 *
 */

const eaglesong = require('../../index').eaglesong;

////////////////////////////////////////////////////////////////////////////////

describe('Test algorithm functionality', () => {

  // Non-Deterministic
  test('Test implemented eaglesong algorithm', () => {
    const start = Buffer.from('Hello, world!');
    const output = Buffer.from('64867e2441d162615dc2430b6bcb4d3f4b95e4d0db529fca1eece73c077d72d6', 'hex');
    expect(eaglesong.apply(null, [start]).length).toBe(32);
    expect(eaglesong.apply(null, [start])).toStrictEqual(output);
  });
});
