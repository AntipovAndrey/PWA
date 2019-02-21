import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import todoReducer from './todoReducer';
import oneTimeParametersReducer from './oneTimeParametersReducer';

export default combineReducers({
  todo: todoReducer,
  form: formReducer,
  onetimeParameters: oneTimeParametersReducer
});
