import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card'

const BackgroundStyled = styled.div`
   /* background-color: rgb(240, 241, 243); */
`;

const ContactStyles = styled.div`
    margin: auto;
    width: 75%;
    padding-top: 2%;
    padding-bottom: 3%;
    center{
        color:black;
        padding: 1%;
        font-size: 3vh;
        align-items: center;
        position: relative;
        font-weight: 500;
        text-transform: uppercase;
    }
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
  /* padding: 16px 16px;
  max-width: 75%;
  width: 80%; */
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  img{
   
    width:70%;
  }
  h2{
    /* text-align:center; */
    text-align:center;
    font-size: 21px;
    display: block;
    padding-left:auto;
    margin-right: 30%;
    padding-top: 14px;
    margin-bottom: -15px;
  }
  p{
    text-align:center;
    padding-left:auto;
    margin-right: 30%;
  }
`;


const Contact = () =>{

return(
      <BackgroundStyled>
        
        <ContactStyles>
        <center>Team Member</center>
            <Grid>
              <Item>
                  <StyledContainerCard>
                      <Card

                              uri="/image/min/Rithy-Thul.png" 
                               title="Rithy Thul"
                              description="Co-Founder"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                  
                      <Card
                            uri="/image/min/Clara-Donadello.png" 
                            title="Clara Donadello"
                            description="Senior Advisor"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                      
                      <Card 
                              uri="/image/min/Sela-Thul.png" 
                              title="Sela Thul"
                              description="Head of Operations"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                  
                      <Card
                            uri="/image/min/Panha-Suon.png" 
                            title="Panha Suon"
                            description="General Manager"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                      <img src="" />
                      <Card

                              uri="/image/min/Rithy-Sourn.png" 
                              title="Rithy Sourn"
                              description="Research & Development Lead"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                      
                      <Card 
                              uri="/image/min/Lykheang-Moeurn.png" 
                              title="Lykheang Moeurn"
                              description="Research & Development Assistant"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                  
                      <Card
                            uri="/image/min/Song-Sab.png" 
                            title="Song Sab"
                            description="Farm Manager"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                      <Card

                              uri="/image/min/Dane-Hieng.png" 
                               title="Dane Hieng"
                              description="Education & Camp Manager"  />
                      </StyledContainerCard>
              </Item>
              <Item>
                  <StyledContainerCard>
                      
                      <Card 
                              uri="/image/min/Ry-Keo.png" 
                              title="Ry Keo"
                              description="Farm Team"  />
                      </StyledContainerCard>
              </Item>
              
            </Grid>
        </ContactStyles>
    </BackgroundStyled>
  )
}
export default Contact;