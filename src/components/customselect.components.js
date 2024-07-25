import React, { Component } from "react";
import Table from "./table.components";
import TextEditor from "./texteditor.components";
import EditableText from "./texteditor.components";
class CustomSelect extends Component {
  state = {
    MenuItems: [
      {id:"1", value: "apple", label: "Apple"  },
      {id:"2", value: "banana", label: "Banana"  },
      {id:"3", value: "cherry", label: "Cherry"},
      {id:"4", value: "date", label: "Date", group: "Fruits"},
      {id:"5", value: "fig", label: "Fig", group: "Fruits" },
      {id:"6", value: "grape", label: "Grape", group: "Fruits"},
      {id:"7", value: "carrot", label: "Carrot", group: "Vegetables" },
      {id:"8", value: "broccoli", label: "Broccoli", group: "Vegetables" },
      {id:"9", value: "spinach", label: "Spinach", group: "Vegetables" },
    ],
    tableheader: ["Name", "Action"],
    select:false,
    placeholder:"Select...",
    Add:false,
    inputData:"",
    cursor:true,
    isEdit:null,
    searchItem:"",
    edit:false,
    text:"",
    toggleSubmit:false,
    isEditItem:null
    
  };

//  handleupdate = (id ,text) =>{
//   let edit=this.state.edit;
//   const MenuItems=this.state.MenuItems;
//   const UpdateText=MenuItems.map(ele=>{
//     if(ele.id==id && edit===true){
//       const allinput={
//         id:id,
//         value:text
//       }
//       MenuItems.push(allinput)
//  }})
  
//  }


  handleSearch = (searchItem) =>{
   let MenuItems = this.state.MenuItems;
    const SearchItems=MenuItems.filter(elem=>(
         elem.value.includes(searchItem)
      
    ))
    
     this.setState({MenuItems:SearchItems})
   
    }

    handledit=(id)=>{
      let edit=this.state.edit;
      const MenuItems=this.state.MenuItems
     const update=MenuItems.map(ele=>{
      if(ele.id===id){
       edit=true;
        this.setState({edit:edit
        })
        // return {...ele , value:(this.state.edit ? <TextEditor /> :null)}
       
       
        
      }
     })
    
    }

    handleChange = (event)=>{
     this.setState({text:event.target.value}) 
    }
  
   

  handleSubmit = () => {
    let inputData = this.state.inputData;
    let MenuItems = this.state.MenuItems;
    const cursor = this.state.cursor;
    const isEdit = this.state.isEdit;
    
   

    if (!inputData ) alert("fill the column");
    else if (!cursor && inputData ) {
      this.setState(
        MenuItems.map((elem) => {
          if (elem.id === isEdit) {
            return {
              ...elem,
              value: inputData,
             
            };
          }
          return elem;
        })
      );
      this.setState({ cursor: true });
      this.setState({ MenuItems:"" });
      this.setState({ isEdit: null });
    } 
    else {
      const allinput = {
        id: MenuItems.length + 1,
        value: inputData,
        
      };

      MenuItems.push(allinput);

      this.setState({ inputData: "" });
      this.setState({Add:false})
      
    }
  };


 deletItem = (index) => {
   const MenuItems=this.state.MenuItems;
    const updatedItems = MenuItems.filter((elem) => {
      return index !== elem.id;
    });
    this.setState({MenuItems:updatedItems})
    ;
  };

  handleAdd=()=>{
    let add=this.state.Add;
    if(add===true){
      add=false;
    }
    else if(add===false){
      add=true;
    }
    this.setState({Add:add});
  }


  handleSelect=(id)=>{
    let MenuItems=this.state.MenuItems
    MenuItems.filter(elem=>{
      if(elem.id===id && elem.select===false)return this.setState({select:elem.select=true})
      else return this.setState ({select:elem.select=false})
    })  
    
   
  }


 
  render() {
   console.log(this.state.edit)
    return (

      <div>
        
         {/* <div>
        {this.state.edit ? (<><textarea
        value={this.state.text}
        onChange={(e)=>this.setState({text:e.target.value})}
        placeholder="Enter text here..."
        rows="3"
        cols="25"
      />
      
      <button onClick={()=>this.handleupdate(this.state.text)} >Submit</button></>):null}
        
      </div>   */}
       
      
        <input
        placeholder="Search ..."
        value={this.state.searchItem}
        onChange={(e)=>this.setState({searchItem:e.target.value})}
        />

        <button onClick={()=>this.handleSearch(this.state.searchItem)}>Search</button>

        <div>
        <button onClick={()=>this.handleAdd()}>Add<i onClick={()=>this.handleAdd()} class="bi bi-plus"/></button>
        </div>

        <div>
          {
          this.state.Add ? (<><textarea value={this.state.inputData}
           onChange={(e)=>this.setState({inputData:e.target.value})}/> 
           <button onClick={()=>this.handleSubmit()}>Submit</button></> ):null
          }      
        </div>
        
        <Table 
      
         MenuItems={this.state.MenuItems}
         onDelete={this.deletItem}
        //  onSelect={this.handleSelect}
        //  select={this.state.select}
          onEdit={this.handledit}
          onhandleEdit={this.handleEdit}
         />
      </div>
    );
  }
}

export default CustomSelect;
