import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent?props.justifyContent: 'center'};
  align-items: ${props => props.justifyContent?props.justifyContent: 'center'};
  width: ${props => props.width?props.width: '100%'};
  height: ${props => props.height?props.height: '100%'};
  margin: ${props => props.margin};
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: ${props => props.width?props.width: '100%'};
  height: ${props => props.height?props.height: '100%'};
`;

export const StyledDiv = styled.div`
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.width?props.width: '100%'};
  height: ${props => props.height?props.height: '100%'};
  background-color: ${props => props.bgcolor};
  border-radius: ${props => props.radius};
  transform: ${props => props.transform};
  z-index: ${props => props.zIndex};
`;
