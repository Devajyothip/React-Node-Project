import React from 'react';
import { useSelector } from 'react-redux';

import {
  FlexContainer,
  RelativeContainer,
  StyledDiv,
} from '../../styled';

import { curtainSetting } from '../../constants/settings';

const Curtain = () => {
  const firstColor = useSelector(state=>state.colorsGroup.curtain_primary);
  const secondColor = useSelector(state=>state.colorsGroup.curtain_secondary);
  const barColor = useSelector(state=>state.colorsGroup.curtain_bar);
  
  return (
    <StyledDiv
      position="absolute"
      left="55%"
      top="10%"
      width={'20%'}
      height={'75%'}
    >
      <RelativeContainer>
        <StyledDiv
          position="absolute"
          left="0"
          top="0"
          height={curtainSetting.barHeight}
          bgcolor={barColor}
        ></StyledDiv>
        <FlexContainer
          width="95%"
          margin="0 auto"
        >
          {[...Array(curtainSetting.count)].map((x, i) =>{
            let bgColor = secondColor;
            if(i%2===0)
              bgColor=firstColor;
              
            return <StyledDiv
              width={100/curtainSetting.count+'%'}
              bgcolor={bgColor}
              zIndex="10"
              key={i}
            ></StyledDiv>
          })}        
        </FlexContainer>
      </RelativeContainer>
    </StyledDiv>
  )
}

export default Curtain;
