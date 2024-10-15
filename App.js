import SignUp from "./components/SignUp";
import CreateAccount from "./components/CreateAccount";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomePage" component={Homepage} />
        <Stack.Screen name="ProductsScreen" component={Products} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
