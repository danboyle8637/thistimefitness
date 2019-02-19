import React, { Component } from 'react'

import TextInput from '../../Shared/Form/TextInput'
import TextArea from '../../Shared/Form/TextArea'
import RadioInput from '../../Shared/Form/RadioInput'
import validate from '../../../helpers/validate'
import { SiteButton } from '../../../styles/Buttons'
import { SpecialSubhead } from '../../../styles/Headlines'
import {
  SectionContainer,
  HeadlineContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { FormFieldSet } from '../../../styles/Form'

class FourteenDayForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        goal: {
          value: '',
        },
        goal: {
          value: '',
          valid: false,
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

  render() {
    return (
      <SectionContainer
        tabletPadding={'40px 20px 40px 20px'}
        desktopPadding={'40px 20px 40px 20px'}
      >
        <HeadlineContainer>
          <SpecialSubhead>Fill Out Form</SpecialSubhead>
        </HeadlineContainer>
        <form>
          <FormFieldSet>
            <RadioInput
              name={'goal'}
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
              <SiteButton>I'm Interested</SiteButton>
            </ButtonContainer>
          </FormFieldSet>
        </form>
      </SectionContainer>
    )
  }
}

export default FourteenDayForm
