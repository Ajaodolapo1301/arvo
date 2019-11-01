import React, { Component } from 'react';


class Landing extends Component {
  state = {  }
  render() { 
    return ( 
      <div >
        	<div className="section-2-container center">
			<div className="sub-section-2-container">
				<div className="loans-terms-card">
					<div>
						<i className="fa fa-money icon-section-2"></i>
					</div>
					<div className="loan-title">
						<span>Quick Loans</span>
					</div>
					<div className="loans-terms-card-details">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
				<div className="loans-terms-card">
					<div>
						<i className="fa fa-car icon-section-2"></i>
					</div>
					<div className="loan-title">
						<span>No Collaterals</span>
					</div>
					<div className="loans-terms-card-details">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt
					</div>
				</div>
				<div className="loans-terms-card">
					<div>
						<i className="fa fa-drupal icon-section-2"></i>
					</div>
					<div className="loan-title">
						<span>Guanteed Lowest Interest Rates</span>
					</div>
					<div className="loans-terms-card-details">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut l
					</div>
				</div>
			</div>
		</div>

    <div className="section-3-container center">
			<div className="section-3-wrapper">
				<div className="section-3-invest-card">
					<div className="section-3-text-1">Invest With ARVO Finance</div>
					<div className="section-3-text-2">
						The Best way to invest your
						money and get quick acess to loans.
					</div>
				</div>
			</div>
		</div>
    
		<div className="mcc">
			<div className="section-4-container center">
				<div className="section-4-wrapper">
					<div className="box">
						<div className="thin-border-line"></div>
						<div className="half-curved-border b-right">Arvo Loans</div>
						<div className="half-curved-border b-left">P2P Investment</div>
						<div className="thin-border-line"></div>
					</div>
				</div>
			</div>
		</div>
      </div>
     );
  }
}
 
export default Landing;