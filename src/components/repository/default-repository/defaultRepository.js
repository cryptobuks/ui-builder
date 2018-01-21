import React from 'react';


class DefaultRepository extends React.Component {

    render(){
        return(
            <div>
                <p className="lightGrey">default components here</p>
                <ul className="lightGrey">
                    <li>textfields - <i className="fa fa-commenting-o" aria-hidden="true"></i> </li>
                    <li>buttons - <i className="fa fa-battery-empty" aria-hidden="true"></i></li>
                    <li>charts - <i className="fa fa-line-chart" aria-hidden="true"></i></li>
                </ul>
            </div>
        )
    }
};

export default DefaultRepository;