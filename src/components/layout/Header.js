import React, { Component } from 'react';


class Header extends Component {
  state = { 
  display: " "
   }

shownav= () => {
 
}

closenav = ( )=>{

}

  render() { 


    return ( 
      <React.Fragment>
       	<div className="main-header">
          <div className="header-1">

<div className="mobile-nav-display" id="mobilenav">
  <div className="mobile-nav">
    <div><img src="library/library/Resources/api/image/splashScreenLogo.png" className="mobile-nav-image"/> <artyy className="bars-left" onClick={this.closenav()}>
      <i className="fa fa-close"></i>
    </artyy></div>
  </div>
  <div className="mobile-nav-links">
    <div className="mobile-a-links"><a href="">About Us</a></div>
    <div className="mobile-a-links"><a href="">How it Works</a></div>
    <div className="mobile-a-links"><a href="">Contact Us</a></div>
    <div className="mobile-a-links"><a href="">FAQs</a></div>
    <div className="mobile-a-links"><a href="">FEDPAY</a></div>
    <div className="mobile-a-links"><a href="">SIGN IN</a></div>
    <div className="mobile-a-links"><a href="">Download App</a></div>
  </div>
</div>

<div className="col-12 mobile-desktop-nav">
  <nav className="main-neader-navigation">
    <a href="#"><img src="library/library/Resources/api/image/splashScreenLogo.png"/></a>
    <nav-art>
      <a href="#">About Us</a>
      <a href="#">How it Works</a>
      <a href="#">Contact Us</a>
      <a href="#">FAQs</a>
      <a href="#">FEDPAY</a>
    </nav-art>
  </nav>
</div>

<div className="mobile-nav" onClick={this.shownav()}>
  <div><img src="library/library/Resources/api/image/splashScreenLogo.png" className="mobile-nav-image"/><arty className="bars-left">
    <i className="fa fa-bars"></i>
  </arty></div>
</div>

<div className="header-detailed-text">
  <div className="header-detailed-text-wrapper">
    <div className="header-detailed-text-con">
      <div className="header-text-big">
        The best way to invest your money and get quick
        access to loan
      </div>
      <div className="header-text-big-sub-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </div>
      <div className="text-download-on-go">
        <div>Download and use on the go!</div>
      </div>
      <div className="link-image-links">
        <img src="library/library/Resources/api/image/get-it-on-google-play_2_orig.png"/>
        <img src="library/library/Resources/api/image/Available-on-the-App-Store-logo-vector-1024x336-1024x336.png" className="move-get-on-app-store"/>
      </div>
    </div>

    <div className="header-detailed-text-image">
      <div className="mdi">
        <img src="library/library/Resources/api/image/001.png"/>
      </div>
      <div className="chat-card-phone">
        <div className="chat-receiver-image">
          <img src="library/library/Resources/api/image/avatarIcon.png" style={{width: "50px", height: "50px"}}/>
        </div>
        <div className="receiver-details">
          <div className="receiver-greetings">Hey Ebuka</div>
          <div className="receiver-t-1">Please select an investnment option</div>
          <div className="options-flex">
            <div className="receive-options bg-add-receiev">N50k-N100k</div>
            <div className="receive-options">N100k-N500k</div>
            <div className="receive-options">N500km-N2m</div>
            <div className="receive-options">N2m-N5m</div>
          </div>
        </div>
      </div>

      <div className="chat-card-phone2">
        <div className="chat-receiver-image">
          <img src="library/library/Resources/api/image/avatarIcon.png" style={{width: "50px", height: "50px"}}/>
        </div>
        <div className="sender-details">
          <div className="sender-greetings">Hey Bosun Jones</div>
          <div className="sender-t-2">Your loan application has been approved</div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

      <div className="header-2">
				<div className="links">
					<a href=""><button className="links-app-mobile">SIGN IN</button></a>
					<a href=""><button className="links-app-mobile app-2">Download App</button></a>
				</div>
			</div>
      </div>
      </React.Fragment>
     );
  }
}
 
export default Header;