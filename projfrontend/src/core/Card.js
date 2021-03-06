import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import {Redirect} from "react-router-dom";
import { addItemToCart,removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";


const Card = (
    {
        product,
        addtoCart=true,
        removeFromCart=false,
        reload=undefined,
        setReload=f=>f
    }
    

) => {
  
    const [redirect, setRedirect]=useState(false)
    const cardTitle=product? product.name:"A  photo from pexels"
    const cardDescription=product? product.description:"default descriptipn"
    const cardPrice=product? product.price:"default price"

    const addToCart=()=>{

        if(isAuthenticated()){
          addItemToCart(product,()=>setRedirect(true))
            console.log("Added to cart");
        }
        else{
            console.log("login pleae!");
        }

    };

    const getAredirected =redirect=>{
        if(redirect){
            return <Redirect to="/cart"/>
        }
    };

    const showAddToCart=(addToCart)=>{

        return(

            addtoCart && (

                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        );


    };


    const showRemoveFromCart=removeFromCart=>{
        return(
            removeFromCart && (
<button
                onClick={() => {
                    removeItemFromCart(product.id);
                    setReload(!reload)
                    console.log("product removed from cart");
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        );
    };








    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          {getAredirected(redirect)}
          <ImageHelper product={product}/>
          </div>
          <p className="lead bg-success font-weight-normal text-wrap">
           {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
     
    );
  };

  export default Card;