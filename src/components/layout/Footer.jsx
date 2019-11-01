import React, { Component, Fragment } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="col-12">
		<div className="footer">
			<div className="footer-start">
				<div><img src="library/library/Resources/api/image/splashScreenLogo.png" style={{width: "90%"}}/></div>
			</div>
			<div className="footer-end">
				<div>
					<div className="footer-header-title">Solutions</div>
					<div className="sub-footer-header-title">
						<div>FEDPAY</div>
						<div>Online Application</div>
						<div>Financial Platform</div>
						<div>Collateral Platform</div>
						<div>Affordable Interest Rate</div>
					</div>
				</div>
				<div>
					<div className="footer-header-title mmt">Resources</div>
					<div className="sub-footer-header-title">
						<div>Blog</div>
						<div>privacy Policy</div>
						<div>Terms Of Service</div>
						<div>Press</div>
						<div>Contact us</div>
						<div>Fraud Alert</div>
					</div>
				</div>
				<div>
					<div className="footer-header-title mmt">Support</div>
					<div className="sub-footer-header-title">
						<div>+2348144150223</div>
						<div>hello@arvofinace.com</div>
						<div>ombudsman</div>
					</div>

					<div className="footer-social-link">
						<i className="fa fa-twitter"></i>
						<i className="fa fa-facebook"></i>
						<i className="fa fa-instagram"></i>
						<i className="fa fa-linkedin"></i>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div className="col-12 ml3">
		<div className="footer-border">
			
		</div>

		<div className="text-f00t-download" style={{fontFamily: "ea1art", fontWeight: "bold", color: "#777"}}>
			Download our Mobile App
		</div>
		<div>
			<div>
				<img src="library/library/Resources/api/image/get-it-on-google-play_2_orig.png" className="mmi move-get-on-app-store2s"/>
				<img src="library/library/Resources/api/image/Available-on-the-App-Store-logo-vector-1024x336-1024x336.png" className="move-get-on-app-store2 mmi"/>
			</div>
		</div>
	</div>
            </Fragment>
         );
    }
}
 
export default Footer;