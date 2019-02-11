import React, { Component } from 'react'
import styled from 'styled-components'

import TextInput from '../../Shared/Form/TextInput'
import TextArea from '../../Shared/Form/TextArea'
import validate from '../../../helpers/validate'
import { SiteButton } from '../../../styles/Buttons'
import { BodyText } from '../../../styles/BodyText'
import { SectionContainer } from '../../../styles/Containers'
import { FormFieldSet } from '../../../styles/Form'

class FourteenDayForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        goal: {
          value: '',
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
    updatedFormElement.showInstruction = !updatedFormElement.showInstruction

    updatedControls[name] = updatedFormElement

    this.setState({ formControls: updatedControls })
  }

  render() {
    return (
      <SectionContainer>
        <form action="post">
          <FormFieldSet>
            <TextLabel htmlFor="firstName">First Name</TextLabel>
            <TextInput
              type="text"
              name="firstName"
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
            <TextLabel htmlFor="email">Email Address</TextLabel>
            <TextInput
              type="email"
              name="email"
              label={'Email Address'}
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
            <BodyText htmlFor="why">
              Why is getting healthy and fit a priority for you at this moment?
            </BodyText>
            <SiteButton>I'm Interested</SiteButton>
          </FormFieldSet>
        </form>
      </SectionContainer>
    )
  }
}

export default FourteenDayForm

const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TextLabel = styled.label`
  margin: 0;
  padding: 0;
  color: #b3b6e1;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 400;
  background-color: #2b2c3a;
  padding: 3px;
`
