import React from 'react';
import { Route, Link } from "react-router-dom";
import './projects.css';





var projects = [
	{
		name: 'Avionos',
		id: 'project-avionos',
		desc: '',
		url: 'https://www.avionos.com/',
		image: '/images/screen_avionos.jpg',
		type: 'agency',
		
	},
	{
		name: 'CSA Group',
		id: 'project-csa',
		desc: 'I was responsible for styleing',
		url: 'http://www.csagroup.org',
		image: '/images/screen_csa.jpg',
		type: 'project',
		
	},
	{
		name: 'SnS HVAC',
		id: 'project-sns',
		desc: 'This is a basic website',
		url: 'http://www.sandsheatcool.com',
		image: '/images/screen_sns.jpg',
		type: 'project'
	},
	{
		name: 'Jacobs & Clevenger',
		id: 'project-jnc',
		desc: 'I was responsible for styleing',
		url: 'https://www.jacobsclevenger.com/',
		image: '/images/screen_jnc.jpg',
		type: 'agency'
	},
	{
		name: 'Church Mutual',
		id: 'project-church-mutual',
		desc: 'I was responsible for styleing',
		url: 'https://www.churchmutual.com/',
		image: '/images/screen_church-mutual.jpg',
		type: 'project'
	},
	{
		name: 'Motorola',
		id: 'project-moto',
		desc: 'I was responsible for styleing',
		url: 'https://www.motorola.com/',
		image: '/images/screen_moto.jpg',
		type: 'project',
	},
	{
		name: 'Blue Cross / Blue Shield',
		id: 'project-bcbs',
		desc: 'I was responsible for styleing',
		url: 'https://www.bcbs.com/',
		image: '/images/screen_bcbs.jpg',
		type: 'project'
	},
	{
		name: 'BCBS - Through It All Campaign',
		id: 'project-bcbs-through-it-all',
		desc: 'I was responsible for styleing',
		url: 'https://www.bcbsil.com/throughitall/',
		image: '/images/screen_bcbs-through-it-all.jpg',
		type: 'project'
	},
	{
		name: 'Accenture',
		id: 'project-accenture',
		desc: '',
		url: 'https://www.accenture.com/',
		image: '/images/screen_accenture.jpg',
		type: 'agency'
	},
	{
		name: 'AirGas',
		id: 'project-airgas',
		desc: 'I was responsible for styleing',
		url: 'http://www.airgas.com/',
		image: '/images/screen_airgas.jpg',
		type: 'project'
	},
	{
		name: 'Ogilvy & Mather',
		id: 'project-ogilvy',
		desc: '',
		url: 'https://www.ogilvy.com/',
		image: '/images/screen_ogilvy.jpg',
		type: 'agency'
	},
	{
		name: 'TwoxFour',
		id: 'project-twoxfour',
		desc: '',
		url: 'http://www.twoxfour.com/',
		image: '/images/screen_2x4.jpg',
		type: 'agency'
	},
	{
		name: 'Alpine ITW',
		id: 'project-alpine',
		desc: 'I was responsible for styleing',
		url: 'http://alpineitw.com/',
		image: '/images/screen_alpine.jpg',
		type: 'project'
	},
	
	{
		name: 'WBEZ 91.5',
		id: 'project-wbez',
		desc: 'I was responsible for styleing',
		url: 'https://www.wbez.org/',
		image: '/images/screen_wbez.jpg',
		type: 'project'
	},
	{
		name: 'Marian Williams Design',
		id: 'project-marian-williams',
		desc: 'I was responsible for styleing',
		url: 'http://marianwilliamsdesign.com/',
		image: '/images/screen_mw.jpg',
		type: 'project'
	},
	{
		name: 'Modern Marketing',
		id: 'project-modernmarketing',
		desc: '',
		url: 'https://www.modernmarketingpartners.com/',
		image: '/images/screen_modernmarketing.jpg',
		type: 'agency'
	},
	{
		name: 'Iconic Shop',
		id: 'project-iconic',
		desc: 'I was responsible for styleing',
		url: 'https://iconicshop.com/',
		image: '/images/screen_iconic.jpg',
		type: 'project'
	},
	{
		name: 'Jellyvision',
		id: 'project-jellyvision',
		desc: '',
		url: 'https://www.jellyvision.com/',
		image: '/images/screen_jellyvision.jpg',
		type: 'project'
	},
	{
		name: 'Washington Federal',
		id: 'project-wf',
		desc: 'I was responsible for styleing',
		url: 'https://www.washingtonfederal.com/',
		image: '/images/screen_wf.jpg',
		type: 'project'
	}
	
];

// class NavLink extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//     this.state = {
//       isHovering: false,
//     };
//   }

//   handleMouseHover() {
//     this.setState(this.toggleHoverState);
//   }

//   toggleHoverState(state) {
//     return {
//       isHovering: !state.isHovering,
//     };
//   }

//   render() {
//     return (
//       <div>
//       	{
//       		this.state.isHovering !== true &&
// 	      	<div className="nav-link" onMouseEnter={this.handleMouseHover}>
// 						<Link to={this.props.url}
// 					</div>	
//       	}
//         {
//       		this.state.isHovering && 
//       		<div className="nav-link" onMouseLeave={this.handleMouseHover}>
//       			<Link to={this.props.url}
// 					</div>
//         }
//       </div>
//     );
//   }
// }




const Projects = ({match}) => {

	const project = projects.find(({ id }) => id === match.params.projectId);

	console.log(project);

  return (
  	<div className="wrapper projects-desktop">
  		<h5><span className="agencies-key">Agencies</span></h5>
  		<h5><span className="projects-key">Projects</span></h5>

	    <div className="projects clearfix">
	      <div className="project-menu">
	        <ul>
	        	{projects.map(({name, id, type, url, image}) => (
	        		<li key={id} type={type} className={type}>
	        			<Link to={`${match.url}/${id}`}>{name}</Link>
	        			<div className="mobile-only">
	        				<a href={url} target="_blank">
	        					<img src={image} alt={name} />
	        				</a>
	        			</div>
	        		</li>
	        	))}
	        </ul>
	      </div>

	      <Route path={`${match.path}/:projectId`} component={Project} />
	      <Route
	        exact
	        path={match.url}
	        render={() => <h4>...Please Make a Selection...</h4>} />
	    </div>
	  </div>
  )
}

// export const Projects_Mobile = ({match}) => {

// 	return (
// 		<div className="wrapper projects-mobile">
//   		<h5><span className="projects-key">Awesome Projects</span> I have worked on . . . . . . as well as <span className="agencies-key">Awesome Agencies</span> I have worked for.</h5>
// 	    <div className="projects clearfix">
// 	      <Route path={`${match.path}/:projectId`} component={Project} />
// 	      <Route
// 	        exact
// 	        path={match.url}
// 	        render={() => 
// 	        	<ul>
// 	        		{projects.map(({name, id, type}) => (

// 		        		<li key={id} type={type} className={type}>
// 		        			<p>hello</p>
// 		        		</li>
// 		        	))}
// 	        	</ul>
// 	        } />
// 	    </div>
// 	  </div>
// 	)
// }

const Project = ({match}) => {
	console.log(match);
	const project = projects.find(({ id }) => id === match.params.projectId);

  return (
  	<div className="project-window">
	    <div className="project">
	      <h4><a href={project.url} target="_blank">{project.name}</a></h4>
	      <img src={project.image} alt="" />
	      { 
	      /*
	      <p className="agency">
	      	Agency: {project.agency}
	      </p>
	      
	      	<p>{project.desc}</p>	
	      } */
	      }
	    </div>
	  </div>
  )
}



export default Projects;
