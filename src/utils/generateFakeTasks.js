import fs from 'fs';
import casual  from 'casual';

/**
* Generates a random number between two integers, inclusive.
*
* @param {number} min - Minimum.
* @param {number} max - Maximum.
* @returns {number} Random number between specified min/max arguments.
*/
function randBetween(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateSubTasks(maxDepth = 5) {
    maxDepth--;
    const subTasks = {};
    if (maxDepth > 0) {
        for (let i = 0; i < randBetween(3, 12); i++) {
            subTasks[i + 1] = {
                id: i + 1,
                name: casual.catch_phrase,
                author: casual.full_name,
                text: casual.sentences(randBetween(60, 120)),
                isDone: false,
                children: generateSubTasks(randBetween(1, maxDepth))
            };
        }
    }
    return subTasks;

}

function generateTasks() {
    const tasks = {};
    for (let i = 0; i < randBetween(4, 7); i++) {
        tasks[i + 1] = {
            id: i + 1,
            name: casual.catch_phrase,
            author: casual.full_name,
            text: casual.sentences(randBetween(10, 40)),
            isDone: false,
            children: generateSubTasks()
        };
    }
    return tasks;
}

export function generateData() {
    const path = `${__dirname}/fakeTasks.json`;
    fs.writeFileSync(path, JSON.stringify(generateTasks(), null, 4), (err) => {
        if (err) {
            console.log(err); // eslint-disable-line no-console
        }
    });
}

generateData();