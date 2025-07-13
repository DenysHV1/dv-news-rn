import MainScreen from "./screens/MainScreen.jsx";
import NewsScreen from "./screens/NewsScreen.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/header.jsx";

const Stack = createStackNavigator();

export default function Navigate() {
  
  const options = ({ navigation }) => ({
    header: () => <Header navigation={navigation} />,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{ animationEnabled: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={options} />
        <Stack.Screen name="News" component={NewsScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
