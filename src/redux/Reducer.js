import {createStore} from 'redux'

var store = {
    count: 0
}

function reducer(state = store, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
            break;

        case 'DECREMENT':
            return {
                count: state.count - 1
            }
            break;

        case 'RESET':
            return {
                count: 0
            }
            break;

        default:
            return state
    }
}

export const reducer = createStore(reducer)
