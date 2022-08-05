import React from 'react'
import NavigationComponent from './NavigationComponent'
import Header from './Header'
import { RegisterDialogForm } from "../Frontpage/MaterialUIPopup1"
import '../css/header.css'
const NavComponent = () => {
  return (
    <div>
        <div className="top-header">
            <RegisterDialogForm />
        </div>
        <Header />
        <NavigationComponent />
    </div>
  )
}

export default NavComponent