const getAllKeys = (obj) => {
  const allKeys = [];

  (function _getKeys(obj) {
    for (const j in obj) {
      allKeys.push(j);

      if (typeof obj[j] === "object") {
        return _getKeys(obj[j]);
      } else {
        allKeys.push(obj[j]);
      }
    }
  })(obj);

  return allKeys;
};

const generateNestedObj = (keys, value) => {
  return keys.reduce((acc, cur) => ({ [cur]: acc }), value);
};

const revertNestedObj = obj => {
  const allKeys = getAllKeys(obj);

  const targetValue =  allKeys[0];
  const targetArr = allKeys.splice(1);
  
  return  generateNestedObj(targetArr, targetValue);
};


module.exports.getAllKeys = getAllKeys;
module.exports.generateNestedObj = generateNestedObj;
module.exports.revertNestedObj = revertNestedObj;
