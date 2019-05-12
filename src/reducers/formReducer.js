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
    value: 'weightLoss',
    valid: true,
    checked: true,
  },
  goalOptions: [
    {
      value: 'weightLoss',
      displayValue: 'Losing some significant weight',
      checked: true,
    },
    {
      value: 'strength',
      displayValue: 'Getting seriously strong',
      checked: false,
    },
  ],
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
      const isValid = validate(action.value, goalValidationRules)
      return {
        ...state,
        goalValue: {
          value: action.value,
          valid: isValid,
        },
      }
    }
    case 'goalOptions': {
      return {
        ...state,
        goalOptions: [
          {
            value: 'weightLoss',
            displayValue: 'Losing some significant weight',
            checked: action.value === 'weightLoss' ? true : false,
          },
          {
            value: 'strength',
            displayValue: 'Getting seriously strong',
            checked: action.value === 'strength' ? true : false,
          },
        ],
      }
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

export { formState, formReducer }
