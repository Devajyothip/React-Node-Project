import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import {
  FlexContainer,
  RelativeContainer,
  StyledDiv,
} from '../../styled';
import { baseUrl } from '../../constants';
import { signinAcition } from '../../store/action';

const Signin = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: '',
    error: {
      email: '',
      password: '',
    },
    statusMsg: '' 
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user!=null && user!=undefined && user!='') {
      history.push('/');
    }
  })

  const valueChanged = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      error: {
        ...state.error,
        email: '',
        password: '',
      },
      statusMsg: ''
    });
  }

  const checkForm = () => {
    if(state.email=='') {
      setState({
        ...state,
        error: {
          ...state.error,
          email: 'Please fill email field'
        }
      })
      return false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      setState({
        ...state,
        error: {
          ...state.error,
          email: 'Invalid email'
        }
      })
      return false;
    }

    if(state.password=='') {
      setState({
        ...state,
        error: {
          ...state.error,
          password: 'Please fill password field'
        }
      })
      return false;
    }
    
    return true;
  }

  const signin = async () => {
    
    if (checkForm()) {
      await axios.post(baseUrl+'/user/signin', {
        email: state.email,
        password: state.password,
      })
      .then(res => {
        if(res.data.code == 1) {
          // dispatch(signinAcition(res.data.email));
          localStorage.setItem('user', res.data.user);
          history.push('/');
        } else {
          setState({
            ...state,
            statusMsg: res.data.message
          });
        }
      });
    }
  }

  const goto = (path) => {
    history.push(path);
  }

  return (
    <FlexContainer height="30vh">
      <RelativeContainer height="fit-content">
        <FlexContainer margin="0 0 20px 0">
          {state.statusMsg && <p style={{ margin:0, fontSize:'20px', fontStyle:'bold', color:'red' }}>{state.statusMsg}</p>}
        </FlexContainer>
        <FlexContainer>
          <label>Email :</label>&nbsp;
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={valueChanged}
          />
        </FlexContainer>
        <FlexContainer margin="0 0 20px 0">
          {state.error.email && <p style={{ margin:0, fontSize:'13px', fontStyle:'italic', color:'red' }}>{state.error.email}</p>}
        </FlexContainer>
        <FlexContainer>
          <label>Password :</label>&nbsp;
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={valueChanged}
          />
        </FlexContainer>
        <FlexContainer margin="0 0 20px 0">
          {state.error.password && <p style={{ margin:0, fontSize:'13px', fontStyle:'italic', color:'red' }}>{state.error.password}</p>}
        </FlexContainer>
        <FlexContainer margin="0 0 10px 0">
          <button onClick={signin}>Signin</button>&nbsp;&nbsp;&nbsp;
          <button onClick={ e => goto('/signup')} >Create one!</button>
        </FlexContainer>
      </RelativeContainer>
    </FlexContainer>
  )
}

export default Signin;
