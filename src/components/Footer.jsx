import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"




const Container = styled.div`
 display : flex;
`


const Left  = styled.div`
 flex : 1;
 display : flex;
 flex-direction : column;
 padding :20px;
`;
const SocialContainer = styled.div`
display : flex;

`

const SocialIcon = styled.div`
   width : 40px;
   height : 40px;
   border-radius: 50%;
   color : white;
   background-color : #${props => props.color};
   margin-right : 20px;
   cursor :pointer;
   display : flex;
   align-items: center;
   justify-content : center;
`


const Right = styled.div`
flex : 1  ;
padding : 20px;
`

const Center = styled.div`
  flex : 1;
  padding : 20px;
`
const Desc = styled.p`
  margin: 20px 0px;
  flex :1;
`
const Logo = styled.h1`

`


const Title = styled.h3`
 margin-bottom : 30px;
`
const List = styled.ul`
 margin : 0px;
 padding : 0px;
 list-style :none;
 display : flex;
 flex-wrap : wrap;
 
`

const ListItem = styled.li`
 width : 50%;
 margin-bottom : 10px; 
`



const ContactItem = styled.div`
  margin-bottom : 20px;
  display : flex;
  align-items : center;
`

const Payment  = styled.img`
 width : 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>There are many sit amet consectetur adipisicing elit. Odit amet, assumenda iste aliquam est perferendis sed cupiditate corporis incidunt ullam maiores vel repudiandae dolorum ipsam sequi facere nihil provident. Obcaecati!</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999" >
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon  color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon   color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon   color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>USEFUL LINKS</Title>
                 <List>
                     <ListItem>Home</ListItem>
                     <ListItem>Cart</ListItem>
                     <ListItem>Man Fashion</ListItem>
                     <ListItem>Woman Fashion</ListItem>
                     <ListItem>Accessories</ListItem>
                     <ListItem>My Account</ListItem>
                     <ListItem>Order Tracking</ListItem>
                     <ListItem>WishList</ListItem>
                     <ListItem>Terms</ListItem>
                 </List>
            </Center>
            <Right>
                 <Title>CONTACT</Title>
                 <ContactItem><Room  style={{marginRight : "10px"}} />  GULBAHAR COLONY STREET NO 1. LAHORE CANTT</ContactItem>
                 <ContactItem><Phone style={{marginRight : "10px"}}/> 0311-4816018</ContactItem>
                 <ContactItem>
                   <MailOutline style={{marginRight : "10px"}}/>
                     contact@sami.dev
                 </ContactItem>
                 <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
