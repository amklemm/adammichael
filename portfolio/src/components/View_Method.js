import React, { Component } from 'react';
import './method.css';



const methodData = [

	{
		title: 'HTML 5',
		image: 'images/logos/logo_html5.png',
		alt: '',
		rollover: 'HTML 5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
	},
	{
		title: 'Git',
		image: 'images/logos/logo_git.png',
		alt: '',
		rollover: 'Git',
		url: 'https://git-scm.com/'
	},
	{
		title: 'CSS 3',
		image: 'images/logos/logo_css.png',
		alt: '',
		rollover: 'CSS 3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
	},
	{
		title: 'Sass',
		image: 'images/logos/logo_sass.png',
		alt: '',
		rollover: 'Sass',
		url: 'https://sass-lang.com/'
	},
	{
		title: 'NodeJs',
		image: 'images/logos/logo_node.png',
		alt: '',
		rollover: 'NodeJs',
		url: 'https://nodejs.org/en/'
	},
	{
		title: 'Gulp',
		image: 'images/logos/logo_gulp.png',
		alt: '',
		rollover: 'Gulp',
		url: 'https://gulpjs.com/'
	},
	{
		title: 'Backbone',
		image: 'images/logos/logo_backbone.png',
		alt: '',
		rollover: 'Backbone',
		url: 'http://backbonejs.org/'
	},
	{
		title: 'Angular',
		image: 'images/logos/logo_angular.png',
		alt: '',
		rollover: 'Angular',
		url: 'https://angularjs.org/'
	},
	{
		title: 'React',
		image: 'images/logos/logo_react.png',
		alt: '',
		rollover: 'React',
		url: 'https://reactjs.org/'
	},
	{
		title: 'Marionette',
		image: 'images/logos/logo_marionette.png',
		alt: '',
		rollover: 'Marionette',
		url: 'https://marionettejs.com/'
	},
	{
		title: 'JQuery',
		image: 'images/logos/logo_jquery.png',
		alt: '',
		rollover: 'JQuery',
		url: 'http://jquery.com/'
	},
	{
		title: 'Bootstrap',
		image: 'images/logos/logo_bootstrap.png',
		alt: '',
		rollover: 'Bootstrap',
		url: 'http://getbootstrap.com/'
	},
	{
		title: 'Express',
		image: 'images/logos/logo_express.png',
		alt: '',
		rollover: 'Express',
		url: 'http://expressjs.com/'
	},
	{
		title: 'Greensock',
		image: 'images/logos/logo_greensock.png',
		alt: '',
		rollover: 'Greensock',
		url: 'https://greensock.com/'
	},
	{
		title: 'Metafizzy',
		image: 'images/logos/logo_metafizzy.png',
		alt: '',
		rollover: 'Metafizzy',
		url: 'https://metafizzy.co/'
	},
	{
		title: 'Yeoman',
		image: 'images/logos/logo_yeoman.png',
		alt: '',
		rollover: 'Yeoman',
		url: 'http://yeoman.io/'
	},
	{
		title: 'D3',
		image: 'images/logos/logo_d3.png',
		alt: '',
		rollover: 'D3',
		url: 'https://d3js.org/'
	},
	
	{
		title: 'Grunt',
		image: 'images/logos/logo_grunt.png',
		alt: '',
		rollover: 'Grunt',
		url: 'https://gruntjs.com/'
	},
	{
		title: 'Firebase',
		image: 'images/logos/logo_firebase.png',
		alt: '',
		rollover: 'Firebase',
		url: 'https://firebase.google.com/'
	},
	{
		title: 'MongoDB',
		image: 'images/logos/logo_mongo.png',
		alt: '',
		rollover: 'Firebase',
		url: 'https://www.mongodb.com/'
	},
	{
		title: 'My SQL',
		image: 'images/logos/logo_mysql.png',
		alt: '',
		rollover: 'Firebase',
		url: 'https://www.mysql.com/'
	},
	
	{
		title: 'Wordpress',
		image: 'images/logos/logo_wordpress.png',
		alt: '',
		rollover: 'Wordpress',
		url: 'https://wordpress.com/'
	},
	
];



class Box extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
      	{
      		this.state.isHovering !== true &&
	      	<div className="item">
						<div className="inner" onMouseEnter={this.handleMouseHover}>
							<div className="content">
								<img src={this.props.image} alt={this.props.alt} title={this.props.title} />
							</div>
						</div>
					</div>	
      	}
        {
      		this.state.isHovering && 
      		<div className="item">
      			<a href={this.props.url} target="_blank">
						<div className="inner" onMouseLeave={this.handleMouseHover}>
							<div className="content">
								<p className="rolly">
									{this.props.title}
								</p>
							</div>
						</div>
						</a>
					</div>
        }
      </div>
    );
  }
}

const Method = (props) => {
	return (
		<div className="method">
			<h5>Technologies that I have expertise in.</h5>
			<div className="grid clearfix">
				{methodData.map(({title, image, alt, rollover, url}) => (
      		<div key={title}>
      			<Box title={title} image={image} alt={alt} rollover={rollover} url={url} />
      		</div>
      	))}
			</div>
		</div>
	)
}

export default Method;
