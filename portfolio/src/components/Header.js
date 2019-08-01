import React from 'react';

const Header = (props) => {

	return(
		<header className="App-header">
			<h1 className="heading-name">Adam Michael Klemm</h1>
      <h2 className="heading-title"><span className="underline">Front-End</span> : <span className="underline">Web Developer</span></h2>
      <div className="under">
	      <h3 className="heading-location">Chicago, IL</h3>
	      <h3 className="heading-phone">773.558.2970</h3>
	      <h3 className="heading-email"><a href="mailto:adam.michael.klemm@gmail.com" title="adam.michael.klemm@gmail.com"><img src="/images/email2.png" alt="" /></a></h3>
      </div>
      
		</header>
	)
}


export default Header;
