import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from "native-base"


export default class SignUpScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      mobileNo: 0,
      message: '',
      color: '',
      loading: false
    }
  }

  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../images/vdt.png")}
        style={{ height: 50, width: 300 }}
      />
    ),

  };
  renderIfElse = (condition, content1, content2) => {
    if (condition) {
      return content1;
    } else if (!condition) {
      return content2;
    }
  }


  getMessageStyle() {
    return {
      fontSize: 20,
      color: this.state.color,
      alignSelf: 'center'
    };
  }

  signupUser = (name, mobileNo, email, password) => {

    this.setState({
      message: '',
      loading: true
    });

    if (email === '' && password === '') {
      this.setState({
        color: 'red',
        message: 'Enter email and password!',
        loading: false
      });
      return;
    } else if (email === '') {
      this.setState({
        color: 'red',
        message: 'Enter email!',
        loading: false
      });
      return;
    } else if (password === '') {
      this.setState({
        color: 'red',
        message: 'Enter password!',
        loading: false
      });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authenticate => {
        return authenticate.user
          .updateProfile({
            displayName: name,
            mobileNo: mobileNo
          })
          .then(() => {
            this.setState({
              color: 'green',
              message: 'User created!',
              loading: false
            });
            uid = firebase.auth().currentUser.uid;
            firebase.firestore()
              .collection(uid + "Profile").doc("Info").set({
                displayName: name,
                mobileNo: mobileNo
              });
          })
          .then(() => {
            this.props.navigation.replace("LearnOrWork");
          })

      })
      .catch(error => {
        this.setState({
          color: 'red',
          message: 'Signup failed!',
          loading: false
        });
        alert(error.message)
      })
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position" enabled>
        <View style={styles.logoContainer}>

          <Text style={{ fontSize: 35 , borderBottomWidth : 3 }}>Sign Up</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Mobile No.</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              onChangeText={mobileNo => this.setState({ mobileNo })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Text style={this.getMessageStyle()}>{this.state.message}</Text>
          {this.renderIfElse(
            this.state.loading,
            <ActivityIndicator size="large" />,
            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.signupUser(
                  this.state.name,
                  this.state.mobileNo,
                  this.state.email,
                  this.state.password
                )
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
          )}
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SignIn");
            }}
          >
            <Text>Already Have A Account Signin</Text>

          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 10
  },
  logoContainer: {
    alignItems: "center",
    marginTop:  35,
    marginBottom: 30
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});

