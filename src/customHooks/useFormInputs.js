import { useFormStore } from '../context/FormContext'
import { navigate } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const useFormInputs = () => {
  const [formState, dispatch] = useFormStore()

  const handleFormChange = (event, valueKey) => {
    event.persist()
    const name = event.target.name
    const value = event.target.value

    switch (name) {
      case 'goal': {
        dispatch({
          type: 'goalValue',
          value: valueKey,
        })
        dispatch({
          type: 'goalOptions',
          value: valueKey,
        })
        break
      }
      case 'firstName': {
        dispatch({
          type: 'firstNameValue',
          value: value,
        })
        break
      }
      case 'email': {
        dispatch({
          type: 'emailValue',
          value: value,
        })
        break
      }
      default: {
        throw new Error('Some crazy shit just went down.')
      }
    }
  }

  const handleFormFocus = event => {
    const name = event.target.name

    switch (name) {
      case 'firstName': {
        dispatch({ type: 'firstNameOptions' })
        break
      }
      case 'email': {
        dispatch({ type: 'emailOptions' })
        break
      }
      default: {
        throw new Error("Whoa nelly... there's a field acting up.")
      }
    }
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = event.target.name

    if (name === 'summer_slim_down_form') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          goal: formState.goalValue.value,
          firstName: formState.firstNameValue.value,
          emailAddress: formState.emailValue.value,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }
  }

  return {
    handleFormChange,
    handleFormFocus,
    handleFormSubmit,
  }
}

export default useFormInputs
