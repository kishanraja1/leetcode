console.log('hello world')
//nesting for loops - time complexity o(n^2)
function twosum(nums, target){
    //parent for loop to go through the array items
    for (let i = 0; i < nums.length; i++) {
        //child for loop
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log('[' + i + ',' + j + ']')
                return
            }
            
        }
    }

}

// twosum([1,2,3], 5)

function efficienttwosum(nums, target){
    //set a left pointer
    leftIndex = 0
    leftPointer = nums[leftIndex]

    //set a right pointer
    rightIndex = (nums.length -1)
    rightPointer = nums[rightIndex]

    while (leftPointer + rightPointer != target) {
        if (leftPointer + rightPointer > target) {
            rightIndex --
        } else if (leftPointer + rightPointer < target) {
            leftIndex ++
        }
    }

    console.log('[' + leftIndex + ',' + rightIndex + ']')

}

efficienttwosum([1,2,3], 5)

