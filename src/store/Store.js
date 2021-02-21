import { createStore } from 'redux';
import reducer from './reducer';


let ext= window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()

let store =createStore(reducer , ext)


export default store