
//loop throught the array
//if the value at the current index equals value at current index +1, remove it
    //how to remove and put at the end of an array
//if not, go to next number

//print k, which is equal to arr.length


const removeDuplicates=(nums)=>{

    let k = 0
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i+1]) {
            nums.splice(i+1,1)
        }
        
    }

    k = nums.length
    console.log(`${k}, nums = [${nums}]`);

}

removeDuplicates([1,1,2])