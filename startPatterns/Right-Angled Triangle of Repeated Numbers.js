
/* 
1
22
333
4444 
*/

const rightAngledTriangleOfRepeatedNumbers = (num) => {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += (i + 1);
        }
        console.log(row)
    }
}

rightAngledTriangleOfRepeatedNumbers(4)