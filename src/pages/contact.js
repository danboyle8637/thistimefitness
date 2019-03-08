import React, { Component } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import TextInput from '../components/Shared/Form/TextInput'
import TextArea from '../components/Shared/Form/TextArea'
import RadioInput from '../components/Shared/Form/RadioInput'
import validate from '../helpers/validate'
import { FormButton } from '../styles/Buttons'
import { SpecialSubhead } from '../styles/Headlines'
import {
  SectionContainer,
  HeadlineContainer,
  ButtonContainer,
} from '../styles/Containers'
import { FormFieldSet } from '../styles/Form'
import TextHeader from '../components/Shared/TextHeader'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        reason: {
          value: '',
          valid: false,
          touched: false,
          checked: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            {
              value: 'joining',
              displayValue: 'Joining your studio',
              checked: true,
            },
            {
              value: 'myAccount',
              displayValue: 'Help with my account',
              checked: false,
            },
            {
              value: 'question',
              displayValue: 'I have unique question',
              checked: false,
            },
          ],
        },
        question: {
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

  handleFormSubmit = event => {
    event.preventDefault()
    const form = event.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        reason: this.state.formControls.reason.value,
        question: this.state.formControls.question.value,
        firstName: this.state.formControls.firstName.value,
        email: this.state.formControls.email.value,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <TextHeader word={'Contact'} tagLine={`I Don't Bite... Only Answer`} fontSize={'56px'} letterSpacing={'1.4'} />
        <SectionContainer>
          <HeadlineContainer>
            <SpecialSubhead mobileLineHeight={'1.2'}>
              Contact Me Below
            </SpecialSubhead>
          </HeadlineContainer>
          <form
            name={'contact_form'}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact-thank-you/"
            onSubmit={this.handleFormSubmit}
          >
            <FormFieldSet>
              <input type="hidden" name="bot-field" />
              <RadioInput
                name={'reason'}
                value={this.state.formControls.reason.value}
                touched={this.state.formControls.reason.touched}
                valid={this.state.formControls.reason.valid}
                checked={this.state.formControls.reason.checked}
                options={this.state.formControls.reason.options}
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
                name="question"
                value={this.state.formControls.question.value}
                onChange={this.handleFormChange}
              />
              <ButtonContainer
                mMarginTop={'30px'}
                tMarginTop={'30px'}
                dMarginTop={'40px'}
              >
                <FormButton type={'submit'}>Please Contact Me</FormButton>
              </ButtonContainer>
            </FormFieldSet>
          </form>
        </SectionContainer>
      </Layout>
    )
  }
}

export default Contact
