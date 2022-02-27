import  styled from 'styled-components'
import { ArrowRight ,ArrowLeft } from '@material-ui/icons'
import {useState} from "react"
import CarouselWrapper from './CarouselWrapper'

const Container = styled.div`
 width : 100%;
 height : 100vh;
 display : flex;
 overflow : hidden;
 position : relative;
`

const Arrow = styled.div`
width: 50px;
height : 50px;
background-color : grey;
border-radius : 50%;
opacity :0.5;
display : flex;
align-items : center;
justify-content : center;
position : absolute;
top: 0px;
bottom : 0px;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin : auto;
cursor :pointer;
z-index : 2
`


const Wrapper  = styled.div`
display : flex;
height : 100%;
transform : translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`


const Carousel = () => {
    

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=>{
         if(direction === "left"){
           
            setSlideIndex(slideIndex > 0  ? slideIndex -1 : 1)

         }else if(direction === "right"){
            
            setSlideIndex(slideIndex > 0  ? slideIndex  -1 : 1)
         }
    }


    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                 <CarouselWrapper />
            </Wrapper>
            <Arrow direction="right"  onClick={()=>handleClick("right")} >
                 <ArrowRight  />
            </Arrow>
        </Container>
    )
}

export default Carousel
