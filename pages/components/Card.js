import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h2`
  padding-bottom: 2%;
  font-weight:bold;
  font-size: 26px;
  margin: auto;
  align-items: center;
  position: relative;
  /* font-weight: 500; */
  text-transform: uppercase;
`

const Description = styled.p`

  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.57;
  @media(max-width: 900px){
    margin: 0;
  }


`

const StyledPhoto = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`
const ContentImg = styled.img`
    max-height: 60px;
    max-width: 60px;
    display: grid;
    margin-left: 0 !important;
`

const Card = ({ title,description, uri, imgcontent}) => (
    <div>
      <ContentImg  src={imgcontent} />
      <StyledPhoto src={uri} />
      <Title>{title}</Title> 
      <Description>
      {description}
      </Description>
     
    </div>
  )

export default Card