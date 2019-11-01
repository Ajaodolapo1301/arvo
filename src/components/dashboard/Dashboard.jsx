import React, { Component } from 'react';
import Landing from '../layout/Landing';
import Header from '../layout/Header';
import Body from '../layout/Body';
import Footer from '../layout/Footer';
import Mid from '../layout/Mid';

class Dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div>
                  <div className="container">
                  <Header/>
                <Landing/>
                <Body/>
                </div>
                <Mid/>
                <Footer/>
            </div>
          );
    }
}
 
export default Dashboard;