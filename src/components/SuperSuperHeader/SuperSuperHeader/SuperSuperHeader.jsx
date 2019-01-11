import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SuperHeader from '../SuperHeader';

function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export class SuperSuperHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhrase: props.words.reduce(
                (phrase, el) => phrase.concat(randomArrayElement(el)),
                [],
            ),
        };
    }

    componentWillMount() {
        const { phraseChangeSpeed } = this.props;
        this.intervalId = setInterval(this.timer, phraseChangeSpeed);
    }

    componentWillReceiveProps(props) {
        const { words } = props;
        this.setState({
            currentPhrase: words.reduce(
                (phrase, el) => phrase.concat(randomArrayElement(el)),
                [],
            ),
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        const { currentPhrase } = this.state;
        const { words } = this.props;
        const randomIndex = Math.floor(Math.random() * currentPhrase.length);
        const newPhrase = currentPhrase;
        newPhrase[randomIndex] = randomArrayElement(words[randomIndex]);
        this.setState({
            currentPhrase: newPhrase,
        });
    };

    render() {
        const { currentPhrase } = this.state;
        const { rollSpeed } = this.props;
        return (
            <div className="superSuperHeader">
                {currentPhrase.map((word, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <React.Fragment key={i}>
                        <SuperHeader rollSpeed={rollSpeed} text={word} />
                        {'\u00A0\u00A0'}
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

SuperSuperHeader.propTypes = {
    words: PropTypes.array,
    rollSpeed: PropTypes.number,
    phraseChangeSpeed: PropTypes.number,
};

SuperSuperHeader.defaultProps = {
    words: [
        [
            'ASTONISHING',
            'AWESOME',
            'BEAUTIFUL',
            'BREATHTAKING',
            'DREADFUL',
            'HORRIFYING',
            'IMPRESSIVE',
            'INTIMIDATING',
            'MAGNIFICENT',
            'OVERWHELMING',
            'SHOCKING',
            'STUNNING',
            'WONDERFUL',
            'WONDROUS',
            'EXALTED',
            'MAJESTIC',
            'MIND-BLOWING',
            'AMAZING',
            'FASCINATING',
            'MARVELOUS',
            'PRODIGIOUS',
            'UNBELIEVABLE',
            'REMARKABLE',
            'HEROIC',
            'MYSTERIOUS',
            'FABULOUS',
            'HEAVENLY',
            'INSPIRING',
            'MOVING',
            'EXTRAVAGANT',
            'SPECTACULAR',
            'WICKED',
            'SENSATIONAL',
            'SPLENDID',
            'UNREAL',
            'GLORIOUS',
            'DIVINE',
            'STUPENDOUS',
            'TREMENDOUS',
            'OVERPOWERING',
            'TRAUMATIC',
            'EXCEPTIONAL',
            'BRUTAL',
            'INCREDIBLE',
            'MEGA',
            'MASTERLY',
        ],
        [
            'ASTONISHING',
            'AWESOME',
            'BEAUTIFUL',
            'BREATHTAKING',
            'DREADFUL',
            'HORRIFYING',
            'IMPRESSIVE',
            'INTIMIDATING',
            'MAGNIFICENT',
            'OVERWHELMING',
            'SHOCKING',
            'STUNNING',
            'WONDERFUL',
            'WONDROUS',
            'EXALTED',
            'MAJESTIC',
            'MIND-BLOWING',
            'AMAZING',
            'FASCINATING',
            'MARVELOUS',
            'PRODIGIOUS',
            'UNBELIEVABLE',
            'REMARKABLE',
            'HEROIC',
            'MYSTERIOUS',
            'FABULOUS',
            'HEAVENLY',
            'INSPIRING',
            'MOVING',
            'EXTRAVAGANT',
            'SPECTACULAR',
            'WICKED',
            'SENSATIONAL',
            'SPLENDID',
            'UNREAL',
            'GLORIOUS',
            'DIVINE',
            'STUPENDOUS',
            'TREMENDOUS',
            'OVERPOWERING',
            'TRAUMATIC',
            'EXCEPTIONAL',
            'BRUTAL',
            'INCREDIBLE',
            'MEGA',
            'MASTERLY',
        ],
        [
            'ASTONISHING',
            'AWESOME',
            'BEAUTIFUL',
            'BREATHTAKING',
            'DREADFUL',
            'HORRIFYING',
            'IMPRESSIVE',
            'INTIMIDATING',
            'MAGNIFICENT',
            'OVERWHELMING',
            'SHOCKING',
            'STUNNING',
            'WONDERFUL',
            'WONDROUS',
            'EXALTED',
            'MAJESTIC',
            'MIND-BLOWING',
            'AMAZING',
            'FASCINATING',
            'MARVELOUS',
            'PRODIGIOUS',
            'UNBELIEVABLE',
            'REMARKABLE',
            'HEROIC',
            'MYSTERIOUS',
            'FABULOUS',
            'HEAVENLY',
            'INSPIRING',
            'MOVING',
            'EXTRAVAGANT',
            'SPECTACULAR',
            'WICKED',
            'SENSATIONAL',
            'SPLENDID',
            'UNREAL',
            'GLORIOUS',
            'DIVINE',
            'STUPENDOUS',
            'TREMENDOUS',
            'OVERPOWERING',
            'TRAUMATIC',
            'EXCEPTIONAL',
            'BRUTAL',
            'INCREDIBLE',
            'MEGA',
            'MASTERLY',
        ],
        [
            'IMAGE',
            'PICTURE',
            'PHOTO',
            'DRAWING',
            'ILLUSTRATION',
            'PHOTOGRAPH',
            'PORTRAIT',
        ],
        [
            'DELIVERER',
            'DISPATCHER',
            'POSTMAN',
            'DELEGATE',
            'UPLOADER',
            'SENDER',
            'TRANSMITTER',
            'INSCRIBER',
        ],
    ],
    rollSpeed: 40,
    phraseChangeSpeed: 3000,
};

export default SuperSuperHeader;
