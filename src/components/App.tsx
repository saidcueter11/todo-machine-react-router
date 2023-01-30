import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../routes/HomePage'
import { EditTodoPage } from '../routes/EditTodoPage'
import { NewTodoPage } from '../routes/NewTodoPage'
function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit' element={<EditTodoPage />} />
          <Route path='/new' element={<NewTodoPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export { App }
