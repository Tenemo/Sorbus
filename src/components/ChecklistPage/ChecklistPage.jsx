import React from 'react';
import './checklistPage.scss';

import Task from './Task/Task';
import TaskList from './TaskList/TaskList';

export class HomePage extends React.Component {
    render() {
        return (
            <section className="checklistPage">
            <div className="sidebar">
                <TaskList />
            </div>
            <Task />
            </section>

        );
    }
}

export default HomePage;