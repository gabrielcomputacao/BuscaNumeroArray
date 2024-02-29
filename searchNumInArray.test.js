import {
    findNumberTarget
} from './searchNumInArray'


describe('Search Number in Array', () => {

    it('should find number in array', () => {

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 2

        const result = findNumberTarget(array, target)


        expect(result).toBe(target)

    })



})