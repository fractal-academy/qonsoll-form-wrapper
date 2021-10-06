import React from 'react'
import { ROUTES_PATHS } from '../constants'
import firebase from '../services/Firebase'
import { useHistory, generatePath, useParams } from 'react-router-dom'
import {
  FormEdit,
  CurrentQuestionContextProvider
} from 'feedback-typeform-app/src'

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
        showHeader
        showAnswers
        translate={{}}
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
