import React from 'react';
import { useSelector } from 'react-redux';

import { floorSetting } from '../../constants/settings';
import {
  FlexContainer,
  StyledDiv,
} from '../../styled';

const Floor = () => {
  const color = useSelector(state=>state.colorsGroup.floor);

  return (
    <FlexContainer>
      <StyledDiv
        width={floorSetting.width}
        height={floorSetting.height}
        bgcolor={color}
        transform={'skewX(-'+floorSetting.angle+'deg) translate('+floorSetting.offset+'px, 0px)'}
      ></StyledDiv>
      <StyledDiv
        width={floorSetting.width}
        height={floorSetting.height}
        bgcolor={color}
        transform={'skewX('+floorSetting.angle+'deg) translate(-'+floorSetting.offset+'px, 0px)'}
      ></StyledDiv>
    </FlexContainer>
  )
}

export default Floor;
