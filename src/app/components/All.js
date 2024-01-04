import { generatePath, useNavigate } from 'react-router-dom'

import { FormsAll } from 'asq/src'
import { ROUTES_PATHS } from '../constants'
import React from 'react'
import firebase from 'firebase/compat/app'

function All() {
  const navigate = useNavigate()

  const handleShowForm = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_EDIT, { id })
    navigate(path)
  }

  return (
    <FormsAll
      showHeader={true}
      firebase={firebase}
      actions={{
        onFormItemClick: handleShowForm
      }}
    />
  )
}

export default All
