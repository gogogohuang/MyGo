const { revertNestedObj } = require("./MyGo");

const inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

console.log(JSON.stringify(revertNestedObj(inputValue)));
