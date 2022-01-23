import React, { Component } from 'react'
import { Text, View,  SafeAreaView, TouchableOpacity, Image,StyleSheet,  } from 'react-native'
import FooterMenu from './h&f/Footer'

import * as firebase from 'firebase';

export default class LearnOrWorkScreen extends Component {

    static navigationOptions= {
      headerTitle: (
        <Image 
        source = {require("../images/vdt.png")}
        style = {{height: 50, width: 300}}
        />
    ),
  
      };
    
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


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{flex :1}}>

                    <View style = {styles.choose}>
                    <View style = {{ 
                                    padding : 20,
                                    margin: 20,
                                    borderWidth : 1,
                                    borderRadius : 15,
                                    borderColor: "#FFF222",
                            
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 1.0,
                            shadowRadius: 2,
                            elevation:3,}}
                        >
                        <View style = {styles.option1}>
                            <TouchableOpacity
                            onPress={() => {
                              this.props.navigation.navigate("LearnMain")
                            }}>
                                <Text style ={{
                                    textShadowOffset: {width: 10,height: 10},
                                    fontSize : 45

                                }}>LEARN</Text>
                                <Text>Before entering or starting a business learn some pre-requisite knowledege</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                        <View style = {{ 
                                    padding : 20,
                                    margin: 20,
                                    borderWidth : 1,
                                    borderRadius : 15,
                                    borderColor: "#7CEC9F",
                            
                            shadowColor: "#7CEC9F",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 1.0,
                            shadowRadius: 2,
                            elevation:3,}}
                        >
                        <View style = {styles.option2}>
                            <TouchableOpacity
                            onPress={() => {
                              this.props.navigation.navigate("VariousBusiness");
                            }}>
                                <Text
                                style ={{
                                    textShadowOffset: {width: 10,height: 10},
                                    fontSize : 45

                                }}
                                >WORK</Text>
                                <Text>If you want to boost your business just work with us, ain't it simple</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                </View>
                <View>
                <FooterMenu navigation={this.props.navigation} />     
                </View>
                           
            </SafeAreaView>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      marginTop : 4
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 25,
      marginBottom: 10,
      flex:1
    },
    choose :{
        padding: 20,
        width: "100%",
        justifyContent: "space-around",
        flex:9
    },
    option1:{
        backgroundColor: "#FFF222",
        padding : 20,
        margin: 20,
        borderWidth : 1,
        borderRadius : 15,
        borderColor: "#000",

    },
    option2:{
        backgroundColor: "#7CEC9F",
        padding : 20,
        margin: 20,
        borderWidth : 1,
        borderRadius : 15,
        borderColor: "black",

    },

  });
  