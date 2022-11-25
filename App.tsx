import { enableMapSet } from "immer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardPage from "./src/components/pages/boardPage";
import HomePage from "./src/components/pages/homePage";
import ListPage from "./src/components/pages/listPage";
import { PageParams } from "./src/common/type";

// Allow Redux store to use immutable objects.
// https://immerjs.github.io/immer/complex-objects/
enableMapSet();
const Stack = createNativeStackNavigator<PageParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "The Toodler" }}
        />
        <Stack.Screen name="BoardPage" component={BoardPage} />
        <Stack.Screen name="ListPage" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
