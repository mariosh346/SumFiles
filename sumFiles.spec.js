SumFiles = require("./sumFiles");

[
    ['./examples/a.txt', 490],
    ['./examples/a1.txt', 418],
    ['./examples/a2.txt', 346]
].forEach(([str, sumExpected]) => {
    const sumReceived = SumFiles.sumFiles(str)

    if (sumReceived !== sumExpected) {
        throw Error(`Not correct with sumExpected: ${sumExpected} with sum received: ${sumReceived}`)
    }
})


console.log('sumFiles are working as expected!')


