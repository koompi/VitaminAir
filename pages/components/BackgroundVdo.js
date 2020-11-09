import styled from 'styled-components'
import styles from '../../styles/Home.module.css'
import VdoStyles from './styles/VdoStyles'
import {Telegram} from '@styled-icons/boxicons-logos'

export const TextStyle  = styled.div`
        position:absolute;
        top: 30%;
        left: 6%;
        z-index:1; 

        .vita{
            color:#0db14b;
            margin-bottom: 2%;
        }
        @media(max-width: 900px ){
            font-size: 10px;
                top: 60%;
                left: 4%;
                z-index: 1;
        }
        img{
            width: 30%;
            /* padding: 50px 0; */
            position: absolute;
            /* margin: -48px; */
            margin-top: -46.5%;
        }
        h1 {
            font-size: 3.5em ;
            font-weight: bold;
            margin-bottom: 2%;
            border-color: black;
            background-origin: padding-box;
            color: aliceblue;
            margin: 0;
            
            @media (max-width: 700px) {
                font-size: 0;
                
            }
        }
        
        p {
            color: aliceblue;
            font-size: 1.5em;
            font-weight: 2em;
            padding-right: 10rem;
            border-color: black;
            width: 25em;
            /* margin: 0; */
            @media (max-width: 700px) {
                font-size: 0;

            }
        }

`;
export const VdoTrackStyles = styled.div`
    background-color: black;
    opacity: 0.4;
    top:0;
    width: 100%;
    height: 99.6%;
    position: absolute;
    @media(max-width: 900px){
        top:27.4%;
        height: 72%;
    }
` ;

export const TelegramStyles = styled(Telegram)`
  max-width: 50px;
  color: green;
`
// const Dbutton = styled.div`
  
// `

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "green" : "white"};
  color: ${props => props.primary ? "white" : "green"};
  width: 200px;
  font-size: 1.2em;
  margin-right: 1rem;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  @media (max-width: 700px) {
               display: none;
                
    }
  @media(max-width: 480px ){
       margin: 2px;
       padding: 0.25em 10px;
    }
    
  
  
`;


const  BackgroundVideo = () =>{

    
    return (
        <VdoStyles> 
           <center><img src="/image/vitaminair-Green.png"/></center>
           <video autoPlay="autoplay" loop="loop" muted > 
                <source src="/video/index.mp4" type="video/mp4" />
                Your Brower dosen't support the video tag.
           </video>
           <VdoTrackStyles>
           </VdoTrackStyles>
           <TextStyle>
            <img src="/image/VA-White-V1.png" />
            <h1 className=" animate__bounceIn">In search for</h1>
            <h1 className=" animate__bounceIn vita">the Next Small Things.</h1>
            <p className="animate__bounceIn">Protect, preserve, and restore our rain forests for generations ahead.</p>
            <div>
                
                <Button as="a" href="#projects" primary>Discover</Button>

            </div>
           
           </TextStyle>
        </VdoStyles>
    )
   
}

export default BackgroundVideo;