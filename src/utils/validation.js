export const signInValidation = (email,passcode) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasscodeValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passcode)

    if(!isEmailValid) return "Please enter a valid Email-ID*"
    if(!isPasscodeValid) return "Please enter a valid Password*"

    return null
}
export const signUpValidation = (name,email,passcode,rePasscode) => {

    const isNameValid = (name.length >= 3 && name.length <= 20)? true: false
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasscodeValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passcode)
    const isRePasscodeValid = (passcode === rePasscode)? true: false

    
    if(!isNameValid) return "Name length should be within 3 to 20 charecture*"
    if(!isEmailValid) return "Please enter a valid Email-ID*"
    if(!isPasscodeValid) return "Please enter a valid Password*"
    if(!isRePasscodeValid) return "Passcode and Re-entered passcode Doesn't Match*"

    return null
}