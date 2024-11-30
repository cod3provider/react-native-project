import {combineReducers} from "redux";
import userReducer from '../reducers/userSlice';
import postsReducer from '../reducers/postsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
})

export default rootReducer;