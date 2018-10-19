/**
 * If you have values that are highly related,
 * they should be encapsulated in an object.
 *
 * Bad design:
 * let radius = 1;
 * let x = 1;
 * let y = 1;
 *
 * Good design:
 * const circle = {
 *  radius: 1,
 *  x: 1,
 *  y: 1
 * };
 *
 */

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  },
  move: function() {}
};

circle.draw();

/**
 * Footnotes
 *
 * Functions of an object are referred to as a method
 * as opposed to calling it a function.
 */
