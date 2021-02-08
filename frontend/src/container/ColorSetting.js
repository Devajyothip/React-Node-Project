import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  // setColorAction,
  changedColorAction
} from '../store/action';
import ColorPicker from '../components/colorpicker';
import {
  FlexContainer,
  StyledDiv,
} from '../styled';
import { baseUrl } from '../constants';

const ColorSetting = () => {

  const dispatch = useDispatch();
  const colors = useSelector(state=>state.colorsGroup);

  const fetchData = async () => {
    await axios.get(baseUrl+'/1')
    .then(res => {
      let data = res.data;
      delete data._id
      delete data.__v
      Object.keys(data).map(key => {
        dispatch(changedColorAction({ type: key, color: data[key] }));
      })
      // dispatch(setColorAction(data));
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchData();
  },[]);

  const save = async () => {
    await axios.put(baseUrl+'/1', {...colors})
    .then(res => {
      console.log(res.data);  
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <FlexContainer>      
      <StyledDiv
        height="fit-content"
      >
        <ColorPicker
          name="Wall main color"
          type="wall_main"
        ></ColorPicker>
        <ColorPicker
          name="Wall bar color"
          type="wall_bar"
        ></ColorPicker>
      </StyledDiv>   
      <StyledDiv
        height="fit-content"
      >
        <ColorPicker
          name="Curtain primary color"
          type="curtain_primary"
        ></ColorPicker>
        <ColorPicker
          name="Curtain secondary color"
          type="curtain_secondary"
        ></ColorPicker>
        <ColorPicker
          name="Curtain bar color"
          type="curtain_bar"
        ></ColorPicker>
      </StyledDiv>  
      <StyledDiv
        height="fit-content"
      >
        <ColorPicker
          name="Sofa primary color"
          type="sofa_primary"
        ></ColorPicker>
        <ColorPicker
          name="Sofa secondary color"
          type="sofa_secondary"
        ></ColorPicker>
      </StyledDiv> 
      <StyledDiv
        height="fit-content"
      >
        <ColorPicker
          name="Floor color"
          type="floor"
        ></ColorPicker>
        <FlexContainer>
          <button
            onClick={save}
          >Save</button> 
        </FlexContainer>
      </StyledDiv>
    </FlexContainer>
  )
}

export default ColorSetting;
