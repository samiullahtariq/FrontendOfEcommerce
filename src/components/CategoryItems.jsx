import styled from "styled-components"
import {Link} from 'react-router-dom'


const Container = styled.div`
   flex : 1 ;
   margin : 3px;
   height : 70vh;
   position : relative;
`

const Button = styled.button`
  border : none;
  padding : 10px;
  background-color : white;
  font-color : gray;
  cursor : pointer;
  font-weight : 600;
`

const Image = styled.img`
width : 100%;
height : 100%;
object-fit : cover;
`

const Info = styled.div`
  position : absolute;
  top : 0px;
  left : 0px;
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`

const Title = styled.h1`
 color : white;
 margin-bottom : 20px;
`

//we are getting the value from the categories
//it will link to /products/:women

const CategoryItems = ({value}) => {
    return (
        <Container>
         <Link to={`/products/${value.cat}`}>
            <Image src={value.img} />
            <Info>
                <Title>{value.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItems
