import { FormAnswers } from 'asq/src'
import React from 'react'
import firebase from 'firebase/compat/app'
import { useParams } from 'react-router-dom'

function Answers() {
  const { id } = useParams()

  return <FormAnswers id={id} firebase={firebase} showHeader />
}

export default Answers
