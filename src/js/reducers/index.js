import { ADD_ARTICLE } from '../actions/index'
const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => {
  // @TODO combineReducers
  switch (action.type) {
    case ADD_ARTICLE:
      // state.articles.push(action.payload)
      return {
        ...state,
        articles: [...state.articles, action.payload]
      }
    default:
      return state
  }
}
export default rootReducer
