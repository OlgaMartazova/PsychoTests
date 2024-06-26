import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ListScreen } from './screens/ListScreen';
import { InitScreen } from './screens/InitScreen';
import { InfoScreen } from './screens/InfoScreen';
import { TestScreen } from './screens/TestScreen';
import { ResultScreen } from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Init'
          component={InitScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name={'Психологические тесты'}
          component={ListScreen}
          options={{
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerTitleStyle: styles.headerTitleStyle
          }}
        />
        <Stack.Screen
          name='Info'
          component={InfoScreen}
          options={navigationOptions(styles)}
        />
        <Stack.Screen
          name={'Test'}
          component={TestScreen}
          options={navigationOptions(styles)}
        />
        <Stack.Screen
          name={'Result'}
          component={ResultScreen}
          options={() => ({
            ...navigationOptions(styles),
            headerBackVisible: false
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions = (styles) => ({
  headerStyle: styles.headerStyle,
  headerTintColor: styles.headerTintColor,
  headerTitleStyle: styles.headerTitleStyle,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
});

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#A9E0B9',
  },
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
  },
});

export default App;
