import React, { Component } from 'react'
import { navigate } from 'gatsby'

import TextInput from '../../Shared/Form/TextInput'
import TextArea from '../../Shared/Form/TextArea'
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

class FourteenDayForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formValid: false,
      buttonText: 'Finish Quiz...',
      formControls: {
        goal: {
          value: '',
          valid: true,
          touched: false,
          checked: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'weightLoss', displayValue: 'Weight Loss', checked: true },
            {
              value: 'oldClothes',
              displayValue: 'Fit back into my old clothes',
              checked: false,
            },
            {
              value: 'strength',
              displayValue: 'Build muscle and strength',
              checked: false,
            },
            {
              value: 'lifestyle',
              displayValue: 'Build a long terim healthy lifestyle',
              checked: false,
            },
          ],
        },
        why: {
          value: '',
          valid: false,
          touched: false,
          showInstruction: false,
          validationRules: {
            isRequired: false,
            maxLength: 450,
          },
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
          value: '',
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

    const updatedControls = {
      ...this.state.formControls,
    }

    const updatedFormElement = {
      ...updatedControls[name],
    }

    updatedFormElement.value = value
    updatedFormElement.touched = true
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    )

    if (key) {
      updatedFormElement.options.map(option => {
        if (option.value === key) {
          option.checked = !option.checked
        } else {
          option.checked = false
        }
      })
    }

    updatedControls[name] = updatedFormElement

    this.setState({
      formControls: updatedControls,
    })

    this.isFormValid()
  }

  handleFormFocus = event => {
    const name = event.target.name

    const updatedControls = {
      ...this.state.formControls,
    }

    const updatedFormElement = {
      ...updatedControls[name],
    }

    updatedFormElement.initial = false
    updatedFormElement.touched = !updatedFormElement.touched
    updatedFormElement.showInstruction = !updatedFormElement.showInstruction

    updatedControls[name] = updatedFormElement

    this.setState({
      formControls: updatedControls,
    })
  }

  isFormValid = () => {
    const { goal, firstName, email } = this.state.formControls

    if (goal.valid && firstName.valid && email.valid) {
      this.setState({
        formValid: true,
        buttonText: `I'm Interested!`,
      })
    }

    if (!goal.valid || !firstName.valid || !email.valid) {
      this.setState({
        formValid: false,
        buttonText: 'Finish Quiz...',
      })
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const form = event.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        goal: this.state.formControls.goal.value,
        why: this.state.formControls.why.value,
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
        tabletPadding={'40px 20px 40px 20px'}
        desktopPadding={'40px 20px 40px 20px'}
      >
        <HeadlineContainer>
          <SpecialSubhead>Fill Out Form</SpecialSubhead>
        </HeadlineContainer>
        <div id="take-the-quiz" />
        <form
          name={'fourteen_day_trial_form'}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/14-for-14-thank-you/"
          onSubmit={this.handleFormSubmit}
        >
          <FormFieldSet>
            <input type="hidden" name="bot-field" />
            <RadioInput
              name={'goal'}
              question={'What is your #1 goal right now?'}
              value={this.state.formControls.goal.value}
              touched={this.state.formControls.goal.touched}
              valid={this.state.formControls.goal.valid}
              checked={this.state.formControls.goal.checked}
              options={this.state.formControls.goal.options}
              handleFormChange={this.handleFormChange}
            />
            <TextInput
              type="text"
              name="firstName"
              labelName={'First Name'}
              labelFor={'firstName'}
              label={'First Name'}
              value={this.state.formControls.firstName.value}
              onChange={this.handleFormChange}
              onFocus={this.handleFormFocus}
              onBlur={this.handleFormFocus}
              touched={this.state.formControls.firstName.touched}
              valid={this.state.formControls.firstName.valid}
              initial={this.state.formControls.firstName.initial}
              showInstruction={
                this.state.formControls.firstName.showInstruction
              }
            />
            <TextInput
              type="email"
              name="email"
              labelName={'Email Address'}
              labelFor={'email'}
              value={this.state.formControls.email.value}
              onChange={this.handleFormChange}
              onFocus={this.handleFormFocus}
              onBlur={this.handleFormFocus}
              touched={this.state.formControls.email.touched}
              valid={this.state.formControls.email.valid}
              initial={this.state.formControls.email.initial}
              showInstruction={this.state.formControls.email.showInstruction}
            />
            <TextArea
              type="text"
              name="why"
              value={this.state.formControls.why.value}
              onChange={this.handleFormChange}
            />
            <ButtonContainer
              mMarginTop={'30px'}
              tMarginTop={'30px'}
              dMarginTop={'40px'}
            >
              <FormButton type={'submit'} valid={this.state.formValid}>
                {this.state.buttonText}
              </FormButton>
            </ButtonContainer>
          </FormFieldSet>
        </form>
      </SectionContainer>
    )
  }
}

export default FourteenDayForm
