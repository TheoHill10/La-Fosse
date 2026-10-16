//find largest - Find the index of the largest number in an array

/*const findLargest = require('./functions')

test("findLargest exists", () => {
    expect(findLargest).toBeDefined()
})

test("findLargest is actual function", () =>{
    expect(findLargest instanceof Function).toEqual(true)
})

test("findLargest returns a number", () => {
    expect(typeof findLargest() == 'number').toEqual(true)
})

test("findLargest returns index of biggest number", () => {
    expect(findLargest([1, 1, 4, 1])).toEqual(2)
})

test("findLargest", () => {
    expect(findLargest([1, 4, 5, 1])).toEqual(2)
})

test("findLargest returns -1 if no values are passed in", () => {
    expect(findLargest([])).toEqual(-1);
})

*/

//the below is a test suite for the tests above

const findLargest = require("./functions");

describe("findLargest", () => {

    it("exists", () => {

        expect(findLargest).toBeDefined();

    });

    it("is a function", () => {

        expect(findLargest instanceof Function).toEqual(true);

    });

    it("returns a number", () => {

        expect(typeof findLargest() == 'number').toEqual(true);

    });

    it("identifies the largest value's index", () => {

        expect(findLargest([1, 1, 4, 1])).toEqual(2);

    });

    it("returns -1 if no values are passed in", () => {

        expect(findLargest([])).toEqual(-1);

    });

});