import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Gsapto from './components/Gsapto'
import Gsapfrom from './components/Gsapfrom'
import Gsapfromto from './components/Gsapfromto'
import Gsaptimeline from './components/Gsaptimeline'
const App = () => {
 return(
  <div>
    <Gsapto/>
    <Gsapfrom/>
    <Gsapfromto/>
    <Gsaptimeline/>
  </div>
 )
}

export default App