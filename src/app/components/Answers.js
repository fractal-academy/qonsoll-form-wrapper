import { FormAnswers } from 'feedback-typeform-app/src'
import React from 'react'
import firebase from '../services/Firebase'
import { useParams } from 'react-router-dom'

function Answers() {
  // [ADDITIONAL HOOKS]
  const { id } = useParams()

  return <FormAnswers id={id} firebase={firebase} showHeader />
}

export default Answers
