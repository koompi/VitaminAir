import Link from 'next/link'
import NavStyles from '../styles/NavStyles'
import styled from 'styled-components'
import {Telegram} from '@styled-icons/boxicons-logos'



export const LogoButton = styled.button `
      height:  40px;
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
  max-width: 40px;
  color: white;
`

export const Nav = () => {
    return (
        <NavStyles>
            <Link href="/about">
                <a>About us</a>
            </Link>
            <Link href="https://t.me/vitaminair"  target="_blank"  >
                <LogoButton >
                        <TelegramStyles size="48" title="Channel" />
                        <p>Community</p>
                  
                </LogoButton>
                    
            </Link>
            
        </NavStyles>
    )
}

export default Nav