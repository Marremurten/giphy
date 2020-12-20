import React, { Component } from 'react';


class Gif extends Component {
    
     clickHandle =()=> {
       if (this.props.selectGif) {
        this.props.selectGif(this.props.id)
       }
    }
 
    
   render(){
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
        <img src={src} className="gif" alt="hej" onClick = {this.clickHandle} />
    )
   }
}
export default Gif