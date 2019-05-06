/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.chkInput = function (input) {
    const regTest = /(^[0-9]{1,})(\.?)([0 9]{0,})([a-zA-z]{2,3})/gm
    const chkResult = regTest.test(input)
    return chkResult;
  }
 
  this.getNum = function (input) {
    //find index of last number and 0, index splice/slice it
    const regCharIndex = /[a-zA-z]+/
    const fIndex = input.search(regCharIndex);
    const gNum = input.substring(0,fIndex);
    return gNum;
  };

  this.getUnit = function (input) {
    //find index of last number and index, length splice/slice it
    const regCharIndex = /[a-zA-z]+/
    const lIndex = input.search(regCharIndex);
    const gUnit = input.substring(lIndex, input.length);
    return gUnit;
  };

  this.chkUnit = function (getUnit, input) {
    const validUnits = ['gal','lbs','mi','l','kg','km'];
    const chkUnit = getUnit(input);
    console.log('Wanted Units ' + chkUnit)
    if (validUnits.includes(chkUnit)) {
      return true;
    } else {
      return false;
    }
  }

  this.chkNum = function (input) {
    const regCharIndex = /[a-zA-z]+/
    const lIndex = input.search(regCharIndex);
    const chkNum = input.substring(0, lIndex);
    if (!isNaN(chkNum) && chkNum !== '') {
      return true;
    } else {
      return false;
    }
  }

  this.getReturnUnit = function (initUnit) {
    var resultUnit = '';
    switch (initUnit.toLowerCase()) {
      case 'gal':
        resultUnit = 'L';
        break;
      case 'lbs':
        resultUnit = 'kg';
        break;
      case 'mi':
        resultUnit = 'km';
        break;
      case 'L':
        resultUnit = 'gal';
        break;
      case 'kg':
        resultUnit = 'lbs';
        break;
      case 'km':
        resultUnit = 'mi';
        break;
    }
    console.log("resultUnit: " + resultUnit)
    return resultUnit;
  };

  this.spellOutUnit = function (unit) {
    var sOutUnit = '';
     switch (unit.toLowerCase()) {
      case 'gal':
        sOutUnit = 'gallon(s)';
        break;
      case 'lbs':
        sOutUnit = 'pound(s)';
        break;
      case 'mi':
        sOutUnit = 'mile(s)';
        break;
      case 'L':
        sOutUnit = 'liter(s)';
        break;
      case 'kg':
        sOutUnit = 'kilogram(s)';
        break;
       case 'km':
        sOutUnit = 'kilometer(s)';
        break;
    }
     return sOutUnit;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var convUnit = 0;


    switch (initUnit) {
      case 'gal':
        convUnit = galToL;
        break;
      case 'L':
        convUnit = 1/galToL;
        break;
      case 'lbs':
        convUnit = lbsToKg;
        break;
      case 'kg':
        convUnit = 1/lbsToKg;
        break;
      case 'mi':
        convUnit = miToKm;
        break;
      case 'km':
        convUnit = 1/miToKm;
        break;
    }
   console.log("The result with number and unit should be: " + (initNum * convUnit))

    return initNum * convUnit;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };

}

module.exports = ConvertHandler;
