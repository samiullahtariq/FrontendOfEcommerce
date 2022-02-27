
import styled from "styled-components"
import { sliderItems } from "../data"


const Slider = styled.div`
width : 100vw;
height : 100vh;
display : flex;
align-items : center;
background-color : ${props => props.bg};
overflow : hidden;
`

const ImgContainer = styled.div`
height : 100%;
flex : 1;
`
const Img = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
flex : 1;
padding : 50px;
`
const Title = styled.h1`
  font-size : 70px;
`
const Description = styled.p`
  font-weight : 500px;
  margin : 50px 0px;
  letter-spacing : 3px;
  font-size : 20px;
`
const Button = styled.button`
padding : 10px;
font-size : 20px;
background-color : transparent;
cursor : pointer;
`

const CarouselWrapper = () => {
    return (
            <>
              {
                  sliderItems.map((value)=>{
                      return(
                        <Slider key={value.id} bg={value.bg}>
                          <ImgContainer>
                              <Img src={value.img} alt={value.title} />
                          </ImgContainer>
                         <InfoContainer>
                           <Title>{value.title}</Title>
                           <Description>{value.desc}</Description>
                           <Button>SHOP NOW</Button>
                         </InfoContainer>
                        </Slider>
                      )
                  })
              }
            </>
 
    )
}

export default CarouselWrapper
