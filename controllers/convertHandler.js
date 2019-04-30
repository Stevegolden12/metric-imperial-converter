/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  /*
  this.chkInput = function (input) {
    const regTest = /(^ [0 - 9]{ 1, })(\.?) ([0 - 9]{ 0,}) ([a - zA - z]{ 2, 3 })/gm
    const chkResult = regTest.text(input)
    console.log(chkResult)
    return chkResult;
  }
  */

  this.getNum = function (input) {
    var result;
    console.log("getNum")
    //find index of last number and 0, index splice/slice it
    return result;
  };

  this.getUnit = function (input) {
    var result;
    //find index of last number and index, length splice/slice it
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    var resultUnit;
    switch (initUnit) {
      case 'gal':
        resultUnit = L;
        break;
      case 'lbs':
        resultUnit = kg;
        break;
      case 'mi':
        resultUnit = km
        break;
    }
    return resultUnit;
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
