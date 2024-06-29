import React from 'react'
import popup from './popup.css'

export const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup__inner">
            <button className="close__btn" onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
        </div>
    </div>
  ) :"";
}

export default Popup