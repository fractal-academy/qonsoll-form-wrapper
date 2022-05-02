import {
  CurrentQuestionContextProvider,
  FormEdit
} from 'feedback-typeform-app/src'
import { generatePath, useHistory, useParams } from 'react-router-dom'

import { ROUTES_PATHS } from '../constants'
import React from 'react'
import firebase from '../services/Firebase'

function Edit() {
  // [ADDITIONAL HOOKS]
  const { id } = useParams()
  const history = useHistory()

  // [CLEAR_FUNCTIONS]
  const onFormShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_SHOW, { id })
    history.push(path)
  }
  const onFormResultsShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_ANSWERS, { id })
    history.push(path)
  }

  return (
    <CurrentQuestionContextProvider>
      <FormEdit
        id={id}
        showAnswers
        firebase={firebase}
        actions={{
          onFormResultsShow: onFormResultsShow,
          onFormShow: onFormShow
        }}
      />
    </CurrentQuestionContextProvider>
  )
}

export default Edit
