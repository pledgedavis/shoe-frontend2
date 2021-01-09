import React, { state,useState,useEffect } from 'react';
import yeezy from '../images/yeezy.jpg';
import yeezy2 from '../images/yeezy2.jpg';
import yeezy3 from '../images/yeezy3.jpg';
import yeezy4 from '../images/yeezy4.jpg';
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction' 
import { fetchAllShoes } from "../actions/shoesAction";



const  Home = (props) =>{
  // http://localhost:3001/shoes
const [products, setProducts]=useState([])

const getProducts = (route)=>{
  fetch(route)
  .then(res=>res.json())
  .then(data=> setProducts(data))
  .catch(err=>console.log(err))
}


    useEffect(()=>{
      getProducts('/shoes')
    }, [])

    console.log(products)

    console.log(fetchAllShoes())
    return (
<div className="container">
  
        {products.map(item => {
          return <div className="image">
               <br></br>
                <h3>{item.name}</h3>
                <br></br>
                <h4>{item.size}</h4>
                <h4>{item.price}</h4>
                <br></br>
                <a onClick={() => props.addCart(item.id)} className="addToCart cart1" href="#">  Add to cart </a>
          </div>
        })}



      <div className="image" >
      
        <img src={yeezy} alt="Yeezy"/>
      <h3> first Yeezy </h3>
      <h3>$330</h3>
      <a onClick={() => props.addCart("yeezy")} className="addToCart cart1" href="#">  Add to cart </a>
     </div>

   <div className="image" >
   <img src={yeezy2} alt="Yeezy2"/>
   <h3> second Yeezy </h3>
   <h3>$330</h3>
   <a onClick={() => props.addCart("yeezy2")} className="addToCart cart2" href="#">  Add to cart </a>
   </div>

   <div className="image" >
   <img src={yeezy3} alt="Yeezy3"/>
   <h3> third Yeezy </h3>
   <h3>$390</h3>
   <a onClick={() => props.addCart("yeezy3")} className="addToCart cart3" href="#">  Add to cart </a>
   </div>

</div>
    )

}



export default connect(null, { addCart })(Home);