import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Menu from "../components/Menu/Menu";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { mobile } from "../responsive";
import {useState , useEffect} from 'react'
import {addProduct} from '../redux/cartReducer'
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;


//It contains single product after viewing you can add it to card or go back

const Product = () => {

   //using location hook

   const location = useLocation()

   // we will get the id by the method (location.pathname.split("/")[2])
 
   const id = location.pathname.split("/")[2]

   //using useState hook

   const [product, setProduct] = useState({});



   //using the useEffect hook
   //using id as a dependence

   useEffect(() => {
     //making a function to getProduct from the backend 
     //route for getting single product http://localhost:5000/api/products/find/:id

     const getProduct = async()=>{
       try{
          const res = await publicRequest.get(`products/find/${id}`)
          //setting the product
          setProduct(res.data)
       }catch(err){
         console.log(err)
       }
     }

     //calling the function
     getProduct()
    
   }, [id]);
   

   ///using the useState hook for handling the quantity


   const [quantity , setQuantity] = useState(1)
   

   //handleQuantity function 
   /// type is inc or dec which we getting from where we using the function

   const handleQuantity = (type)=>{
        if(type === "dec"){
          //we are checking if quantity is greater than 1 than preform the function otherwise stop
         quantity > 1 && setQuantity(quantity - 1)
        }else{
          setQuantity(quantity + 1)
        }
   }

   ///making two more useState hook for chosing size and color
   const [color , setColor] = useState(null)

   const [size , setSize] = useState("M")


   /// using the useDispatch hook

   const dispatch = useDispatch()
   //handle Click That we have defined for button

   const handleClick = ()=>{

    //update the cart
    //we are getting the addProduct from the cartReducer and we are passing the product and quantity from // the useState that we have set earlire
  
//in this way we are sending all the product information and quantity , color ,size to the 
//reducers
  dispatch(addProduct({...product , quantity , color , size}))

   }
   

  return (
    <Container>
      <Menu />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* //mapping the product.color to get the color */}
              {
                product.color?.map((c)=>(
                  //setColor on FilterColor
                  <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                ))
              }
              
              
            </Filter>
            <Filter> 
              <FilterTitle>Size</FilterTitle>
              {/* // setting size on Filtersize select */}

              <FilterSize onChange={(e)=>setSize(e.target.value)}>

              {/* //mapping the product.size to get the size */}

              {
                product.size?.map((s)=>(
         
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))
              }
                
               
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
            
            {/* making a funciton on remove for decreasing the quantity */}
              <Remove onClick={()=>handleQuantity("dec")}/>
              
              {/* setting quantity using the useState hook */}
              <Amount>{quantity}</Amount>
              
            {/* making a funciton on add for increasing the quantity */}

              <Add onClick={()=>handleQuantity("inc")}/>

            </AmountContainer>

              {/* //making an onClick on button */}

            <Button onClick={handleClick}>ADD TO CART</Button>


          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;