import {Navbar , Nav , Form ,FormControl} from 'react-bootstrap'
import { Badge } from "@material-ui/core";
import { LinkContainer} from 'react-router-bootstrap'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./Menu.css"
import Announcment from '../Announcment';
import { useSelector } from 'react-redux';

const Menu = ()=>{

 //As we only need quantity that why we getting only quantity from the useSelector
  const quantity = useSelector(state => state.cart.quantity)


    return(

       
      <>
         <Announcment/>

        <Navbar bg="light" expand="lg">


        <div className="container-fluid"  style={{padding : "0px 20px"}}>


        <Nav className="me-auto cursor">
              <LinkContainer to="/">
              <Nav.Link >EN</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
              <Nav.Link >

              {/* Search field*/}

              <Form className="d-flex" style={{width : "140px" , height : "25px"}}>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                
                {/* material ui icon */}
                <Search className="cursor"/>

              </Form>   
              </Nav.Link>
              </LinkContainer>
            </Nav>

            {/* Brand Name  */}
         <LinkContainer to="/" className="text-center fontsize cursor" >
         <Navbar.Brand >KILGI TRADERS</Navbar.Brand>
         </LinkContainer> 
        


         
            <Nav className="ms-auto cursor">

         
              <Nav.Link style={{fontWeight : "bold"}} >
               REGISTER
              </Nav.Link>  

              <Nav.Link style={{fontWeight : "bold"}} >
               LOGIN
              </Nav.Link> 
              
               {/* //urt to go to cart page http://localhost:3000/cart            */}

              <LinkContainer to="/cart">

              <Nav.Link >
                  {/* material icon */}
                  {/* //The quantity is what we are getting from the useSelector hook  */}

                  <Badge badgeContent={quantity} color="primary" className="cursor">

                      <ShoppingCartOutlined />

                  </Badge>

              </Nav.Link>
              </LinkContainer>
            </Nav>
        </div>
      </Navbar>
      </>
    )
}


export default Menu