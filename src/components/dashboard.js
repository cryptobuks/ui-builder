import React from 'react';
import CreatePage from './create-page/createPage';
import Repository from './repository/repository';
import './dashboard.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col> <h1 className="title">UI Builder - for Rapid Dashboarding</h1> </Col>
                    </Row>
                    <Row>
                        <Col sm={7}> <div className="create-page-container box">
                            <CreatePage />
                        </div> </Col>
                        <Col sm={5}><div className="repository-container box"> 
                            <Repository />
                        </div> </Col>
                    </Row>
                    <Row className="footer">
                        <Col><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span>This page is under construction </span></Col>
                    </Row>
                </Grid>
                
            </div>
        )
    }

}
export default Dashboard;