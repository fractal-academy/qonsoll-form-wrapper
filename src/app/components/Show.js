import React from 'react'
import { useHistory, generatePath, useParams } from 'react-router-dom'
import { FormShow, AnswersContextProvider } from 'feedback-typeform-app/src'
import { ROUTES_PATHS } from '../constants'
import firebase from '../services/Firebase'
import COLLECTIONS from '../../modules/feedback-typeform-app/src/constants/collection'
import { message } from 'antd'

function Show() {
  // [ADDITIONAL_HOOKS]
  const history = useHistory()
  const { id } = useParams()

  // [CLEAR_FUNCTIONS]
  const onFormShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_SHOW, { id })
    history.push(path)
  }
  const onFormItemClick = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_EDIT, { id })
    history.push(path)
  }
  const onFinish = (updatedAnswers) => {
    console.log(updatedAnswers)
  }
  const t = (txt) => txt
  return (
    <AnswersContextProvider>
      <FormShow
        id={id}
        firebase={firebase}
        translate={t}
        actions={{
          onFormShow: onFormShow,
          onFormItemClick: onFormItemClick,
          onFinish
        }}
      />
    </AnswersContextProvider>
  )
}

export default Show
