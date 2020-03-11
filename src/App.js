import React, { Fragment } from 'react'
import Formulario from './Components/Formulario'

function App() {
  return (
    <Fragment>
      <h1> Administrador de pacientes</h1>
      <div className="container"></div>
      <div className="row"></div>
      <div className="one-half column"></div>
      <Formulario />

      <div className="one-half column"></div>
    </Fragment>
  )
}

export default App
