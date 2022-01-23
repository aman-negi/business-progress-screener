import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import * as firebase from 'firebase';




export default class SignOut extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      name:"",
      uid :""
    };
  }


  componentDidMount(){
    firebase.auth().onAuthStateChanged(authenticate =>{
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name:authenticate.displayName,
          uid : authenticate.uid
        })
      } else {
        this.props.navigation.replace("SignIn");
      }
    } )
  }
  signOutUser = () => {
    firebase.
      auth()
      .signOut()
      .then({

      })
      .catch( error => {alert(error.message)})
  }

    render(){
        return (

              <Button
              stlye={styles.button}
              full
              rounded
              success
              onPress = {() => {this.signOutUser()}}
              >
                <Text style ={styles.buttonText}>
                  Sign Out
                </Text>
              </Button>
        
            
          );
    }

}


const styles = StyleSheet.create({


  button: {
    marginTop: 20,
    
  },
  buttonText: {
    color: "#fff"
  }
});