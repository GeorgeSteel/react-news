import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center" href="/">{ props.title }</a>
            </div>
        </nav>
    );
};

export default Header;