def twoSum(nums, target):
    for index, num in enumerate(nums):
        if(index + 1 > (len(nums)-1)):
            print('None')
            return None
        elif(num + nums[index + 1] == target):
            print([index, (index+1)])
            return([index, (index+1)])


arr = [2,4,6,8]
target = 6

twoSum(arr, target)




#loop through nums
#add current number with the number at index +1
#if the sum === target, print the indexs
#else try nnext number