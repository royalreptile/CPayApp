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
    
        
     if (numberLength >= 11 && sanitizedNumber.charAt(9) !== '-') sanitizedNumber = sanitizedNumber.slice(0, 9) + '-' + sanitizedNumber.slice(9)
    
    if (cleanPhoneNumber(sanitizedNumber).length >= 10 && cleanPhoneNumber(sanitizedNumber).startsWith('+')) {
        let localNumber = cleanPhoneNumber(sanitizedNumber)
        sanitizedNumber = localNumber.slice(0, -10) + " (" + localNumber.slice(-10, -7) + ") " + localNumber.slice(-7, -4) + "-" + localNumber.slice(-4)
        
    }
    
    return sanitizedNumber;
    
}
/**
 * @param {string} number
 * 
 * @returns {string}
 */
const cleanPhoneNumber =(number) =>{
    let result = ""
    for (let char of number) {
        if ((!isNaN(char) || char === "+") && !(char === " ") ) {
            result += char
        }
    }
    return result
}
if (require.main === module) {
    // This file is the main module
    console.log(cleanPhoneNumber("(111) 111-1111"));
  } 

export default correctPhoneNumber;