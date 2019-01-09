
import React from 'react';

import { Link, Route } from 'react-router-dom';
// import Profile from '../../Forms/Well/Profile';
// import Visit from '../../Forms/Well/Visit';
// import VisitWithoutProfile from '../../Forms/Well/VisitWithoutProfile';
// import Home from '../../Home';
// import Violation from '../../Forms/Well/Violation';

class Content extends React.Component {
    constructor(props){
        super();
        
    }
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    {/* <h3 className="box-title">Monthly Recap Report</h3> */}
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-10">
                                           
                                                {/* <strong>This is text</strong> */}
                                                    {/* <Route path="/Home" component={Home} />
                                                    <Route path="/Profile" component={Profile} />
                                                    <Route path="/Visit" component={Visit} />
                                                    <Route path="/VisitWithoutProfile" component={VisitWithoutProfile} />
                                                    <Route path="/Violation" component={Violation} /> */}
               
                                           
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        )
    }
}
export default Content