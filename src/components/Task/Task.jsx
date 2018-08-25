import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTaskFromUrl } from 'selectors/TasksSelectors';
import './task.scss';
import NotFound from 'components/NotFound/NotFound';

class Task extends PureComponent {
    render() {
        const { task, match } = this.props;
        if (!task) {
            return <NotFound name={`task with URL "${match.params.taskUrl}"`} />;
        }
        return (
            <React.Fragment>
                <h2>{task.get('name')}</h2>
                <h4>{task.get('description')}</h4>
                <p>{task.get('text')}</p>
            </React.Fragment>
        );
    }
}

Task.propTypes = {
    match: PropTypes.object,
    task: PropTypes.object,
};

Task.defaultProps = {
    match: null,
    task: null,
};

function mapStateToProps(state, ownProps) {
    return {
        task: getTaskFromUrl(state, ownProps.match.params.taskUrl),
    };
}

export default connect(
    mapStateToProps,
)(Task);
