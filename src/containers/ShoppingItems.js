import React, { Component } from 'react'
import {connect} from 'react-redux'
import {AddToCart} from '../store/actions/actions'
import image from '..//static/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg'
import NavBar from './NavBar'
import Data from '../Data'
import {Link} from 'react-router-dom'
import SearchResults from './SearchResults'



 
 class ShoppingItems1 extends Component {
    
     state={
         id:0,
         name:"",
         price:0,
        
     }
     onClickHand=(id,name,price)=>{
       if(this.props.addedIds.includes(id)){
           alert(`${name} has already been added to cart`)
           
       }
       else{
        this.props.AddToCart(id,name,price)
       }
       
        
        
       
        

     }
     datafetch=()=>{
         Data.map(item=>{
             this.setState({
                 ...this.state,
                 id:item.id,
                 name: item.name,
                 price: item.price

             })
         })
         
         
     }
     componentDidMount() {
         this.datafetch();
     }
    render() {
        return (
            <>
             <NavBar />
           
            
<div className="card-columns">
   {
   
       
      
      (this.props.searched&&this.props.searched.length)?<SearchResults/>: Data.map(item=>{

           
                  
   
return(
    <>
    
   
 
     <div   id={item.id}>
     
   

<div className="card" style={{width: "18rem"}}>
<img src={image} className="card-img-top" alt="of a girl"></img>

<div className="card-body">
<h3 className="card-title" >{item.name}</h3>
<h4 className="card-title">Price:{item.price}</h4>
<h6 className="card-title">Company:{item.company}</h6>
<button className="btn btn-primary"  onClick={()=>{this.onClickHand(item.id,item.name,item.price)}}>Add To cart </button>

</div>
</div>


</div>
</> 

)
})
   }
   </div>
   
                
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        addedItems:state.addedItems,
    total:state.total,
    toatalItems:state.totalItems,
    searched: state.searchedList,
    addedIds:state.addedIds
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        AddToCart: (id,name,price) => dispatch(AddToCart(id,name,price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItems1)



