import { AnswersContextProvider, FormShow } from 'feedback-typeform-app/src'

import React from 'react'
import firebase from '../services/Firebase'
import { useParams } from 'react-router-dom'

function Show() {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()

  // const questions = [
  //   {
  //     _id: '06y0Dwef7RVBAuqXWmSJ',
  //     formId: 'jAqtGosxM1ijdXgvldom',
  //     id: '06y0Dwef7RVBAuqXWmSO',
  //     layoutType: 'DEFAULT',
  //     order: 0,
  //     questionType: 'Welcome screen',
  //     title: 'WS'
  //   },
  //   {
  //     _id: '06y0Dwef7RVBAuqXWmS1',
  //     formId: 'jAqtGosxM1ijdXgvldom',
  //     id: '0umzEiz6vZaamYUNMjdD',
  //     layoutType: 'DEFAULT',
  //     order: 1,
  //     questionType: 'Short text',
  //     title: 'Question'
  //   },
  //   {
  //     _id: '06y0Dwef7RVBAuqXWmSP',
  //     formId: 'jAqtGosxM1ijdXgvldom',
  //     id: '06y0Dwef7RVBAuqXWmSO',
  //     layoutType: 'DEFAULT',
  //     order: 2,
  //     questionType: 'Ending',
  //     title: 'Ending'
  //   }
  // ]

  return (
    <AnswersContextProvider>
      <FormShow
        id={id}
        showHeader
        firebase={firebase}
        // noFirebaseForm={{}}
        // noFirebaseQuestions={questions}
        // noFirebaseAnswersScore={[]}
      />
    </AnswersContextProvider>
  )
}

export default Show
