import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card'
// import Image from "next/image"


const ProjectStyles = styled.div`
 
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 17px;
    text-align: center;
    img {
    margin-left: 0% !important;
  }
}
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

`

const StyledContainerCard = styled.div`
  max-width: 100%;
  width: 90%;
  margin: auto;
  img{
        /* text-align: center; */
        margin-left:20%;
        width: 220px;
  }
  @media(max-width: 480px ){
    img{
      width: 100%;
    }
  }
`;

const StyledRootCard = styled.div`
  padding: 50px 12px;
`;



const Projects = () =>{
return(
    
        <ProjectStyles>
            <center>PROJECTS</center>
            <Grid>
              <Item>
                  <StyledContainerCard>
                      <Card
                              // uri="/image/Reforestation.jpg" 
                              uri="/image/Rreforestation-Green.png"
                               />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card 
                        // imgcontent="/image/Rreforestation-Green.png"
                        title="Reforestation"
                        description="Reforest and maintain 60% plus of Cambodian national forest cover."
                        
                     
                               
                                />
                      </StyledContainerCard>
                  </Item>
                  <div className="divTwo">
                  <Item>
                    <StyledContainerCard>
                        <Card
                          // imgcontent="/image/Natural-Farming-Green.png"
                          title="Natural Farming"
                          description="Designing balanced ecosystems and rich soils that produce nutrient-dense foods while treating the environment and the animals with respect." />
                      </StyledContainerCard>
                  </Item>
                  </div>
                  
                  
                <Item>
                    <StyledContainerCard>
                        <Card
                                uri="/image/Natural-Farming-Green.png"
                                // uri="/image/NaturalFraming.jpg" 
                                />
                        </StyledContainerCard>
                  </Item>
                  
                  <div className="divTwoMobile">
                  <Item>
                    <StyledContainerCard>
                        <Card
                            
                            title="Eco-tourism"
                            description="Bringing everyone closer to nature, instilling love, healthy and sustainable relationships among people."
                                />
                      </StyledContainerCard>
                  </Item>
                  </div>

                  <Item>
                  <StyledContainerCard>
                      <Card
                              // uri="/image/Ecotourismjp.jpg" 
                              uri="/image/Ecotourism-Green.png"
                               />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card
                                // imgcontent="/image/Ecotourism-Green.png"
                                title="Eco-tourism"
                                description="Bringing everyone closer to nature, instilling love, healthy and sustainable relationships among people."
                                 />
                        </StyledContainerCard>
                  </Item>
                  <div className="divTwo">
                  <Item>
                    <StyledContainerCard>
                        <Card
                          //  imgcontent="/image/Air-Watet-Green.png"    
                           title="AirWater"
                           description="Capturing purified water from air, building water and irrigation systems for abundance and prosperity."
                                />
                      </StyledContainerCard>
                  </Item>
                  </div>
                  
                  
                <Item>
                    <StyledContainerCard>
                        <Card
                                uri="/image/Air-Watet-Green.png"
                                // uri="/image/airwater.jpg"
                                 />
                        </StyledContainerCard>
                  </Item>
                  <div className="divTwoMobile">
                  <Item>
                    <StyledContainerCard>
                    <Card   
                            
                            title="AirWater"
                            description="Capturing purified water from air, building water and irrigation systems for abundance and prosperity."
                                />
                      </StyledContainerCard>
                  </Item>
                  </div>
                  <Item>
                  <StyledContainerCard>
                      <Card
                              // uri="/image/seedbomb.jpg"
                              uri="/image/Seeds-Bomb-Green.png"
                              
                              />
                      </StyledContainerCard>
                  </Item>
                <Item>
                    <StyledContainerCard>
                        <Card
                                // imgcontent="/image/Seeds-Bomb-Green.png" 
                                title="Seed Bombing"
                                description="Combining tradition with ecological science and technology for enhanced productivity."
                                />
                      </StyledContainerCard>
                  </Item>
            </Grid>
        </ProjectStyles>
        
        
)
}
export default Projects;