import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from './src/screen/getStarted/getStarted.screen';
import HomeScreen from './src/screen/Home/home.screen';
import BeginForm from './src/screen/beginForm/beginForm.screen';
import ChooseYourAvatar from './src/screen/beginForm/beginchooseAvatar.screen';
import {UserProvider} from './src/context/userContext';
import AddOrEditScreen from './src/screen/addOrEdit/addOrEditContact.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState<boolean | null>(null);
  
    React.useEffect(() => {
      const checkFirstLaunch = async () => {
        const hasCompletedOnboarding = await AsyncStorage.getItem('onboardingCompleted');
        setIsFirstLaunch(hasCompletedOnboarding === null);
      };
  
      checkFirstLaunch();
    }, []);
  
    if (isFirstLaunch === null) {
      return null;
    }

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isFirstLaunch ? 'GetStarted' : 'Home'}>
          <Stack.Screen
            name="GetStarted"
            component={GetStartedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Begin"
            component={BeginForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChooseAvatar"
            component={ChooseYourAvatar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form"
            component={AddOrEditScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default MyStack;
