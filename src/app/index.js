import { Navigate, Route, Routes } from 'react-router-dom'

import { APP_ROUTES } from './allRoutes'
import React from 'react'

const App = () => {
  return (
    <Routes>
      {APP_ROUTES.map(({ key, path, element }) => (
        <Route key={key} path={path} element={element} />
      ))}

      <Route path="/" element={<Navigate to="/forms" />} />
    </Routes>
  )
}

export default App
