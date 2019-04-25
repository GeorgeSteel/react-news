import React, { Component } from 'react'
import Header from './Header';
import News from './News';

export default class App extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    this.reqNews();
  }

  reqNews = () => {
    let url =  `https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=2599b963f2b047bdbdc8da7d4ec77e7e`;

    fetch(url)
      .then(resp => { return resp.json() })
      .then(news => {
        this.setState({
          news: news.articles
        });        
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
          title="React News"
        />
        <div className="container white contenedor-noticias">
          <News
            news={ this.state.news }
          />
        </div>        
      </div>
    )
  }
}
