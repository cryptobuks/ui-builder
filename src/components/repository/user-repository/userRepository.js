import React from 'react';
// var FontAwesome = require('react-fontawesome');

class UserRepository extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <p className="lightGrey">user components here</p>
                    <ul className="lightGrey">
                        <li>component 1</li>
                        <li>component 2</li>
                        <li>component 3</li>
                    </ul>
                </div>
                <div className="center">
                    <p>Upload from D3</p>
                    <i className="fa fa-upload fa-4x" aria-hidden="true"></i>
                    {/* <FontAwesome
                        className='fa fa-spinner fa-spin'
                        name='fa fa-upload'
                        size='2x'
                        spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> */}
                    
                </div>
            </div>
        )
    }
};

export default UserRepository;