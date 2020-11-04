import Link from 'next/link'
import NavStyles from '../styles/NavStyles'

const Nav = () => {
    return (
        <NavStyles>
            <Link href="https://t.me/vitaminair">
                <a>Community</a>
            </Link>
            <Link href="https://t.me/vitaminair">
                <a>channel</a>
            </Link>
        </NavStyles>
    )
}

export default Nav