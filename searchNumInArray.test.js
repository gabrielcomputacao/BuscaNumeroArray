import {
    findNumberTarget
} from './searchNumInArray'


describe('Search Number in Array', () => {

    it('should find number in array', () => {

        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 2
        const index = 1

        const result = findNumberTarget(nums, target)


        expect(result).toBe(index)

    })

    it('should not find number in array', () => {

        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 13

        const result = findNumberTarget(nums, target)


        expect(result).toBe(-1)

    })

})