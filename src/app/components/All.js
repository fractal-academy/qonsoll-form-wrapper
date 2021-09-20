import React from 'react'
import { ROUTES_PATHS } from '../constants'
import firebase from '../services/Firebase'
import { FormsAll } from 'feedback-typeform-app/src'
import { useHistory, generatePath } from 'react-router-dom'

function All() {
  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [CLEAR_FUNCTIONS]
  const onFormItemClick = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_EDIT, { id })
    history.push(path)
  }

  return (
    <FormsAll
      translate={{}}
      showHeader={true}
      firebase={firebase}
      actions={{
        onFormItemClick: onFormItemClick
      }}
      firstLevelHidden
    />
  )
}

export default All
