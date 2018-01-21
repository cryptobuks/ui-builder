import React from 'react';
import Draggable from './draggable';

import './createPage.css';

class CreatePage extends React.Component {

    render(){
        return(
            <div>
                <h2 className="create-page-title">Create your page</h2>
                <Draggable />
            </div>
        )
    }
};

export default CreatePage;
