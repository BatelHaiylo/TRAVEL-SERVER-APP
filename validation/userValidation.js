const isUserEmailValid = (email) => {
    return (email.includes('@') && email.substring(email.length-4) == ".com") ? true : false;
}

const isUserPasswordsMatch = (password1,password2) => {
    return (password1.length == password2.length && password1.match(password2)) ? true : false
}

const isUserIsAnAdult = (age) => {
    const today = new Date();
    const userDateOfBirth = new Date(age)
    return today.getFullYear() - userDateOfBirth.getFullYear() > 18;
};

const isUserDataValid = (user) => {
    return (
        isUserEmailValid(user.email) 
        && isUserIsAnAdult(user.dateOfBirth) 
        && isUserPasswordsMatch(user.password,user.passwordValidation) ?
        true : false
    )
}

module.exports = {isUserEmailValid, isUserPasswordsMatch,isUserIsAnAdult, isUserDataValid}


