import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

export const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 10rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  img{
    width: 250px
  }
  /* a {
    padding: 0rem 1rem;
    background: #0db14b;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  } */
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

export const StyledHeader = styled.header`
  .bar {
    /* border-bottom: 5px solid ; */
    /* background-color: #0db14b; */
    padding: 0 13%;
    /* background-color: #f6f6f6; */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
    @media (max-width: 900px) {
      padding: 1rem;
    }
    
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>

        <Link href="/">
            <img src="/image/VA-White-V1.png" />
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
