import React, { Component } from 'react'

export default class Form extends Component {
    categoryRef = React.createRef();

    changeCategory = e => {
        e.preventDefault();

        this.props.reqNews(this.categoryRef.current.value);
    }

    render() {
        return (
        <div className="buscador row">
            <div className="col s12 m8 offset-m2">
                <form onSubmit={ this.changeCategory }>
                    <h2>News by category</h2>
                    <div className="input-field col s12 m8">
                        <select ref={this.categoryRef}>
                            <option value="general" defaultValue>General</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="input-field col s12 m4 enviar">
                        <input type="submit" className="btn amber darken-2" value="Search"/>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
