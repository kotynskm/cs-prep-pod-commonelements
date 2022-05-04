function commonElements(array1, array2){
    // loop over both arrays and compare elements
    
    let firstEle = 0;
    let secondEle = 0;
    const commonEle = [];
    // first loop to pull out 1st element in array1
    for(let i = 0; i < array1.length; i++){
        firstEle = array1[i];
        // second loop to grab element in array2
        for(let j = 0; j < array2.length; j++){
            secondEle = array2[j];

            // see if they are common elements, and not already inside the common elements array
            if(firstEle === secondEle && !commonEle.includes(firstEle)){
                // add to common elements array
                commonEle.push(firstEle);
            }
        }
    }
    return commonEle;
}

function commonElementsTests() {
  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
}

commonElementsTests() // uncomment to test

