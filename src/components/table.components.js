import React from 'react';

const Table = ({MenuItems , onDelete ,onEdit}) => {
    const columns=[
    {path:'Name' , label:'Apple', content:item=> <td >{(item.value)}</td>},
    {path:'Action' , label:'Banana', content:item=><td >
         {<><i onClick={()=>onEdit(item.id)} className="bi bi-pencil-square"  />
        <i  onClick={()=>onDelete(item.id)} className="bi bi-trash3"/>
            </>}</td>  },
    ]
    return ( 
        <div className='col-log-2'>
           
             
         <table>
        <thead>
            <tr >
                {
                    columns.map(ele=>(
                        <>
                         <th>{ele.path}</th>
                         
                        </>
                       
                    ))
                }
                
            </tr>
        </thead>

        <tbody>
          {MenuItems.map((item) => (
            <tr  >
                {
                    
                    columns.map(column=>(
                        column.content(item)
                    ))
                    
                    
                }
               
             
            </tr>
            
          ))}
        </tbody>
      </table> 
      
      </div>
     );
}
 
export default Table;