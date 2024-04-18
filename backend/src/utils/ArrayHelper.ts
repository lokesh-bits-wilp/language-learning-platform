export default class ArrayHelper {

    /**
     * Compare two arrays respective to their elements
     * @param array1
     * @param array2
     * @returns bool
     */
    static compareArrayElements(array1: Array<number>, array2: Array<number>) {
        if (array1.length !== array2.length) {
            return false;
        }

        const sortedArray1 = array1.slice().sort();
        const sortedArray2 = array2.slice().sort();

        for (let i = 0; i < sortedArray1.length; i++) {
            if (sortedArray1[i] !== sortedArray2[i]) {
                return false;
            }
        }

        return true;
    }

    static sortArray(objectDetails: Array<any>) {
        objectDetails.sort((a, b) => {
            const idA = parseInt(a.id ? a.id : a.orderNo);
            const idB = parseInt(b.id ? b.id : b.orderNo);
            if (idA < idB) {
                return 1; // To sort in descending order, return 1
            } else if (idA > idB) {
                return -1; // To sort in descending order, return -1
            } else {
                return 0;
            }
        });

        return objectDetails;
    }
}
