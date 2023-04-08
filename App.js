import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfRecipes from './ListOfRecipes';
import RecipeDetail from './RecipeDetail';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //FlatListOfRecipes is just here as a place holder.
    <NavigationContainer>
    <Stack.Navigator initialRouteName='List Of Recipes'>
      <Stack.Screen name = 'List Of Recipes' component={ListOfRecipes} />
      <Stack.Screen name = 'Recipe Detail' component={RecipeDetail} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

