import { All, Edit, Results, Show } from './components'

import { ROUTES_PATHS } from './constants'
import React from 'react'

export const APP_ROUTES = [
  {
    key: ROUTES_PATHS.FORMS_ALL,
    path: ROUTES_PATHS.FORMS_ALL,
    element: <All />
  },
  {
    key: ROUTES_PATHS.FORM_EDIT,
    path: ROUTES_PATHS.FORM_EDIT,
    element: <Edit />
  },
  {
    key: ROUTES_PATHS.FORM_SHOW,
    path: ROUTES_PATHS.FORM_SHOW,
    element: <Show />
  },
  {
    key: ROUTES_PATHS.FORM_ANSWERS,
    path: ROUTES_PATHS.FORM_ANSWERS,
    element: <Results />
  }
]

export default APP_ROUTES
