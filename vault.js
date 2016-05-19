'use strict';
module.exports = function() {
  //_underscore denotes private variable
  var _secretValue = {};
  function setValue(key, value) {
    _secretValue[key] = value;
    console.log(_secretValue);
  }
  function getValue(key) {
    if (_secretValue.hasOwnProperty(key)) {
      return _secretValue[key];
    }
    else {
      return null;
    }
  }
  return {
    setValue: setValue,
    getValue: getValue
  };
};