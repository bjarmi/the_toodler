import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardPage from "./src/components/pages/boardPage";
import HomePage from "./src/components/pages/homePage";
import ListPage from "./src/components/pages/listPage";
import { PageParams } from "./src/common/type";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator<PageParams>();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
