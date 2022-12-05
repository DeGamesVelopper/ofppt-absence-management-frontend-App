
import { combineReducers } from 'redux';

import filiereReducer from './filiereReducer';
import errorsReducer from './errorsReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
   flrStore : filiereReducer,
   errorsStore: errorsReducer,
   auth: authReducer,
})

export default reducer