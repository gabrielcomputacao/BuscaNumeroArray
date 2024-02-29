import {
    findNumberTarget
} from "./searchNumInArray";

describe("Search Number in Array", () => {
    it("should find number in array", () => {
        const nums = [-2, 5, 7, 22, 33, 44, 55, 66, 77, 99, 104];
        const target = 55;
        const index = 6;

        const result = findNumberTarget(nums, target);

        expect(result).toBe(index);
    });

    it("should not find number in array and receive -1", () => {
        const nums = [-2, 5, 7, 22, 33, 44, 55, 66, 77, 99, 104];
        const target = 13;

        const result = findNumberTarget(nums, target);

        expect(result).toBe(-1);
    });

    it("should receive zero if the array is empty", () => {
        const nums = [];
        const target = 13;

        const result = findNumberTarget(nums, target);

        expect(result).toBe(0);
    });
});