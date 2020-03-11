import React, { Fragment } from 'react'

const Formulario = () => {
  return (
    <Fragment>
      <h2> Crear Cita</h2>

      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="Mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="Propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />

        <label>Fecha</label>
        <input type="date" name="hora" className="u-full-width" />

        <label>Hora</label>
        <input type="Time" name="Fecha" className="u-full-width" />

        <label>Sintomas</label>
        <textarea className="u-full-width" name="Sintomas"></textarea>

        <button type="button" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}
export default Formulario
