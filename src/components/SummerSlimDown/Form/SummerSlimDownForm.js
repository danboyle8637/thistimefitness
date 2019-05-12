import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { SectionContainer, ButtonContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import RadioInput from '../../Shared/Form/RadioInput'
import TextInput from '../../Shared/Form/TextInput'
import { FormFieldSet } from '../../../styles/Form'
import { useFormStore } from '../../../context/FormContext'
import useFormInput from '../../../customHooks/useFormInputs'
import { FormButton } from '../../../styles/Buttons'
import { above } from '../../../styles/Theme'

const SummerSlimDownForm = () => {
  const [formState, dispatch] = useFormStore()
  const { handleFormChange, handleFormFocus } = useFormInput()
  const [buttonText, setButtonText] = useState('Finish All Questions...')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (
      formState.goalValue.valid &&
      formState.firstNameValue.valid &&
      formState.emailValue.valid
    ) {
      setButtonText('Get On Early Bird List!')
      setFormValid(true)
    } else {
      setButtonText('Check Your Answers...')
      setFormValid(false)
    }
  })

  return (
    <SectionContainer
      mobilePadding={'40px 20px 80px 20px'}
      tabletPadding={'40px 20px 120px 20px'}
      desktopPadding={'40px 20px 120px 20px'}
    >
      <Headline1 />
      <EarlyBirdForm>
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
          <ButtonContainer
            mMarginTop={'40px'}
            tMarginTop={'60px'}
            dMarginTop={'60px'}
          >
            <FormButton type={'submit'} valid={formValid}>
              {buttonText}
            </FormButton>
          </ButtonContainer>
        </FormFieldSet>
      </EarlyBirdForm>
    </SectionContainer>
  )
}

export default SummerSlimDownForm

const EarlyBirdForm = styled.form`
  width: 100%;
  ${above.mobile`
    width: 90%;
  `}
  ${above.tablet`
    width: 80%;
  `}
`
