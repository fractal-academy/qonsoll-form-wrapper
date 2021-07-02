import React from 'react'
import 'antd/dist/antd.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES_PATHS } from './constants'
import { All, Edit, Show, Results } from './components'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES_PATHS.FORMS_ALL} key={ROUTES_PATHS.FORMS_ALL}>
        {/* ALL */}
        <All />
      </Route>

      <Route exact path={ROUTES_PATHS.FORM_EDIT} key={ROUTES_PATHS.FORM_EDIT}>
        {/* EDIT */}
        <Edit />
      </Route>

      <Route exact path={ROUTES_PATHS.FORM_SHOW} key={ROUTES_PATHS.FORM_SHOW}>
        {/* SHOW */}
        <Show />
      </Route>

      <Route
        exact
        path={ROUTES_PATHS.FORM_ANSWERS}
        key={ROUTES_PATHS.FORM_ANSWERS}>
        {/* ANSWER */}
        <Results />
      </Route>

      <Route render={() => <Redirect to={ROUTES_PATHS.FORMS_ALL} />} />
    </Switch>
  )
}

export default App
