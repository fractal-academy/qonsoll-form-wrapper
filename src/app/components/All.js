import React from 'react'
import { useHistory, generatePath } from 'react-router-dom'
import { FormsAll } from 'feedback-typeform'
import { ROUTES_PATHS } from '../constants'
import firebase from '../services/Firebase'

function All() {
  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [CLEAR_FUNCTIONS]
  const onFormShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_SHOW, { id })
    history.push(path)
  }
  const onFormItemClick = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_EDIT, { id })
    history.push(path)
  }
  const t = (txt) => txt

  return (
    <FormsAll
      firebase={firebase}
      translate={t}
      titleText={t('Wizards')}
      actions={{
        onFormShow: onFormShow,
        onFormItemClick: onFormItemClick
      }}
      firstLevelHidden
    />
  )
}

export default All
