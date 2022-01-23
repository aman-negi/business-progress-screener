import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';
import { Form, Label, Input, Button, Item } from 'native-base';
import { ActivityIndicator, Colors } from 'react-native-paper';




export default class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: '',
      color: '',
      loggedIn: false,
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

  //Dynamically changes the style of the "this.state.message" text below
  getMessageStyle() {
    return {
      fontSize: 20,
      color: this.state.color,
      alignSelf: 'center'
    };
  }

  signInUser = (email, password) => {

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
      .signInWithEmailAndPassword(email, password)
      .then(() => {       //Sign Up a user successfully
        this.setState({
          color: 'green',
          message: 'User created!',
          loading: false
        });
      })
      .then(() => {
        this.props.navigation.replace("LearnOrWork");
      })
      .catch(error => {
        this.setState({
          color: 'red',
          message: 'Signup failed!',
          loading: false
        });
        alert(error.message);
      });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="position" enabled>
          <View style={styles.logoContainer}>
            <Text style={{
              marginTop: 20,
              fontSize: 35,
              color: '#192A56',
              fontWeight: 'bold',
              borderStyle: "solid",
              borderBottomWidth: 4,
              padding: 4
            }}>Sign In</Text>
          </View>
          <Form style={styles.form}>
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
                  this.signInUser(
                    this.state.email,
                    this.state.password
                  )
                }}

              >
                <Text style={styles.buttonText}>Sign In</Text>
              </Button>
            )}


          </Form>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={{marginTop :10}}>Create a new Acoount</Text>

            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    marginLeft: 50,
    marginTop: 40,
    marginBottom: 20,
    height: 100,
    width: 300,
    justifyContent: "space-between"

  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30,
    marginTop: 50,
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

