import React, { Component } from 'react';

class TextEditor extends Component {
  
  render() { 
    const {Edit}=this.props
    console.log(Edit)
    return (
      <div>
     <> <textarea
       
        placeholder="Enter text here..."
        rows="3"
        cols="25"
      />
      <button  >Sumit</button></>
      
      <div>
        <h3>Preview:</h3>
        <p></p>
      </div>
    </div>
    );
  }
}
 
export default TextEditor;