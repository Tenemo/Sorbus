import React from 'react';
import shrugFlower from 'static/shrugFlower.png';
import './notFound.scss';
import PropTypes from 'prop-types';

class NotFound extends React.Component {
    render() {
        return (
            <section className="notFound">
                <h1>404</h1>
                <img src={shrugFlower} />
                <h2>Sorry, {this.props.name} not found!</h2>
            </section>
        );
    }
}

NotFound.propTypes = {
    name: PropTypes.string
};
export default NotFound;