import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import image from '..//static/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg'
import {connect} from 'react-redux'
import NavBar from './NavBar'
import { AddToCart } from '../store/actions/actions'

 class SearchResults extends Component {
    onClickHand=(id,name,price)=>{
        if(this.props.addedIds.includes(id)){
            alert(`${name} has already been added to cart`)
        }
        else{
           this.props.AddToCart(id,name,price)
        }

   }
    render() {
        return (
            <>
            <div style={{padding:'5%'}}>
                {
                    this.props.searched.map(item=>{
                        return(
                            <div  className="card-columns" id={item.id} >
                               <div className="card" style={{width: "18rem"}}>
                                  <img src={image} className="card-img-top" alt="Photo of a girl"></img>
                                   <div className="card-body">
                                       <h3 className="card-title" >{item.name}</h3>
                                       <h4 className="card-title">Price:{item.price}</h4>
                                       <h6 className="card-title">Company:{item.company}</h6>
                                       <button className="btn btn-primary" ref={btnReview  => {this.btnReview = btnReview;}} onClick={()=>{this.onClickHand(item.id,item.name,item.price)}}>Add To cart </button>
        
                                   </div>
                              </div>
                           </div>
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
    searched: state.searchedList,
    addedIds: state.addedIds
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        AddToCart: (id,name,price) => dispatch(AddToCart(id,name,price))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)


