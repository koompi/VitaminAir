import Router from 'next/router'
import Meta from './components/layouts/Meta'
import Header from './components/layouts/Header'
import Contact from './components/Contact';
import Team from './components/TeamMember';
import HeadAbout from './components/HeadAbout';
import styled from 'styled-components';


export const AboutStyle = styled.div`
    width: 100%;
    height: 100%;
`
export const BannerStyle = styled.div`
    height: 100%;
    width: 100%;
    padding:2% 20%;
    background-color: white;
    h1{
        color: black;
        padding-top: 20px ;
        padding-bottom: 20px;
        margin-bottom: 20px;
        /* margin: auto; */
        display: flex;
        justify-content: center;
    }
    h2 {
        color: black;
        font-size: 18px;
        /* padding-top: 2% ; */
        /* margin: auto; */
        /* padding:2% */

    }
    p {
        color: black;
        font-size: 18px;
        line-height: 2.5rem;
        margin: auto;
        /* padding: 1rem; */
        width: 80%
    }
    ul {
        font-size: 20px;
        color: white;
        line-height: 3vh;
    }
   
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

`
export const DivObj0 = styled.div`
    padding-left: 21%;
`
export const DivObj = styled.div`
`

export const TitleCenter = styled.div`
        h1 {
            padding-top: 2%;
            padding-bottom: 2%;
            font-weight:bold;
            font-size: 26px;
            margin: auto;
            align-items: center;
            position: relative;
            /* font-weight: 500; */
            text-transform: uppercase;
        }
`
const CoverAbout = styled.div`
    max-width: 100%;
    height: 600px;
    background-color: green;
    background-image: url("https://en.khmerpostasia.com/wp-content/uploads/2020/05/%E1%9F%A1%E1%9F%A0%E1%9F%A0.jpg");
    background-size: cover;
`
export default function Home() {
    return <>
        <AboutStyle>
            <Meta />      
           
            <CoverAbout>
            <Header />
            </CoverAbout>
            <TitleCenter>
                <center>
                   <h1>About Us</h1>
                </center>
            </TitleCenter> 
            <HeadAbout />
            <BannerStyle>
         
                <h1>Objectives</h1>
                <p>
                Sustainability, peace, love, harmony, sharing, growth, and abundance, with a focus on setting a good example for   generations into the future.
                </p>
                <p>- To live together in a collaborative community, encouraging each other and our surrounding communities to live in &nbsp; &nbsp;  harmony with each other and our natural environment.</p>
                <p>- To grow in size and recognition to influence others around the world by example, education, and research.</p>
                <p>- To facilitate workshops, adventure tours, and retreats that promote personal growth and sustainable lifestyles.</p>
                <p>- To offer re-education and employment opportunities for local families engaged in illegal forest activities.</p>
                <p>- To discover and create innovative business and employment opportunities for Cambodian youths.</p>
            </BannerStyle>
            <Team />
            <Contact />
        </AboutStyle>
    </>
}

