import { combineReducers } from 'redux';

const initialState = {
  wall_main: '#36c991',
  wall_bar: '#741616',
  curtain_primary: '#965454',
  curtain_secondary: '#6cb7a4',
  curtain_bar: '#000000',
  sofa_primary: '#08490a',
  sofa_secondary: '#ffffff',
  floor: '#3241b3',
};

const colorsGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGED_COLOR':
      return {
        ...state,
        [action.item.type]: action.item.color
      }
    default:
      return state
  }
}

const setColor = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        ...action.item
      }
    default:
      return state
  }
}

export default combineReducers({
  colorsGroup,
  setColor,
});