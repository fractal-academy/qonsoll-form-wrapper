import { CurrentQuestionContextProvider, FormEdit } from 'asq/src'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import { ROUTES_PATHS } from '../constants'
import React from 'react'
import firebase from 'firebase/compat/app'

function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleShowForm = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_SHOW, { id })
    navigate(path)
  }
  const handleShowResults = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_ANSWERS, { id })
    navigate(path)
  }

  return (
    <CurrentQuestionContextProvider>
      <FormEdit
        id={id}
        showAnswers
        firebase={firebase}
        actions={{
          onFormResultsShow: handleShowResults,
          onFormShow: handleShowForm
        }}
      />
    </CurrentQuestionContextProvider>
  )
}

export default Edit
