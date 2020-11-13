import styled from 'styled-components'
import React, {useState} from 'react';
import Menu from './Menu';
import { MenuAltLeft } from '@styled-icons/boxicons-regular'

const RedMenuAltLeft = styled(MenuAltLeft)`
  color: #0db14b;
  border-color: white;
  display: none;
  @media (max-width : 900px) {
        display: block;
  }
`

const ButtonMenu = styled.div`
    background: white;
    border-bottom: none;
    border-color: white;
`

//components
const NavSmall = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className="nav-small">
            <ButtonMenu 
                onClick={handleToggle}
            >
                <RedMenuAltLeft size="40" />
            </ButtonMenu>
            {toggleMenu 
                ? <Menu />
                    : ""}
        </nav>
    )
}
export default NavSmall;