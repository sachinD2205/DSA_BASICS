/* 
1
01
010
1010 
*/

const rightAngledTriangleOfAlternating1sandOsGlobalTobble = (num) => {
    let toggle = 1;
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + toggle;
            toggle = toggle == 1 ? 0 : 1;
        }
        console.log(row)
    }
}


rightAngledTriangleOfAlternating1sandOsGlobalTobble(4);