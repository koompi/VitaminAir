import styled from 'styled-components';
import Card from './Card'


export const HeadAboutStyle = styled.div`
 
    margin: auto;
    width: 60%;
    padding-bottom: 3%;
    center{
        padding: 3%;
        font-size: 26px;
        align-items: center;
        position: relative;
        font-weight: bold;
        text-transform: uppercase;
    }
    .divTwoMobile{
        display: none;
    }

    @media (max-width: 1300px) {
      font-size: 1vh;
      grid-template-columns: 1fr;
      justify-content: center;
      center{
        /* font-size: 2vh; */
      }
    }
    @media (max-width: 900px) {
      font-size: 1.5vh;
      grid-template-columns: 1fr;
      justify-content: center;
      center{
        /* font-size: 2vh; */
        padding: 10%;
      }
      .divTwo{
        display: none;
      }
      .divTwoMobile{
              display:block;
      }
    }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0;
    padding: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

`

export const StyledContainerCard = styled.div`
  max-width: 100%;
  margin: auto;
  @media(max-width : 900px){
    width: 96%;
  }
  
  img{
        /* text-align: center; */
        /* margin-left:20%; */
        width: 480px;
  }
  @media(max-width: 480px ){
    img{
      width: 100%;
    }
  }

`;

export const StyledRootCard = styled.div`
  padding: 50px 12px;
`;



const HeadAbout = () =>{
return(
    
        <HeadAboutStyle>
            <Grid>
              <Item>
                  <StyledContainerCard>
                      <Card
                              uri="/image/about/vitamin-air-min.jpg"  />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card 
                        title="What is Vitamin Air?"
                        description="Vitamin Air is a growing community of people actively engaged in social, cultural, ecological and economic regeneration.
                        "
                        
                     
                               
                                />
                      </StyledContainerCard>
                  </Item>
                  <div className="divTwo">
                  <Item>
                    <StyledContainerCard>
                        <Card
                          title="vision"
                          description="Our vision is to inspire others to rethink their relationship with nature, 
                          to learn how to live sustainably therein, and to seek input and guidance for creative new 
                          ways to provide benefit to each other and our surroundings.
                          " />
                      </StyledContainerCard>
                  </Item>
                  </div>
                  
                  
                <Item>
                    <StyledContainerCard>
                        <Card
                                uri="/image/about/vision-min.jpg" />
                        </StyledContainerCard>
                  </Item>
                  
                  <div className="divTwoMobile">
                  <Item>
                    <StyledContainerCard>
                        <Card
                            
                            title="vision"
                            description="Our vision is to inspire others to rethink their relationship with nature, 
                            to learn how to live sustainably therein, and to seek input and guidance for creative new 
                            ways to provide benefit to each other and our surroundings."
                                />
                      </StyledContainerCard>
                  </Item>
                  </div>

                  <Item>
                  <StyledContainerCard>
                      <Card
                              uri="/image/about/Mission-min.jpg"  />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card
                                title="mission"
                                description="Our mission is to work together with the Royal Government of Cambodia 
                                to reach and maintain a national forest cover of 60% of total land area and maintain 
                                it there for generations ahead. 
                                We work to reforest the rainforests, incorporating technology and designs inspired by nature.
                                ." />
                        </StyledContainerCard>
                  </Item>
                 
            </Grid>
        </HeadAboutStyle>
        
        
)
}
export default HeadAbout;