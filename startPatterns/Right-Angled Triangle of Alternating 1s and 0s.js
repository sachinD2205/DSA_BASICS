/* 
1
10
101
1010
 */

const rightAngledTriangleOfAlternating1sAnd0s1 = (num) => {
    for (let i = 0; i < num; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            if (j % 2 == 1) {
                row = row + "1";
            } else {
                row = row + "0";
            }
        }
        console.log(row);
    }
}

// rightAngledTriangleOfAlternating1sAnd0s1(4);

const rightAngledTriangleOfAlternating1sAnd0s2 = (num) => {
    for (let i = 0; i < num; i++) {
        let row = ""
        let toggleInput = 1;
        for (let j = 0; j <= i; j++) {
           row = row + toggleInput
           toggleInput = toggleInput==1? 0:1;
        }
        console.log(row);
    }
}


rightAngledTriangleOfAlternating1sAnd0s2(4)