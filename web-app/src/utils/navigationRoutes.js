let SIGNUP,WELCOME,LOGIN,GETSTARTED,VERIFYAGE,ENTERLASTFOURDIGITS,TELLUSMORE,UPLOADDRIVERLICENCE,ENROLLING,CREATEPIN,VERIFYPHONENUMBER;


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
     SIGNUP = '/sign-up';
     WELCOME = '/';
     LOGIN = '/login';
     GETSTARTED = '/get-started';
     VERIFYAGE = '/verify-age';
     ENTERLASTFOURDIGITS = '/enter-last-four-digits';
     TELLUSMORE = '/tell-us-more';
     UPLOADDRIVERLICENCE = '/upload-driver-licence';
     ENROLLING = '/enrolling';
     CREATEPIN = '/create-pin';
     VERIFYPHONENUMBER = '/verify-phone-number';

    
} else {
    // production code
     SIGNUP = 'sign-up';
     WELCOME = '/'
     LOGIN = 'login';
     GETSTARTED = 'get-started';
     VERIFYAGE = 'verify-age';
     ENTERLASTFOURDIGITS = 'enter-last-four-digits';
     TELLUSMORE = 'tell-us-more';
     UPLOADDRIVERLICENCE = 'upload-driver-licence';
     ENROLLING = 'enrolling';
     CREATEPIN = 'create-pin';
     VERIFYPHONENUMBER = 'verify-phone-number'
}
module.exports ={SIGNUP,WELCOME,LOGIN,GETSTARTED,VERIFYAGE,ENTERLASTFOURDIGITS,TELLUSMORE,UPLOADDRIVERLICENCE,ENROLLING,CREATEPIN,VERIFYPHONENUMBER};