import React from 'react'
import me from './me.jpg'
import './meine.css'
const MEINE = () => {
  return (
    <div className='body'>
        <div className='left'>
            <div className='name'>
           <span> HELLO !</span>
           <span>MY NAME IS SELEM BEN TANFOUS</span>
           <span>I ' M  A  F R O N T E N D E N D   D E V E L O P E R   W I T H    B E G I N N E R   E X P I R E N C E   A N D   T H I S   I S   M Y   F I R S T   P R O F T O L I O</span>
        </div>
        </div>
        <br/>
        <div className='right'>
            <img src={me.jpg} alt=""/>
        </div>
    </div>
  )
}
export default MEINE
