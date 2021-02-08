import React from 'react';
import { useSelector } from 'react-redux';

import {
  FlexContainer,
  StyledDiv,
} from '../../styled';

import { wallSetting } from '../../constants/settings';

const Wall = () => {
  const wallColor = useSelector(state=>state.colorsGroup.wall_main);
  const wallBarColor = useSelector(state=>state.colorsGroup.wall_bar);

  return (
    <React.Fragment>
      <FlexContainer
        height={wallSetting.height}
      >
        <StyledDiv
          width={wallSetting.width}
          bgcolor={wallColor}
        ></StyledDiv>
      </FlexContainer>
      <FlexContainer
        height={wallSetting.barHeight}
      >
        <StyledDiv
          width={wallSetting.barWidth}
          bgcolor={wallBarColor}
        ></StyledDiv>
      </FlexContainer>
    </React.Fragment>
  )
}

export default Wall;
