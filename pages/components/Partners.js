import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card'


export const PartnerStyles = styled.div`
    margin: auto;
    width: 60%;
    padding-bottom: 3%;
    center{
        padding-top: 5%;
        font-size: 26px;
        align-items: center;
        position: relative;
        font-weight: bold;
        text-transform: uppercase;
    }
    h2{
      margin: 2;
      padding: 0 100px;
      text-align: center;
      align-items: center;
      font-size: 18px;
      position: relative;
      font-weight: 50; 
    
    }
    @media (max-width: 1300px) {
      font-size: 1vh;
      grid-template-columns: 1fr;
      justify-content: center;
      center{
        /* font-size: 2vh; */
      }
    }

    @media(max-width: 900px){
        h2{
          padding: 0;
          letter-spacing: 0.5px;
          line-height: 28.2667px
        }
        
      }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 50px 50px; */
  /* grid-gap: 5px; */
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width: 900px ){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

`;

export const StyledContainerCard = styled.div`
  /* max-width: 50%; */
  width: 90%;
  margin: auto;
  img{
    width:150px;
  }
`;

export const StyledRootCard = styled.div`
  padding: 50px 12px;
`;



const Partners = () =>{

return(
    
        <PartnerStyles>
            <center>Strategic Partners</center>
            <h2>We're especially pleased to have built strategic partnerships
with forward thinking leaders in the business world.</h2>
            <Grid>
              <Item>
                  <StyledContainerCard>
                      <Card
                              uri="image/smallworld.png"  />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card
                                uri="image/koompi.png" />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card                             
                                uri="/image/sabay.png" />
                        </StyledContainerCard>
                  </Item>
                  <Item>
                    <StyledContainerCard>
                        <Card
                                uri="/image/ISI.png" />
                        </StyledContainerCard>
                  </Item>
                  <Item>
                    <StyledContainerCard>
                        <Card
                                uri="/image/Doer.png" />
                        </StyledContainerCard>
                  </Item>
                  
            </Grid>
        </PartnerStyles>
        
        
)
}
export default Partners;