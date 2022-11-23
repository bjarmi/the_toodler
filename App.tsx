import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BoardRoute, HomeRoute, ListRoute } from "./src/common/constants";
import BoardPage from "./src/components/pages/boardPage";
import HomePage from "./src/components/pages/homePage";
import ListPage from "./src/components/pages/listPage";
import { enableMapSet } from "immer";

const Stack = createNativeStackNavigator();
// Allow Redux store to use immutable objects.
// https://immerjs.github.io/immer/complex-objects/
enableMapSet();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeRoute}>
        <Stack.Screen
          name={HomeRoute}
          component={HomePage}
          options={{ title: "The Toodler" }}
        />
        <Stack.Screen name={BoardRoute} component={BoardPage} />
        <Stack.Screen name={ListRoute} component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
