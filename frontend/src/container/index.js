import React from 'react';
import Main from './Main';
import ColorSetting from './ColorSetting';

import {
  RelativeContainer,
} from '../styled';

const Room = () => {
  return (
    <React.Fragment>
      <RelativeContainer
        width="100vw"
        height="80vh"
      >
        <Main></Main>
      </RelativeContainer>
      <RelativeContainer
        width="90vw"
        height="20vh"
      >
        <ColorSetting></ColorSetting>
      </RelativeContainer>
    </React.Fragment>
  )
}

export default Room;
