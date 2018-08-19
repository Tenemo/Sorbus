import fs from 'fs';
import casual  from 'casual';
import crypto from 'crypto';

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

function generateSubTasks(tasks, maxDepth = 4, level = 1) {
    maxDepth--;
    const children = [];
    if (maxDepth > 0) {
        for (let i = 0; i < randBetween(3, 7); i++) {
            const name = casual.catch_phrase;
            const taskId = crypto.createHash('md5').update(name + Date.now()).digest('hex');
            tasks[taskId] = {
                name,
                isDone: false,
                index: i,
                level,
                isExpanded: false,
                urlString: name.replace(/\s+/g, '-').toLowerCase() + '-' + taskId.substring(0,8),
                id: taskId,
                description: casual.sentences(randBetween(1, 2)),
                children: generateSubTasks(tasks, randBetween(1, maxDepth), level + 1),
                text: casual.sentences(randBetween(15, 60))
            };
            children[i] = taskId;
        }
    }
    return children;

}

function generateTasks() {
    const tasks = {};
    for (let i = 0; i < randBetween(7, 8); i++) {
        const name = casual.catch_phrase;
        const taskId = crypto.createHash('md5').update(name + Date.now()).digest('hex');
        tasks[taskId] = {
            name,
            isDone: false,
            index: i,
            level: 0,
            isExpanded: false,
            urlString: name.replace(/\s+/g, '-').toLowerCase() + '-' + taskId.substring(0,8),
            id: taskId,
            description: casual.sentences(randBetween(1, 3)),
            children: generateSubTasks(tasks),
            text: casual.sentences(randBetween(15, 60))
        };
    }
    return tasks;
}

function generateTasksUrlMap(tasks) {
    const tasksUrlMap = {};
    for (const taskId in tasks) {
        tasksUrlMap[tasks[taskId].urlString] = taskId;
    }
    return tasksUrlMap;
}

export function generateData() {
    const path = `${__dirname}/fakeTasks.json`;
    const tasks = generateTasks();
    const data = {
        rootTasks: Object.values(tasks).filter(value => value.level === 0).map(value => value.id),
        tasksUrlMap: generateTasksUrlMap(tasks),
        tasksData: tasks
    };
    fs.writeFileSync(path, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.log(err); // eslint-disable-line no-console
        }
    });
}

generateData();