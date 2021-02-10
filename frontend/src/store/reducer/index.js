import { combineReducers } from 'redux';

const initColorState = {
  wall_main: '#ffffff',
  wall_bar: '#ffffff',
  curtain_primary: '#ffffff',
  curtain_secondary: '#ffffff',
  curtain_bar: '#ffffff',
  sofa_primary: '#ffffff',
  sofa_secondary: '#ffffff',
  floor: '#ffffff',
};

const colorsGroup = (state = initColorState, action) => {
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

const setColor = (state = initColorState, action) => {
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

const initUserState = {
  email: '',
}

const signedEmail = (state = initUserState, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { email: action.item }
    default:
      return state
  }
}

export default combineReducers({
  colorsGroup,
  setColor,
  signedEmail,
});