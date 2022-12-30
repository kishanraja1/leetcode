var isPalindrome = function (input) {
    var string = input.toString();
    for (var i = 0, j = string.length - 1; i < j; ++i, --j) {
        if (string[i] !== string[j]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return (true);
};
isPalindrome(12322);
