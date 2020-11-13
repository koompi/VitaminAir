import Link from 'next/link'
import styled from 'styled-components'

const MenuStyle = styled.div`
        text-align: center;
        a{
            color: #0db14b;
            font-weight:bold;
            font-size: 18px;
            margin: auto;
            align-items: center;
            text-transform: uppercase;
        }
`
export const Nav = () => {
    return (
        <MenuStyle>
            <Link href="/about">
                <a>ABOUT US</a>
            </Link>
            <br></br>
            <br></br>
            <Link href="https://t.me/vitaminair"  >
                <a>Community</a>
            </Link>
            <br></br>
            <br></br>
            
        </MenuStyle>
    )
}

export default Nav