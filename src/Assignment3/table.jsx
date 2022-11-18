import React from 'react'
import JsonData from './data.json'
 function JsonDataDisplay(){
  
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.quantity}</td>
                    <td>{info.price}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
          
            <table class="table table-striped" border="1">
                <thead>
          
                    <tr>
                    <th>ID</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                    
                    
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;