import React, { Component } from 'react'
import New from './New';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class News extends Component {
  render() {
    return (
      <div className="row">
      <TransitionGroup>
          { this.props.news.map(article => (
            <CSSTransition key={ article.url } classNames="fade" timeout={ 500 }>
              <New new={ article }/>
            </CSSTransition>
          )) }
      </TransitionGroup>
      </div>
    )
  }
}
