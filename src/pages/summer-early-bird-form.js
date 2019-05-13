import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SummerSlimDownForm from '../components/SummerSlimDown/Form/SummerSlimDownForm'

const SummerEarlyBirdForm = () => {
  return (
    <Layout>
      <FormContainer>
        <SummerSlimDownForm />
      </FormContainer>
    </Layout>
  )
}

export default SummerEarlyBirdForm

const FormContainer = styled.div`
  margin-top: 80px;
`
