import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0 9rem;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 0px 1rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    /* background: none; */
    color: #0db14b;
    border: 0;
    cursor: pointer;

    @media (max-width: 700px) {
      margin : 0;
      padding: 0;
      font-size: 0;
      grid-template-columns: 1fr;
      justify-content: center;
      
    }
    &:before {
      content: '';
      width: 2px;
      background: none;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      /* background: #0db14b; */
      background: white;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      /* transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31); */
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        
        width: calc(100% - 60px){
          justify-content: center;
        };
      }
    @media (max-width: 700px) {
        width: calc(100% - 10px);
        width: 100%;
        justify-content: center;
    }
    }
  }
  @media (max-width: 1300px) {
    padding: 1%;
    width: 76%;
    justify-content: center;
    font-size: 1.5rem;
  }
  @media (max-width: 1024px) {
    
    border-top:0 ;
    padding: 1%;
    width: 69%;
    justify-content: center;
    font-size: 1.5rem;
  }
  @media(max-width: 900px){
      display: none;
  }
`;

export default NavStyles;
