Math.randInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

class BitHelper {
  static getBit(n, i) {
    return n & (1 << i) ? 1 : 0;
  }

  static enableBit(n, i) {
    return n | (1 << i);
  }

  static disableBit(n, i) {
    return n & ~(1 << i);
  }

  static reverseBit(n, i) {
    return n ^ (1 << i);
  }
}
