import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card';

// import {Zap} from 'styled-icons/boxicons-logos/FacebookCircle';
// import {Facebook} from '@styled-icons/entypo-social/FacebookWithCircle';

import {LinkedinSquare ,MediumSquare , FacebookSquare} from '@styled-icons/boxicons-logos';

const BackgroundStyled = styled.div`
   background-color: rgb(240, 241, 243);
`;

const ContactStyles = styled.div`
    margin: auto;
    width: 75%;
    padding-top: 2%;
    padding-bottom: 3%;
    
`;


const Grid = styled.div`
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

const Item = styled.div`
  display: flex;
  justify-content: center;
  /* padding: .5rem; */

`

const StyledContainerCard = styled.div`
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
const DetialContact = styled.div`
    margin: 0;
`

const Contact = () =>{

return(
      <BackgroundStyled>
        <ContactStyles>
            <Grid>
              <Item>
                  <StyledContainerCard>
                      <Card
                              uri="/image/Vitamin-air-black.png" 
                               />
                      </StyledContainerCard>
                    
              </Item>
              <Item>
                  <StyledContainerCard>
                      <Card
                              title="Contact us"
                            />
                        <DetialContact>
                          <p>Email : info@vitaminair.com  </p>
                          <p>Mobile : 012 228 000 </p>
                        </DetialContact>
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                  <Card
                              title="Follow us" />
                  
                  <Social>
                      <LinkedinSquare size="48" />
                      <FacebookSquare size="48" />
                      <MediumSquare  size="48" />
                  </Social>
                      </StyledContainerCard>
              </Item>
                  </Grid>
        </ContactStyles>
    </BackgroundStyled>
  )
}
export default Contact;