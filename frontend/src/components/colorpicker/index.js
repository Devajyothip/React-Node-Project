import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changedColorAction } from '../../store/action';

import {
  FlexContainer,
} from '../../styled';

const ColorPicker = ({name, type}) => {
  const color = useSelector(state=>state.colorsGroup[type]);
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    dispatch(changedColorAction({ type: type, color: e.target.value }));
  }

  return (
    <FlexContainer
      height="fit-content"
      justifyContent="flex-end"
      margin="10px 0"
    >
      <label>{name} : </label>&nbsp;
      <input
        type="color"
        name="favcolor"
        value={color}
        onChange={handleColorChange}
      ></input>
    </FlexContainer>
  )
}

export default ColorPicker;
