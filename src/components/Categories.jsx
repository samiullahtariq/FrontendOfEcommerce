import styled from "styled-components"
import { categories } from "../data"
import CategoryItems from './CategoryItems'


const Container = styled.div`
 display : flex;
 padding :20px;
 justify-content : space-between;

`
//we are getting categories from our data file
//it contains three cards with different categories

const Categories = () => {
    return (
        <Container>
            {
                categories.map((value)=>{
                    return(
                        <CategoryItems value={value} key={value.id}/>
                    )
                })
            }
        </Container>
    )
}

export default Categories
