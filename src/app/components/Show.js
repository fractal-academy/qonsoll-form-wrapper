import React from 'react'
import firebase from '../services/Firebase'
import { useParams } from 'react-router-dom'
import { FormShow, AnswersContextProvider } from 'feedback-typeform-app/src'

function Show() {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()

  return (
    <AnswersContextProvider>
      <FormShow id={id} translations={{}} showHeader firebase={firebase} />
    </AnswersContextProvider>
  )
}

export default Show
