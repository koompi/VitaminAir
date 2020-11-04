import styled from 'styled-components';
export const SubscribeStyles = styled.div`
    background-color:rgb(240,241,243);
    margin-top: -4px;
    width: 100%;
    padding: 10px;
    center{
        padding: 2%;
        /* margin: auto 50px; */
        font-size: 2vh;
        align-items: center;
        position: relative;
        font-weight: 500;
        text-transform: uppercase;
    }
    @media (max-width: 1300px) {
      font-size: 1vh;
      grid-template-columns: 1fr;
      justify-content: center;
      center{
        font-size: 2vh;
      }
    } 
  
`;
export const ContainerStyles = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    /* padding-top: 64px;
    padding-bottom: 40px; */
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px 0;

`;
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "green" : "white"};
  color: ${props => props.primary ? "white" : "green"};
  width: 200px;
  font-size: .90em;
  margin: 1em;
  padding: 0.3em 1em;
  border: 2px solid green;
  border-radius: 3px;
  @media(max-width: 480px ){
       margin: 2px;
       padding: 0.25em 10px;
    }
   
  
`;



const Subscribe = () =>{

return( 
        <SubscribeStyles>
             <ContainerStyles>
              <center>
              <Button as="a" href="/about"  primary>ABOUT US</Button>
              </center>
              </ContainerStyles>        
        </SubscribeStyles>
        
        
)
}
export default Subscribe;