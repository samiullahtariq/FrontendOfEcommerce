import { useLocation } from "react-router-dom"





const Success = ()=>{

    //using location hook
    const location = useLocation()


    return(
        <>
           <h1>Success</h1>
        </>
    )
}

export default Success