import Link from 'next/link'
import NavStyles from '../styles/NavStyles'
import styled from 'styled-components'
import {Telegram} from '@styled-icons/boxicons-logos'

const LogoButton = styled.button`
      margin-top: 28px;
      height: 40px;
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

const TelegramStyles = styled(Telegram)`
  max-width: 40px;
  color: white;
`

const Nav = () => {
    return (
        <NavStyles>
            <Link href="https://t.me/vitaminair">
                <LogoButton >
                            <TelegramStyles size="48" title="Channel" />
                            <p>Community</p>
                    
                    </LogoButton>
            </Link>
        </NavStyles>
    )
}

export default Nav