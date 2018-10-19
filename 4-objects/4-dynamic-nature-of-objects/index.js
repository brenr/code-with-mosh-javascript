const circle = {
  radius: 1
};

circle.color = 'yellow';
circle.draw = function() {};

delete circle.color;
delete circle.draw;

console.log(circle);

/**
 * Footnotes
 *
 * For constants, you can't reassign an object to the variable
 * but you can add/remove properties.
 */
