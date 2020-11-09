import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card';

// import {SocialYoutube,SocialLinkedin} from '@styled-icons/foundation';
import {Telegram} from '@styled-icons/boxicons-logos';
export const BackgroundStyled = styled.div`
   background-color: rgb(240, 241, 243);
`;

export const ContactStyles = styled.div`
    margin: auto;
    width: 75%;
    padding-top: 2%;
    padding-bottom: 3%;
    
`;


export const Grid = styled.div`
  padding-left: 9%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
      text-align: center;
      padding-left: 0;
      font-size: 1.5vh;
      grid-template-columns: 1fr;
      justify-content: center;
      center{
        font-size: 2vh;
      }
    }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  /* padding: .5rem; */

`

export const StyledContainerCard = styled.div`
  padding: 16px 16px;
  max-width: 75%;
  width: 80%;
  margin: auto;
  img{
    width:75%;
  }

  p{

    font-size: 18px;
    margin: 0;
    padding-top: 6px; 

  }
`;
const Social = styled.div`

`
export const DetialContact = styled.div`
    margin: 0;
`

const Contact = () =>{

return(
      <BackgroundStyled>
        <ContactStyles>
            <Grid>
              <Item>
                  <StyledContainerCard>
                  <a href="#top">
                      <Card
                              uri="/image/Vitamin-air-black.png" 
                               />
                  </a>
                      </StyledContainerCard>
                  
              </Item>
              <Item>
                  <StyledContainerCard>
                      <Card
                              title="Contact us"
                            />
                        <DetialContact>
                          <p>Email : info@vitaminair.org</p>
                        </DetialContact>
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                  <Card
                              title="Follow us" />
                  
                  <Social>
                      {/* <Link href="https://www.linkedin.com/company/vitaminair/" >
                      <SocialLinkedin size="48" />
                      </Link>
                      <Link href="https://www.youtube.com/channel/UCL_dER70Hn-OncQ52BXQYLg" >
                      <SocialYoutube size="48" />
                      </Link> */}
                      <Link href="https://t.me/vitaminair" >
                      <Telegram size="48" />
                      </Link>
                  </Social>
                      </StyledContainerCard>
              </Item>
                  </Grid>
        </ContactStyles>
    </BackgroundStyled>
  )
}
export default Contact;