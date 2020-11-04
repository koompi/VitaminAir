import styled from 'styled-components';
const DivVideo  = styled.div`
    position:relative;
    video {
        width: 100%;
        position:relative;
        z-index:0;
    }
    center{
            display: none;
    }

    @media(max-width: 900px){
        center{
        display: block;
       
        
        img{
            /* padding:4%; */
            margin: 2%;
            padding-left:2%;
            width:30%;
        }
    }

    }
    
`
export default DivVideo;