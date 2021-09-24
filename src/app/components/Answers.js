import React from 'react'
import firebase from '../services/Firebase'
import { useParams } from 'react-router-dom'
import { FormAnswers } from 'feedback-typeform-app/src'

function Answers() {
  // [ADDITIONAL HOOKS]
  const { id } = useParams()

  return <FormAnswers id={id} firebase={firebase} translate={{}} showHeader />
}

export default Answers
