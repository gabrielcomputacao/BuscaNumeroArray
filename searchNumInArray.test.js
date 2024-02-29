import {
    findNumberTarget
} from './searchNumInArray'


describe('Search Number in Array', () => {

    it('should find number in array', () => {

        const nums = [17, 22, 33, 2, 45, 66, 21, 25]
        const target = 2
        const index = 1

        const result = findNumberTarget(nums, target)


        expect(result).toBe(index)

    })

    it('should not find number in array and receive -1', () => {

        const nums = [17, 22, 33, 2, 45, 66, 21, 25]
        const target = 13

        const result = findNumberTarget(nums, target)


        expect(result).toBe(-1)

    })

    it('should receive zero if the array is empty', () => {
        const nums = []
        const target = 13

        const result = findNumberTarget(nums, target)


        expect(result).toBe(-1)
    })

})