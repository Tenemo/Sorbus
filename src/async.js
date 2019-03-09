function addToQueue(pictures) {
    console.log(pictures);
}

const buffer = {
    pictures: [],
    batchNumber: 0,
    add: pictureName => {
        console.log(`Hey, new picture! ${pictureName}`);
        // new request! fresh buffer!  start the fucking countdown
        if (this.pictures.length === 0) {
            this.startTimer(this.batchNumber);
        }
        // full buffer! unleash the hounds
        if (this.pictures.length === 10) {
            this.send();
        }
        this.pictures.push(pictureName);
    },
    startTimer: currentNumber => {
        setTimeout(() => {
            // send
            if (this.batchNumber === currentNumber) {
                console.log('TIMEOUT FIRED');
                this.send();
            }
        }, 10000);
    },
    send: () => {
        this.batchNumber += 1;
        addToQueue(this.pictures);
        this.clear(); // this should be in a callback, in case sending pictures to queue fucks up
    },
    clear: () => {
        this.pictures = [];
    },
};

for (let i = 0; i < 1000; i += 1) {
    setTimeout(() => {
        if (Math.random() < 0.5) buffer.add('i_picture');
    }, 5000);
}
