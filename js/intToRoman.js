const intToRoman = (num) => {
    
    const values = [1000, 900, 500 , 400, 100, 90, 50, 40, 10, 5, 4, 1]
    const symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV',  'I']
    let roman = 'ROMAN: '

    for (let i = 0; i < values.length; i++) {
        while (num > values[i]) {
            roman.concat(symbol[i])
            console.log(symbol[i]);
            num -= values[i]
        }
    }
    console.log(roman)

}

intToRoman(904)