import React, { useState } from 'react'
import {connect} from 'react-redux'
import {DelCartItem} from '../store/actions/actions'
import {Link} from 'react-router-dom'

 function MyCart(props) {
     const [quantity, setquantity] = useState(1)
     const delHandler=(id)=>{
         props.DelCartItem(id);


     }
     
    
    return (
        <div className="ml4 ">
        <Link to={'/'} class="btn btn-success">Back</Link>
        <h1 style={{marginLeft:"50%"}}>My Cart</h1>

        {
           props.addedItems.map(item=>{
               return(
                   <div className="card card-body mb-3">
                   <div className="row">
                   <div className="col-md-3" id={item.id}>
                   <h3>Name: {item.name}</h3>
                   </div>
                   <div className="col-md-3">
                   <h4  className="ml-2">Price: {item.price} <button className="btn btn-danger" onClick={()=>{delHandler(item.id)}}>Delete</button></h4>
                  
                    
                   

                   </div>
                  
                   </div>
                   </div>
               )
              
           })
           
        }
        <div >
        {
            props.total?<h2 className="ml-2">Total: {props.total}</h2>:<h3>You have not added anything to cart</h3>
        }

        </div>
        
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        addedItems:state.addedItems,
    total:state.total,
    toatalItems:state.totalItems,
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        DelCartItem: (id) => dispatch(DelCartItem(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCart)

