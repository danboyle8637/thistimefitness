import React from 'react'

import { SectionContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import RadioInput from '../../Shared/Form/RadioInput'
import TextInput from '../../Shared/Form/TextInput'
import { FormFieldSet } from '../../../styles/Form'
import { useFormStore } from '../../../context/FormContext'
import useFormInput from '../../../customHooks/useFormInputs'

const SummerSlimDownForm = () => {
  const [formState, dispatch] = useFormStore()
  const { handleFormChange, handleFormFocus } = useFormInput()

  return (
    <SectionContainer>
      <Headline1 />
      <form>
        <FormFieldSet>
          <input type="hidden" name="bot-field" />
          <RadioInput
            name={'goal'}
            question={'1. Which goal gets you excited?'}
            options={formState.goalOptions}
            value={formState.goalValue.value}
            valid={formState.goalValue.valid}
            checked={formState.goalValue.checked}
            handleFormChange={handleFormChange}
          />
          <TextInput
            type="text"
            name="firstName"
            labelName={`2. What's your first name?`}
            labelFor={'firstName'}
            label={'First Name'}
            value={formState.firstNameValue.value}
            valid={formState.firstNameValue.valid}
            touched={formState.firstNameOptions.touched}
            initial={formState.firstNameOptions.initial}
            showInstruction={formState.firstNameOptions.showInstructions}
            onChange={handleFormChange}
            onFocus={handleFormFocus}
            onBlur={handleFormFocus}
          />
          <TextInput
            type="text"
            name="email"
            labelName={'3. What email should I use to contact you?'}
            labelFor={'email'}
            label={'Email Address'}
            value={formState.emailValue.value}
            valid={formState.emailValue.valid}
            touched={formState.emailOptions.touched}
            initial={formState.emailOptions.initial}
            showInstruction={formState.emailOptions.showInstructions}
            onChange={handleFormChange}
            onFocus={handleFormFocus}
            onBlur={handleFormFocus}
          />
        </FormFieldSet>
      </form>
    </SectionContainer>
  )
}

export default SummerSlimDownForm
