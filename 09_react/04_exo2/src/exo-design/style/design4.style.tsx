import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #006400;
  min-height: 10rem;
  margin-bottom: 0.5 rem;
  position: relative;
`;

export const Rectangle = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffc8dd;
  min-height: 3rem;
  border-radius: 10px;
  margin: 1rem;
`;

export const SubBox = styled.div`
  background-color: #8d99ae;
  min-height: 3rem;
  margin: 0.5rem;
`;

export const Sticker = styled.div`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  background-color: #a19767;
  min-height: 2rem;
  min-width: 2rem;
`;
