import React from 'react';
import Wall from '../components/wall';
import Curtain from '../components/curtain';
import Floor from '../components/floor';
import Sofa from '../components/sofa';

import {
  RelativeContainer,
} from '../styled';

const Main = () => {
  return (
    <React.Fragment>
      <RelativeContainer
        height="60%"
      >
        <Wall></Wall>
        <Curtain></Curtain>
      </RelativeContainer>
      <RelativeContainer
        height="40%"
      >
        <Floor></Floor>
        <Sofa></Sofa>
      </RelativeContainer>
    </React.Fragment>
  )
}

export default Main;
