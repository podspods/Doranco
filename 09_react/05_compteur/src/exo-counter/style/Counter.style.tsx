import styled from "styled-components";
import { AppTheme } from "./App.style";

export const CounterContainer = styled.div`
  background-color: #78290f;
  min-height: 5rem;
`;
export const ResetContainer = styled.div`
  background-color: #78290f;
  min-height: 5rem;
`;
export const IncrementContainer = styled.div`
  background-color: #78290f;
  min-height: 5rem;
`;

export const MyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyP = styled.p`
  font-weight: bold;
  margin: 0rem 1rem;
`;
export const MyButton = styled.div`
  border: none;
  font-size: 1rem;
  outline: none;
  background-color: ${AppTheme.colors.medium};
  padding: 0.2rem;
  border-radius:  0.2rem;
`;
