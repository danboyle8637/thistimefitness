import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import TextInput from '../../Shared/Form/TextInput'
import RadioInput from '../../Shared/Form/RadioInput'
import validate from '../../../helpers/validate'
import { FormButton } from '../../../styles/Buttons'
import { SpecialSubhead } from '../../../styles/Headlines'
import {
  SectionContainer,
  HeadlineContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { FormFieldSet } from '../../../styles/Form'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class IgniteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        obstacle: {
          initial: true,
          value: '',
          valid: false,
          touched: false,
          checked: false,
          validationRules: {
            isRequired: false,
            maxLength: 450,
          },
          options: [
            {
              value: 'time',
              displayValue: `I can't find the time.`,
              checked: true,
            },
            {
              value: 'self_belief',
              displayValue: `I don't believe in myself.`,
              checked: false,
            },
            {
              value: 'scared',
              displayValue: `I'm scared of looking foolish.`,
              checked: false,
            },
            {
              value: 'others_belief',
              displayValue: `Everybody else thinks I'll fail.`,
              checked: false,
            },
          ],
        },
        firstName: {
          initial: true,
          value: '',
          valid: false,
          touched: false,
          showInstruction: false,
          validationRules: {
            minLength: 2,
            isRequired: true,
          },
        },
        email: {
          initial: true,
          valid: false,
          touched: false,
          showInstruction: false,
          validationRules: {
            isEmail: true,
            isRequired: true,
          },
        },
      },
    }
  }

  handleFormChange = (event, key) => {
    const name = event.target.name
    const value = event.target.value

    const copiedFormControls = {
      ...this.state.formControls,
    }

    const currentFormElement = {
      ...copiedFormControls[name],
    }

    currentFormElement.value = value
    currentFormElement.touched = true
    currentFormElement.valid = validate(
      value,
      currentFormElement.validationRules
    )

    if (key) {
      currentFormElement.options.map(option => {
        if (option.value === key) {
          option.checked = !option.checked
        } else {
          option.checked = false
        }
      })
    }

    copiedFormControls[name] = currentFormElement

    this.setState({ formControls: copiedFormControls })
  }

  handleFormFocus = event => {
    const name = event.target.name

    const copiedFormControls = {
      ...this.state.formControls,
    }

    const currentFormElement = {
      ...copiedFormControls[name],
    }

    currentFormElement.initial = false
    currentFormElement.touched = !currentFormElement.touched
    currentFormElement.showInstruction = !currentFormElement.showInstruction

    copiedFormControls[name] = currentFormElement

    this.setState({ formControls: copiedFormControls })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const form = event.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        obstacle: this.state.formControls.obstacle.value,
        firstName: this.state.formControls.firstName.value,
        email: this.state.formControls.email.value,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <SectionContainer
        mobilePadding={'20px 20px 80px 20px'}
        tabletPadding={'20px 20px 80px 20px'}
        desktopPadding={'20px 20px 80px 20px'}
        tabletWidth={'60%'}
        desktopWidth={'40%'}
      >
        <HeadlineContainer>
          <SpecialSubhead>Take The Quiz:</SpecialSubhead>
        </HeadlineContainer>
        <div id="ignite-quiz" />
        <FormWrapper
          name={'ignite_lead_form'}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/ignite-thank-you/"
          onSubmit={this.handleFormSubmit}
        >
          <FormFieldSet>
            <input type="hidden" name="bot-field" />
            <RadioInput
              name={'obstacle'}
              value={this.state.formControls.obstacle.value}
              touched={this.state.formControls.obstacle.touched}
              valid={this.state.formControls.obstacle.valid}
              checked={this.state.formControls.obstacle.checked}
              options={this.state.formControls.obstacle.options}
              handleFormChange={this.handleFormChange}
            />
            <TextInput
              type="text"
              name="firstName"
              labelName={'First Name'}
              labelFor={'firstName'}
              label={'First Name'}
              value={this.state.formControls.firstName.value}
              touched={this.state.formControls.firstName.touched}
              valid={this.state.formControls.firstName.valid}
              initial={this.state.formControls.firstName.initial}
              showInstruction={
                this.state.formControls.firstName.showInstruction
              }
              onChange={this.handleFormChange}
              onFocus={this.handleFormFocus}
              onBlur={this.handleFormFocus}
            />
            <TextInput
              type="email"
              name="email"
              labelName={'Email Address'}
              labelFor={'email'}
              value={this.state.formControls.email.value}
              touched={this.state.formControls.email.touched}
              valid={this.state.formControls.email.valid}
              initial={this.state.formControls.email.initial}
              showInstruction={this.state.formControls.email.showInstruction}
              onChange={this.handleFormChange}
              onFocus={this.handleFormFocus}
              onBlur={this.handleFormFocus}
            />
            <ButtonContainer
              mMarginTop={'30px'}
              tMarginTop={'40px'}
              dMarginTop={'40px'}
            >
              <FormButton type={'submit'}>I'm Interested</FormButton>
            </ButtonContainer>
          </FormFieldSet>
        </FormWrapper>
      </SectionContainer>
    )
  }
}

export default IgniteForm

const FormWrapper = styled.form`
  width: 100%;
`
