/* 
1
12
123
1234
 */

const rightAngledNumberTranglePattern = (num) => {
  for(let i=0; i<num;i++){
    let row = ""
    for(let j=0; j<=i;j++){
      row+= (j+1)
    }
    console.log(row);
  }
}

rightAngledNumberTranglePattern(4)