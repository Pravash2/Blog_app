import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./redducer_posts";

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
