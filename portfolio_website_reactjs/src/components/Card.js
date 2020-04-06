import React, { Component } from 'react';

import pink from '../img/pink_bc.jpg';
import moveez from '../img/moveez.png';
import pdo from '../img/crud_pdo.png';
import sunny from '../img/sunny.jpg';

const ProjectData = [
  {
    "category": "FRONT-END",
    "title": "Your Moveez",
    "text": "PWA, find and add a movie to your favorites",
    "image": moveez
    /* "link": */
  },
  {
    "category": "FRONT-END",
    "title": "Weather App",
    "text": "Check the weather wherever you are (in progress)",
    "image": sunny
  },
  {
    "category": "BACK-END",
    "title": "Movie DB ",
    "text": "Using PDO to CRUD a movie Database",
    "image": pdo
  },
  {
    "category": "FULLSTACK",
    "title": "Yoga App",
    "text": "Daily Yoga PWA for training (in progress)",
    "image": pink
  },
]

class Card extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: ProjectData
    });
  }

  render() {
    return <div className="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <CardContent key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
  }
}

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <h3 className="category">{category}</h3>
        <p className="body-content">{this.props.text}</p>
        <Button />
      </div>
    )
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader  image={this.props.details.image}/>
        <CardBody title={this.props.details.title} category={this.props.details.category} text={this.props.details.text}/>
      </article>
    )
  }
}

export default Card