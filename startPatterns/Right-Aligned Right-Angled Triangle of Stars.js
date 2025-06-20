
//      *
//     **
//    ***
//   ****

const rightAlignedAngledofStars1 = (num) => {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j < num; j++) {
            if (j >= (num - i - 1)) {
                row = row + "*"
            } else {
                row = row + " "
            }

        }
        console.log(row);
    }

}

rightAlignedAngledofStars1(4)

const rightAlignedAngledofStars2 = (num) => {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j < (num - i - 1); j++) {
            row = row + " "
        }
        for (let z = (num - i - 1); z < num; z++) {
            row = row + "*"
        }
        console.log(row)
    }
}

rightAlignedAngledofStars2(4)


