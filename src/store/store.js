import { createStore, applyMiddleware } from "redux";
import covidDataReducer from "../reducers/covidDataReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/sagas"; // Dosya yolu burada düzeltildi

const sagaMiddleware = createSagaMiddleware();

const store = createStore(covidDataReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
