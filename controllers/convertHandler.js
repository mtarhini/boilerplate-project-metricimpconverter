/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

//  example 3lbs
function ConvertHandler() {
  this.getUnit = function (input) {
    let unit;
    if (input.match(/[A-Za-z]+$/)) {
      unit = input.match(/[A-Za-z]+$/)[0].toLowerCase();
      if (["gal", "l", "mi", "km", "lbs", "kg"].includes(unit)) {
        return unit;
      }
    }
    return "invalid unit";
  };

  this.getNum = function (input) {
    let numberString = input.split(/[A-Za-z]+$/)[0];
    // does it contain a fraction?
    let number;
    if (numberString === "") {
      number = 1;
    } else if (numberString.match(/\//g)) {
      if (numberString.match(/\//g).length === 1) {
        const [numerator, denominator] = [
          numberString.split("/")[0],
          numberString.split("/")[1],
        ];
        number = Number(numerator) / Number(denominator);
      } else {
        number = numberString;
      }
    } else {
      number = numberString;
    }
    if (!Number.isNaN(Number(number))) return Number(number);
    return "invalid number";
  };

  this.getReturnUnit = function (initUnit) {
    const unitDict = {
      l: "gal",
      gal: "l",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi",
    };

    return unitDict[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const spellDict = {
      l: "litter",
      gal: "gallon",
      lbs: "pound",
      kg: "Kilogram",
      mi: "mile",
      km: "Kilometer",
    };

    return spellDict[unit];
  };

  this.convert = function (initNum, initUnit) {
    const convertionDict = {
      l: 1 / 3.78541,
      gal: 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934,
    };
    return initNum * convertionDict[initUnit];
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)}${
      initNum === 1 ? "" : "s"
    } converts to ${returnNum} ${this.spellOutUnit(returnUnit)}${
      returnNum === 1 ? "" : "s"
    }`;
  };
}

module.exports = ConvertHandler;
