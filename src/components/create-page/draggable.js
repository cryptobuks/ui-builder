import React from 'react';

import './createPage.css';

class Draggable extends React.Component {

    render(){
        return(
            <div>
                
                <div className="canvas-box">
                    <p className="lightGrey center-text">drop components here</p>
                    <canvas id="myCanvas" width="200" height="100"></canvas>
                </div>
                
                
                
            </div>
        )
    }
};

export default Draggable;