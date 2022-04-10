import styled from "styled-components/native";

export const Container = styled.View`
  width: 90px;
  height: 90px;
  top: -30px;
  background-color: ${({ theme }) => theme.colors.placeholder};
  justify-content: center;
  align-items: center;
  border-radius: 45px;
`;

export const IconHome = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.logoDetail};
  justify-content: center;
  align-items: center;
`;
