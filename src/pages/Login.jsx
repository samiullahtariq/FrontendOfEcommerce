import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  padding : 20px;
  width : 25%;
  background-color : white;
`

const Title = styled.h1`
      font-size : 24px;
      font-weight : 300;
`


const Form = styled.form`
     display : flex;
     flex-direction : column;
`

const Input = styled.input`

   flex : 1;
   min-width : 40%;
   margin :  10px 0px ;
   padding : 10px;
`

const Button = styled.button`
     width : 40%;
     border : none;
     padding : 15px 20px;
     background-color : teal;
     cursor :pointer;
     color : white;
     margin-bottom : 10px;
    &:disabled :{
      color : gray;
      cursor : not-allowed
    }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Error = styled.span`
  color : red
`;

const Login = () => {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  //creating dispatch 
  const dispatch = useDispatch()
  //using use Selector hook
  const {isFetching , error} = useSelector(state => state.user)

  const handleClick =(e)=>{
    e.preventDefault()
    // the login function is comming from the redux folder
    // the username and password are going to login function as user that we created in redux folder 
    login(dispatch ,{username , password})
  }

    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Username' onChange ={(e)=>setUsername(e.target.value)} />
                <Input placeholder='password' type="password" onChange ={(e)=>setPassword(e.target.value)}/>
                
                {/* It means login button is disabled if the data is fetching */}
                <Button onClick={handleClick}  disabled={isFetching}>LOGIN</Button>

               {error &&  <Error> Something went wrong...</Error>}
                  
                

                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
