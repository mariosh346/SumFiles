fs = require('fs');

/**
 * Sums all numbers of a file and each subfiles
 *  @param file: string
 *  @returns number
*/
exports.sumFiles = (file) => {
    let sum = 0

    function sumFile(file) {
        const data = fs.readFileSync(file,
            { encoding:'utf8', flag:'r' });

        data.split(' ').forEach((subData) => {
            if (isNaN(Number(subData))) {
                sumFile(subData)
            } else {
                sum += Number(subData)
            }
        });
    }
    sumFile(file)

    return sum
}

if (process.argv[2]) {
    exports.sumFiles(process.argv[2])
}
