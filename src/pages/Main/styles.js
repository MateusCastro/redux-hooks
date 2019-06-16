import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ff9f5d;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 70px;
  font-weight: bold;
  color: #ffe9da;
  margin-bottom: 30px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ac4803;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 50px;
  background: #ac4803;
  border-radius: 3px;
`;

export const ButtonTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #ffe9da;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
