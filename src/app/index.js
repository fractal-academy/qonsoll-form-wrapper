import React from 'react'
import { ROUTES_PATHS } from './constants'
import '@qonsoll/react-design/dist/styles/styles.css'
import '../styles/style.css'
import { All, Edit, Show, Results } from './components'
import { Redirect, Route, Switch } from 'react-router-dom'

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
