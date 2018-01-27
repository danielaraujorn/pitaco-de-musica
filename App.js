import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./screens/homescreen";
import SearchScreen from "./screens/search";

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTitle: "Pesquisar"
    }
  }
});

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
