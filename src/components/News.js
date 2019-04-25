import React, { Component } from 'react'
import New from './New';

export default class News extends Component {
  render() {
    return (
      <div className="row">
        { this.props.news.map(article => (
            <New
                key={ article.url }
                new={ article }
            />
        )) }
      </div>
    )
  }
}
