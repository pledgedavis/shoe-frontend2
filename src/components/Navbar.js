import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

const  Navbar = (props) =>{
   console.log(props);

     useEffect(() => {
      getNumbers();
     }, [])

    return (

      <header>
       <div className="overlay">
       <nav>
         <h2>Shoe Club</h2>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="#">About</Link></li>
           <li className="cart"><Link to="/cart"><ion-icon name="bag-remove-outline"></ion-icon>
               Cart<span>{props.cartProps.cartNumbers}</span></Link></li>
         </ul>
       </nav>
       </div>
      </header>

   
    )

}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar)