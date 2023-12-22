/**
 * 
 * @param {String} number 
 * @returns {String}
 */
const correctPhoneNumber = (number) => {
    let sanitizedNumber = number;
    const numberLength = sanitizedNumber.length
    //return number if == ""

    if (numberLength === 1 && sanitizedNumber === '(') { }
    else if (numberLength === 1) sanitizedNumber = '(' + sanitizedNumber;
    if (numberLength === 6 && sanitizedNumber.charAt(4) !== ')') sanitizedNumber = sanitizedNumber.slice(0, 4) + ')' + sanitizedNumber.slice(4);
    if (numberLength >= 6 && sanitizedNumber.charAt(5) !== ' ') sanitizedNumber = sanitizedNumber.slice(0, 5) + ' ' + sanitizedNumber.slice(5);
    if (numberLength >= 11 && sanitizedNumber.charAt(9) !== '-') sanitizedNumber = sanitizedNumber.slice(0,9)+'-'+ sanitizedNumber.slice(9)
    
    return sanitizedNumber;
    
}

export default correctPhoneNumber;