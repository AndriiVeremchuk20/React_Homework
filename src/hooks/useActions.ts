import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import action_creators from '../store/action_creators';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(action_creators ,dispatch);
}