import React, { Component, Fragment } from 'react';

class Mid extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            
        <div className="col-12 center">
		<div className="feedback-card">
			<div className="clients-feedback">
				<div><img src="library/library/Resources/api/image/Ellipse 3.png"/></div>
				<div className="feedback-card-tittle">Best Investment App Ever!</div>
				<div className="feedback-card-content0">
					<div className="feedback-card-content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolores
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="partner col-12">
		<div className="partner-card">
			<div className="sub-prtner-card">
				<div><img src="library/library/Resources/api/image/Vector.png" style={{width: "70%"}}/></div>
				<div><img src="library/library/Resources/api/image/splashScreenLogo.png"  style={{width: "70%"}}/></div>
				<div><img src="library/library/Resources/api/image/analytics_64dp.png"  style={{width: "70%"}}/></div>
				<div><img src="library/library/Resources/api/image/Vector.png"  style={{width: "70%"}}/></div>
			</div>
		</div>
	</div>

	<div className="col-12">
		<div className="ready-to-get-started">
			<div className="sub-ready-to-get-started center">
				<div className="text-ready">Ready To get started</div>
				<div className="sub-text-ready">
					<div className="sub-sub-text-ready">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore
					</div>
				</div>
				<div className="craeteAccount">
					<button>Create an Account</button>
				</div>
			</div>
		</div>
	</div>
        </Fragment>);
    }
}
 
export default Mid;