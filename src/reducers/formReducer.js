import validate from '../helpers/validate'

const goalValidationRules = {
  isRequired: true,
}

const firstNameValidationRules = {
  minLength: 2,
  isRequired: true,
}

const emailValidationRules = {
  isEmail: true,
  isRequired: true,
}

const formState = {
  goalValue: {
    value: '',
    valid: false,
    options: [
      {
        value: 'weightLoss',
        displayValue: 'Losing some real weight',
        checked: false,
      },
      {
        value: 'strength',
        displayValue: 'I want to get strong',
        checked: false,
      },
    ],
  },
  firstNameValue: {
    value: '',
    valid: false,
  },
  firstNameOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  emailValue: {
    value: '',
    valid: false,
  },
  emailOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'goalValue': {
    }
    case 'firstNameValue': {
      const isValid = validate(action.value, firstNameValidationRules)
      return {
        ...state,
        firstNameValue: {
          value: action.value,
          valid: isValid,
        },
      }
    }
    case 'firstNameOptions': {
      return {
        ...state,
        firstNameOptions: {
          initial: false,
          touched: !state.firstNameOptions.touched,
          showInstructions: !state.firstNameOptions.showInstructions,
        },
      }
    }
    case 'emailValue': {
      const isValid = validate(action.value, emailValidationRules)
      return {
        ...state,
        emailValue: {
          value: action.value,
          valid: isValid,
        },
      }
    }
    case 'emailOptions': {
      return {
        ...state,
        emailOptions: {
          initial: false,
          touched: !state.emailOptions.touched,
          showInstructions: !state.emailOptions.showInstructions,
        },
      }
    }
    default: {
      return state
    }
  }
}
