import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './superHeader.css';

const range = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export class SuperHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialText: props.text,
            randomText: '',
            finalText: '',
        };
    }

    componentWillMount() {
        const { rollSpeed } = this.props;
        this.intervalId = setInterval(this.timer, rollSpeed);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        const { initialText } = this.state;
        if (this.state.initialText.length > 0) {
            this.setState(
                {
                    randomText: (() =>
                        initialText
                            .split('')
                            .reduce(
                                newCombined =>
                                    newCombined.concat(
                                        range.charAt(
                                            Math.floor(
                                                Math.random() * range.length,
                                            ),
                                        ),
                                    ),
                                [],
                            ))(),
                },
                () => {
                    if (Math.random() < 0.1) {
                        this.setState(currentState => ({
                            finalText:
                                currentState.finalText +
                                (() =>
                                    Math.random() > 0.5
                                        ? currentState.initialText[0].toUpperCase()
                                        : currentState.initialText[0].toLowerCase())(),
                            initialText: currentState.initialText.substr(1),
                        }));
                    }
                },
            );
        } else {
            clearInterval(this.intervalId);
            this.setState({ randomText: '' });
        }
    };

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { text, rollSpeed } = this.props;
        if (nextProps.text !== text) {
            this.intervalId = setInterval(this.timer, rollSpeed);
            this.setState({
                randomText: '',
                finalText: '',
                initialText: nextProps.text,
            });
        }
    }

    render() {
        const { randomText, finalText } = this.state;
        return (
            <h2 className="superHeader">
                {finalText}
                {randomText}
            </h2>
        );
    }
}

SuperHeader.propTypes = {
    text: PropTypes.string.isRequired,
    rollSpeed: PropTypes.number,
};

SuperHeader.defaultProps = {
    rollSpeed: 50,
};

export default SuperHeader;
