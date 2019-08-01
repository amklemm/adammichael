import React from 'react';
import './Resume.css';
import { getResumeData } from '../data/resumedata';



// window.rd = getResumeData();
const rd = getResumeData();


const Heading = (props) => {
	return (
		<section className="heading">
      <h1 className="adammichaelklemm">{rd.heading.title}</h1>
      <h3 className="phone">{rd.heading.phone}</h3>
      <a href={"mailto:" + rd.heading.email} className="email">{rd.heading.email}</a>
    </section>
	)
};


const Objective = (props) => {
	return (
		<section className="objective">
		  <h4>Objective</h4>
	    <p>{rd.objective}</p>
		 </section>
	)
};


const Skills = (props) => {
	return (
		<section className="skills">
      <h4>Skills Overview</h4>
      <ul>
				{rd.skills.map(({skill, index}) => (
					<li key={index}>
						{skill}
					</li>
				))}
			</ul>
		</section>
	)
};


const Highlights = (props) => {
	const listItems = props.highlights.map((item) =>
	  <li key={item} className="highlight">{item}</li>
	);

	return (
  	<div key="test" style={{marginBottom: 20 + 'px'}}>
  		<ul>
  			{listItems}
  		</ul>
  	</div>    
	)
};

const NestedHighlights = (props) => {

	const mylist = rd.experience[0].locales;

	return (
		<div className="nest" style={{marginBottom: 20 + 'px'}}>
			{mylist.map(({ name, highlights }) => (
				<div key={name} className="nested-record">
					<div className="name">{name}</div>
					<ul>
						{highlights.map((item) => (
							<li key={item} className="highlight">{item}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}


const Experience = (props) => {
	
	const target = rd.experience;

	return (
		<section className="experience">
			<h4>Experience</h4>
			<ul>
				{target.map(({title,subtitle,location,startDate,endDate,locales,highlights}) => (
					<li key={title} className="record">
						<div className="title">{title} - {location}</div>
						<div className="date">{startDate}-{endDate}</div>
						<div className="subtitle">{subtitle}</div>
						{locales /* Nested */
							? <NestedHighlights record={title}/>
							: null
						}
						{highlights /* Regular Highlights */
							? <Highlights highlights={highlights} />
							: null
						}

					</li>
				))}
			</ul>
		</section>
	)
}




const Education = (props) => {
	return (
		<section className="education">
			<h4>Education</h4>
	      <ul>
	        <li ng-repeat="ed in education" className="ng-binding ng-scope">Bachelor’s Degree – Industrial Design, ITT Technical, Fort Wayne, IN June, 1999</li><li ng-repeat="ed in education" className="ng-binding ng-scope">Associate’s Degree – Architectural Design, ITT Technical, Fort Wayne, IN June, 1997</li>
	      </ul>
		</section>
	)
};
// const Certifications = (props) => {
// 	return (
// 		<section className="certification">
// 			<h4>Certifications</h4>
// 	      <ul>
// 	        <li ng-repeat="cert in certification" className="ng-binding ng-scope">Google Doubleclick Studio – Flash Rich-Media Banner Ads</li>
// 	      </ul>
// 		</section>
// 	)
// };
const References = (props) => {
	return (
		<section className="references">
			<p className="ng-binding">References Available Upon Request</p>
		</section>
	)
};


export const Resume = (props) => {
	return (
		<div className="resume">
			<div id="resumePage" className="container">
				<Heading />
		    <Objective />
		    <Skills />
		    <Experience />
		    <Education />
		    { /*}
		    <Certifications />
		  */ }
		    <References />
			</div>
		</div>
	)
};



export default Resume;
