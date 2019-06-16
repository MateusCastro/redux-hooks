import React from "react";
import { StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Title,
  Description,
  Button,
  ButtonTitle,
  ButtonContent
} from "./styles";
import * as Actions from "../../store/actions/counter";

export default function Main() {
  const counter = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(Actions.add());
  };

  const rem = () => {
    dispatch(Actions.rem());
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>{counter}</Title>
      <Description>To get started, edit src/pages/Main/Index.js</Description>
      <ButtonContent>
        <Button onPress={rem}>
          <ButtonTitle>-</ButtonTitle>
        </Button>
        <Button onPress={add}>
          <ButtonTitle>+</ButtonTitle>
        </Button>
      </ButtonContent>
    </Container>
  );
}

Main.navigationOptions = {
  header: null
};
