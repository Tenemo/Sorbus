import { fromJS } from 'immutable';
import fakeTasks from '../utils/fakeTasks.json';

const editor = {
};
const initialState = fromJS({
    editor,
    tasks: fakeTasks,
});
export default initialState;
