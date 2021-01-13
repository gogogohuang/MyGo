const { revertNestedObj, getAllKeys, generateNestedObj } = require("./MyGo");

describe("MyGo", () => {
  const inputValue = {
    hired: {
      be: {
        to: {
          deserve: "I",
        },
      },
    },
  };

  it("revertNestedObj", () => {
    const outputValue = {
      I: {
        deserve: {
          to: {
            be: "hired",
          },
        },
      },
    };

    const output = revertNestedObj(inputValue);

    expect(JSON.stringify(output)).toEqual(JSON.stringify(outputValue));
  });

  it("getAllKeys", () => {
    const allKeys = getAllKeys(inputValue);

    expect(allKeys).toEqual(["hired", "be", "to", "deserve", "I"]);
  });

  it('generateNestedObj', () => {
      const data = generateNestedObj(["version", "node"] , "12");

      expect(JSON.stringify(data)).toEqual(JSON.stringify({ node: { version: "12" } }));
  });
});
