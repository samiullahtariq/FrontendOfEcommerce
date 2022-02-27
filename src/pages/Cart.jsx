import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useState ,useEffect } from "react";
import Menu from "../components/Menu/Menu";
import { mobile } from "../responsive";
import {userRequest} from '../requestMethods'
//from STripeCheckout we will be able to create beautiful checkout method
import StripeCheckout from 'react-stripe-checkout'
import {useNavigate } from "react-router-dom";


  //This is the public key for strip that we have set in our env file
const KEY = process.env.REACT_APP_STRIPE


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {


  //using useSelector to get the cart value

  const cart = useSelector(state => state.cart)

  //for setting token we using the useSTate
  //when we pay the amount the stripecomponet gives us the stripeToken

  const [stripeToken , setStripeToken] = useState(null)

  const onToken = (token)=>{
      setStripeToken(token)
  }

  console.log(stripeToken)
  //using useEffect
  //our depedence will be stripeToken

  //using usenavigate hook

  const navigate = useNavigate()

  useEffect(() => {

    const makeRequest = async()=>{
      try{
        //we getting userRequest form request Methods 
        //full backend route is http://localhost:5000/api/checkout/payment
          const res = await userRequest.post("/checkout/payment" ,{
            // this id is which we getting from stripeToken
            tokenId : stripeToken.id,
            amount : cart.total*100 
          })

          //moving to success page as well as passing data to it
          navigate("/success" , {data:res.data})


      }catch(err){
        console.log(err)
      }
    }

    //calling the function we created if stripeToken Exists and cart value is greater than i dollar

  // stripeToken && cart.total >=1 && makeRequest()

   stripeToken && makeRequest()
  
  }, [stripeToken , cart.total , navigate]);
  

  return (
    <Container>
      <Menu />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>

          {/* ///cart.product contains all the information of product in cart */}

          {cart.products.map((product)=>(

            <Product key={product._id}>

              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price* product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>

          ))
            }


            <Hr />
            

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              {/* //we are getting cart from useDisptach hook */}
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>

              <SummaryItemPrice>$ 5.90</SummaryItemPrice>

            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>

              <SummaryItemPrice>$ -5.90</SummaryItemPrice>

            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>

              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>

            </SummaryItem>

            {/* //We using StripeCheckout component for checkout method */}
            <StripeCheckout
            name="Samiullah Butt"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            //Stripe works with cents if you write 100 it means 1 dollar thats why we multiplying it with 100
            amount={cart.total*100}
              //We have defined token on top
              //in the cart
              // we get token after checking out
            token={onToken}
            //KEY IS WHAT WE HAVE DEFINED ON TOP
            stripeKey={KEY}

            >

            <Button>CHECKOUT NOW</Button>

            </StripeCheckout>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;