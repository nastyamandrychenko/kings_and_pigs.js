const collisionsLevel1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

Array.prototype.parse2d = function () {
  const rows = [];
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }
  return rows;
};
const parsedCollisions = collisionsLevel1.parse2d();
console.log("collisionsLevel1", parsedCollisions);
