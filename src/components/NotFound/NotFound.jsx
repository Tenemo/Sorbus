import React from 'react';
import shrugFlower from 'static/shrugFlower.png';
import './notFound.scss';

class NotFound extends React.Component {
    render() {
        return (
            <section className="notFound">
                <h1>404</h1>
                <img src={shrugFlower} />
                <h2>Sorry, not found!</h2>
            </section>
        );
    }
}

export default NotFound;