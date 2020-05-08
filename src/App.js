import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Mycart from './containers/MyCart'
import './App.css';
import ShoppingItems from './containers/ShoppingItems'


function App() {
  let k=1;
  return (
    <BrowserRouter>
    <Route exact path='/cart' component={Mycart} onClick={k=0}/ >
    <Route exact path='/' component={ShoppingItems} onClick={k=0}/ >
   
    
   
    
    
     {/* {
       
        Data.map(item=> {
          return <ShoppingItems item={item}/>
        })
       }  */}
       
        
       
    </BrowserRouter>
  );
}

export default App;
