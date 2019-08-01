import React from 'react';
import './contact.css';





const Contact = (props) => {
	return (
		<section className="contact">
			<p>
	      Phone: 773.558.2970
	    </p>
	    <p>
	      Email: <a href="mailto:adam.michael.klemm@gmail.com">adam.michael.klemm@gmail.com</a>
	    </p>
	    <a href="https://www.linkedin.com/in/adam-klemm-91b8bb2b/" target="_blank" rel="noopener noreferrer">
	    	<img src="images/linkedin-icon.png" alt="linkedin" />
	    </a>
    </section>
	)
};



export default Contact;
