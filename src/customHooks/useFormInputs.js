import { useFormStore } from '../context/FormContext'

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

  return {
    handleFormChange,
    handleFormFocus,
  }
}

export default useFormInputs
