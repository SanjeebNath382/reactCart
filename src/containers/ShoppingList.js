import Data from '../Data'
import ShoppingItems from './ShoppingItems'

import React from 'react'

export default function ShoppingList() {
    return (
        <div>
       {
        Data.map(item=> {
          return <ShoppingItems item={item}/>
        })
       } 
            
        </div>
    )
}
