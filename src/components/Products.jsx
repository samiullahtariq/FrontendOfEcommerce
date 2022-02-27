import { useState  , useEffect} from "react";
import styled from "styled-components";
import { categories, popularProducts } from "../data";
import axios from 'axios'
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

/// getting props fomr ProductList page 

const Products = ({cat , filters , sort}) => {

  //creating useState hook for products and Filtered products

  const [products , setProducts] = useState([])

  const [filteredProducts , setFilteredProducts] = useState([])

  //using the useEffect hook
// when the category change it will run 
  useEffect(() => {

    // creating a getProducts function

    const getProducts  = async()=>{
      try{

        //getting products from the backend full route is http://localhost:5000/api/products
        // the ?category=${cat} is we have defind in backend as query if there is category show 
        // data of the category otherwise give all products
        const res= await axios.get(cat ? `/api/products?category=${cat}` : "/api/products")
       
         // It will set the products that is in our db

        setProducts(res.data)


      }catch(err){
        console.log(err)
      }   
    }

    //calling the getProducts function
    getProducts()
    
  }, [cat]);


  /// using another useEffect hook in this our dependenci will be cat, products , filters
  // we are getting the products from useSTate hook

  useEffect(() => {
  
    // if there is cat then we will setFilteredProducts 
    // products are the products which we are getting from useState hook

    cat && setFilteredProducts(
      // filters represents the fitler which we getting form props
      //for every item if it contains the value we will filter it
      products.filter(item => Object.entries(filters).every(([key , value])=>
        item[key].includes(value)
      ))
    )

  }, [cat , filters , products]);

  //using useEffect while using sort as a dependence
  // we are getting sort from the props
  //the pre contains all the previous state in setFilteredProducts like color size 
  //we are using sort filter to sort the products

  useEffect(() => {
   if(sort === "newest"){
     setFilteredProducts(pre=>
      [...pre].sort((a,b)=>a.createdAt - b.createdAt))
   }else if (sort === "asc"){
    setFilteredProducts(pre=>
     [...pre].sort((a,b)=>a.price - b.price))
  }else{
    setFilteredProducts(pre=>
      [...pre].sort((a,b)=>b.price - a.price))
  }


  }, [sort]);
  
  
  

  return (
    //if there is cat then we will use filteredproducts otherwise we will only show the products the we //are getting from backend
    //by using the slice we will only display maximun eight items on home page
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.slice(0 , 8).map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;