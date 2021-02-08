import React from 'react';
import { useSelector } from 'react-redux';

import {
  FlexContainer,
  RelativeContainer,
  StyledDiv,
} from '../../styled';

import { sofaSetting } from '../../constants/settings';

const Sofa = () => {
  const primaryColor = useSelector(state=>state.colorsGroup.sofa_primary);
  const secondaryColor = useSelector(state=>state.colorsGroup.sofa_secondary);

  return (
    <StyledDiv
      position="absolute"
      left="25%"
      top="-30%"
      width={sofaSetting.width}
      height={sofaSetting.height}
      zIndex="20"
    >
      <RelativeContainer>
        <FlexContainer>
          <StyledDiv
            width={sofaSetting.centerWidth}
            height={sofaSetting.centerHeight}
            bgcolor={primaryColor}
            radius={sofaSetting.radius}
          ></StyledDiv>
        </FlexContainer>
        <StyledDiv
          position="absolute"
          left="0"
          top="20%"
          height={sofaSetting.sideHeight}
        >
          <FlexContainer>
            <StyledDiv
              width={sofaSetting.sideWidth}
              bgcolor={primaryColor}
              radius={sofaSetting.radius}
            ></StyledDiv>
            <StyledDiv
              width={sofaSetting.bottomWidth}
            >
              <StyledDiv
                height={sofaSetting.marginTopHeight}
              ></StyledDiv>
              <StyledDiv
                height={sofaSetting.bottomHeight}
                bgcolor={secondaryColor}
              ></StyledDiv>
            </StyledDiv>
            <StyledDiv
              width={sofaSetting.sideWidth}
              bgcolor={primaryColor}
              radius={sofaSetting.radius}
            ></StyledDiv>
          </FlexContainer>
        </StyledDiv>
      </RelativeContainer>
    </StyledDiv>
  )
}

export default Sofa;
