const longestprefix = (arr) => {
    //loop through the array of strings
        //loop through string - if common with prior words, record in a variable

    let prefix = ''
    let firstWord = arr[0]
    let secondWord = arr[1]

    if (secondWord[0] !== firstWord[0]) {
        console.log('No common prefix')
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i]
        for (let j = 0; j < word.length; j++) {
            if (word[j] === firstWord[j]) {
                console.log(word[j]);
                prefix.push(word[j])
                return
            } 
            
        }
        
    }
}

longestprefix(['flower', 'flow', 'flight'])