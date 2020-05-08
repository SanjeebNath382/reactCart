import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {SearchItems, ClearSearch} from '../store/actions/actions'
import {connect} from 'react-redux'


 function NavBar(props) {
    const[query,setquery]=useState('');
    const[text,settext]=useState('');
    
    const changeHand= (e)=>{
        settext(e.target.value);
    }
    const clickHand=(e)=>{
        e.preventDefault();
        props.SearchItems(text);
        settext("");
        
       
    }
    
    return (
        <div style={{marginBottom:"20px"}}>
        <nav class="navbar navbar-expand-sm navbar-light bg-light .d-print ">
  <a class="navbar-brand" href="#">Kuch Bhi Le Lo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <div><Link to={'/cart'} class="btn">My Cart <span class="sr-only">(current)</span></Link></div>
      
        
      </li>
      <li class="nav-item active">
      <div><Link to={'/'} class="btn" onClick={()=>{props.ClearSearch()}}>Home <span class="sr-only">(current)</span></Link></div>
      
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input onChange={changeHand} value={text} class="form-control mr-sm-2" type="search" placeholder="Search by category or search products" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={clickHand}>Search</button>
    </form>
  </div>
</nav>
<span> 


            





</span>
            
        </div>
    )
}

const mapDispatchToProps= dispatch =>{
  return{
    SearchItems: (query) => dispatch(SearchItems(query)),
    ClearSearch: ()=> dispatch(ClearSearch())

  }
}

export default connect(null,mapDispatchToProps)(NavBar)


