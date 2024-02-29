export function findNumberTarget(array, target) {
    const targetInteger = parseInt(target);

    if (array.length > 0) {
        let start = 0;
        let end = array.length - 1;

        let middleNumber = null;

        while (start <= end) {
            middleNumber = Math.floor((start + end) / 2);

            if (array[middleNumber] === targetInteger) {
                return middleNumber;
            } else if (array[middleNumber] < targetInteger) {
                start = middleNumber + 1;
            } else {
                end = middleNumber - 1;
            }
        }

        return -1;
    } else {
        return 0;
    }
}