import React from 'react'
import 'antd/dist/antd.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES_PATHS } from './constants'
import {
  FormsAll,
  FormShow,
  FormEdit,
  CurrentQuestionContextProvider,
  AnswersContextProvider
} from 'feedback-typeform'
import { useParams } from 'react-router-dom'
import firebase from './services/Firebase'

const App = () => {
  // [ADDITIONAL HOOKS]

  // const { id } = useParams()
  const id = '9X4bgcwxFawa5EPuoEfH'
  const onFinish = (answers) => {
    console.log(answers)
  }
  const t = (text) => text

  return (
    <Switch>
      {/* ALL */}
      <Route exact path={ROUTES_PATHS.FORMS_ALL} key={ROUTES_PATHS.FORMS_ALL}>
        {/* <FormsAll /> */}
        All
      </Route>
      {/* EDIT */}
      <Route exact path={ROUTES_PATHS.FORM_EDIT} key={ROUTES_PATHS.FORM_EDIT}>
        {/* <CurrentQuestionContextProvider>
          <FormEdit />
        </CurrentQuestionContextProvider> */}
        Edit
      </Route>
      {/* SHOW */}
      <Route exact path={ROUTES_PATHS.FORM_SHOW} key={ROUTES_PATHS.FORM_SHOW}>
        {/* <AnswersContextProvider>
          <FormShow
            firebase={firebase}
            id={id}
            actions={{ onFinish }}
            translate={t}
          />
        </AnswersContextProvider> */}
        Show
      </Route>
      <Route render={() => <Redirect to={ROUTES_PATHS.FORMS_ALL} />} />
    </Switch>
  )
}

export default App
