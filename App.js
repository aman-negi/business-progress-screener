import React from 'react';

import LearnOrWorkScreen from './src/screens/LearnOrWorkScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import VariousBusinessScreen from './src/screens/work/VariousBusinesscreen';
import ToolsScreen from './src/screens/work/ToolsScreen';
import BusinessRegistrationScreen from './src/screens/work/BusinessRegistrationScreen';
import BusinessEvaluationScreen from './src/screens/work/BusinessEvaluationScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import LearnMainScreen from './src/screens/learn/LearnMainScreen';


import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import * as firebase from 'firebase';




var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const MainNavigator = createStackNavigator(
  {
    Loading : {screen : LoadingScreen},
    SignIn: {screen :SignInScreen},
    SignUp : {screen : SignUpScreen},
    LearnOrWork : {screen : LearnOrWorkScreen},
    LearnMain: {screen : LearnMainScreen},
    VariousBusiness : {screen : VariousBusinessScreen},
    BusinessRegistration : {screen : BusinessRegistrationScreen},
    BusinessEvaluation : {screen : BusinessEvaluationScreen},
    Tools : {screen : ToolsScreen},
    Profile : { screen : ProfileScreen}
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  
  
  }, 

)

//create app container
const App = createAppContainer(MainNavigator);
export default App;