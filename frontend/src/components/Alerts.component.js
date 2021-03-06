import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  return (
    alertContext.alerts !== null && alertContext.alerts.map(
      alert => (
        <div key={alert.id}>
          <i className=' fas fa-info-circle'>{alert.msg}</i>
        </div>
      ))
  )
}

export default Alerts
