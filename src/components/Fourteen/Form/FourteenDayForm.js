import React, { Component } from 'react'

import TextInput from '../../Shared/Form/TextInput'
import TextArea from '../../Shared/Form/TextArea'
import validate from '../../../helpers/validate'
import { SiteButton } from '../../../styles/Buttons'
import { BodyText } from '../../../styles/BodyText'
import { SectionContainer } from '../../../styles/Containers'
import { FormFieldSet } from '../../../styles/Form'

class FourteenDayForm extends Component {
  state = {
    formControls: {
      goal: {
        value: '',
      },
      why: {
        value: '',
        valid: false,
        touched: false,
        validationRules: {
          isRequired: false,
        },
      },
      firstName: {
        initial: true,
        value: '',
        valid: false,
        touched: false,
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
        validationRules: {
          isEmail: true,
          isRequired: true,
        },
      },
    },
  }

  handleFormChange = event => {
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

    updatedFormElement.touched = !updatedFormElement.touched
    updatedFormElement.initial = false

    updatedControls[name] = updatedFormElement

    this.setState({ formControls: updatedControls })
  }

  handleInputError = () => {}

  handleInputInstructions = () => {}

  render() {
    return (
      <SectionContainer>
        <form action="post">
          <FormFieldSet>
            <label htmlFor="firstName">
              <TextInput
                type="text"
                name="firstName"
                value={this.state.formControls.firstName.value}
                onChange={this.handleFormChange}
                onFocus={this.handleFormFocus}
                onBlur={this.handleFormFocus}
                touched={this.state.formControls.firstName.touched}
                valid={this.state.formControls.firstName.valid}
                initial={this.state.formControls.firstName.initial}
              />
              <BodyText>First Name</BodyText>
            </label>
            <label htmlFor="email">
              <TextInput
                type="email"
                name="email"
                value={this.state.formControls.email.value}
                onChange={this.handleFormChange}
                onFocus={this.handleFormFocus}
                onBlur={this.handleFormFocus}
                touched={this.state.formControls.email.touched}
                valid={this.state.formControls.email.valid}
                initial={this.state.formControls.email.initial}
              />
              <BodyText>Email Address</BodyText>
            </label>
            <label htmlFor="why">
              <TextArea
                name="why"
                maxLength="120"
                value={this.state.formControls.why.value}
                onChange={this.handleFormChange}
              />
              <BodyText>
                Why is getting healthy and fit a priority for you at this
                moment?
              </BodyText>
            </label>
            <SiteButton>I'm Interested</SiteButton>
          </FormFieldSet>
        </form>
      </SectionContainer>
    )
  }
}

export default FourteenDayForm
