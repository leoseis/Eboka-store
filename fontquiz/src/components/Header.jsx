import React from 'react'
import { TbCloudComputing } from "react-icons/tb";

const Header = () => {
  return (
    <header className='app-header'>
    <TbCloudComputing style={{fontSize: "100px"}} />
    <h1>The React Quiz</h1>
  </header>
  )
}

export default Header
