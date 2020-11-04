import Link from 'next/link'
import NavStyles from '../styles/NavStyles'
import styled from 'styled-components'
import {Telegram} from '@styled-icons/boxicons-logos/Telegram'



export const LogoButton = styled.button `
      font-size: 1.2em;
      margin-right: 1rem;
      border-radius: 3px;
      color: green;
      background-color:green;
      p{
          color: white;
          font-size: 20px;
          margin:8px;
      }
`
export const TelegramStyles = styled(Telegram)`
  max-width: 34px;
  padding-right: 10px;
  /* padding: 1px; */
  color: white;
`

export const Nav = () => {
    return (
        <NavStyles>
            <Link href="/about">
                <a>About us</a>
            </Link>
            <Link href="/">
                <a>Community</a>
            </Link>
            <Link href="https://t.me/vitaminair">
                <LogoButton >
                        <TelegramStyles />
                        <p>Channel</p>
                  
                </LogoButton>
                    
            </Link>
            
            
        </NavStyles>
    )
}

export default Nav