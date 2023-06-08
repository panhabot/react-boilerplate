import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postReducer from "./Post/reducer";
import { all,fork } from "redux-saga/effects";
import { postSaga } from "./Post/saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  post: postReducer,
});

const middlewares = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export default configureStore({
  reducer: reducers,
  middleware: middlewares,
});

sagaMiddleware.run(
    function* () {
        yield all([
            fork(postSaga),
        ]);
    }
)
