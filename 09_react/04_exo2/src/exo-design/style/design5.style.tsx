import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #78290f;
  min-height: 3rem;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #006400;
  min-height: 5rem;
  flex-grow: 1;
`;

export const BoxHead= styled.div`
  background-color : #76c893;
  min-height : 3rem;
  min-width : 3rem;
  
`;
export const BoxFootRight= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color : #76c893;
  min-height : 5rem;
  border: 1px dashed red;
  flex-grow: 1;
`;

export const BoxFootLeft= styled.div`
  background-color : #76c893;
  flex-grow: 2;
`;

