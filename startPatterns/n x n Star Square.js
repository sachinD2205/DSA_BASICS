// ****
// ****
// ****
// ****

const printPattern = (num) => {
    for (let i = 0; i < num; i++) {
        let row = ""
        for (let j = 0; j < num; j++) {
            row = row + "* "
        }
        console.log(row);
    }
}


printPattern(4);