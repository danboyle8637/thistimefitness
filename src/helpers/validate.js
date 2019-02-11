const validate = (value, rules) => {
  let isValid = true

  for (let rule in rules) {
    switch (rule) {
      case 'maxLength':
        isValid = isValid && maxLengthValidator(value, rules[rule])

      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule])
        break

      case 'isRequired':
        isValid = isValid && requiredValidator(value)
        break

      case 'isEmail':
        isValid = isValid && emailValidator(value)
        break

      default:
        isValid = isValid
    }
  }

  return isValid
}

const maxLengthValidator = (value, maxLength) => value.length <= maxLength

const minLengthValidator = (value, minLength) => value.length >= minLength

const requiredValidator = value => value.trim() !== ''

const emailValidator = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

export default validate
