import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  changedColorAction,
  signinAcition,
} from '../../store/action';
import {
  FlexContainer,
  StyledDiv,
} from '../../styled';
import ColorPicker from '../../components/colorpicker';
import { baseUrl } from '../../constants';

const ColorSetting = () => {

  const dispatch = useDispatch();
  const colors = useSelector(state=>state.colorsGroup);
  const signedEmail = useSelector(state=>state.signedEmail.email);
  const history = useHistory();
  const user = localStorage.getItem('user');

  const fetchData = async () => {
    await axios.post(baseUrl+'/color', {user_id: user})
    .then(res => {
      let data = res.data;
      delete data._id
      delete data.__v
      Object.keys(data).map(key => {
        dispatch(changedColorAction({ type: key, color: data[key] }));
      })
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (user==null || user==undefined || user=='') {
      localStorage.setItem('user', '');
      history.push('/signin');
    }
    
    fetchData();
  },[]);

  const save = async () => {
    await axios.put(baseUrl+'/color', {...colors, user_id: user})
    .then(res => {
      console.log(res.data);  
    })
    .catch(error => {
      console.log(error);
    });
  }

  const signout = () => {
    localStorage.setItem('user', '');
    // dispatch(signinAcition(''));
    window.location.replace('/signin');
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
      <StyledDiv
        height="fit-content"
      >
        <FlexContainer>
          <button
            onClick={signout}
          >Signout</button> 
        </FlexContainer>
      </StyledDiv>
    </FlexContainer>
  )
}

export default ColorSetting;
