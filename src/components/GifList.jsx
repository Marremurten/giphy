import React from 'react';
import Gif from './Gif'

const Giflist = (props) => {
    
    return (
        <div className="selected-gif gif" >
            {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
        </div>
    )
}
export default Giflist