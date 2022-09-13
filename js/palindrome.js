// PALINDROME - LEVEL EASY
const palindrome = (x) => {
    //set variable for number as an array
    let num = x.toString().split("")
    //reverse the number
    let reverseNum = []
    //compare and print whther it is a palindrome
    for (let i = (num.length - 1); i >= 0; i--) {
        reverseNum.push(num[i]) 
    }

    for (let i = 0; i < num.length; i++) {
        if (num[i] != reverseNum[i]) {
            console.log('it is not a palindrome')
            return
        }
        
    }
    console.log('it is a palindrome')

}

palindrome(121)