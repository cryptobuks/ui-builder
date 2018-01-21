import React from 'react';
import DefaultRepository from './default-repository/defaultRepository';
import UserRepository from './user-repository/userRepository';

import './repository.css';
class Repository extends React.Component {

    render(){
        return(
            <div>
                <h2 className="repo-title">Repository</h2>
                <div className="small-box">
                    <h3 className="sub-title">Default Repository</h3>
                    <DefaultRepository />
                </div>
                <div className="small-box">
                    <h3 className="sub-title">User Repository</h3>
                    <UserRepository />
                </div>
            </div>
        )
    }

}
export default Repository;