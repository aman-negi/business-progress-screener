import React, { Component } from 'react'
import { Text, StyleSheet, View, Image ,TouchableWithoutFeedback,Keyboard , ScrollView } from 'react-native';
import { Form, Label, Input, Button, Item , Icon} from 'native-base';
import FooterMenu from './h&f/Footer';

import * as firebase from 'firebase';

import SignOut from './SignOut';

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: "",

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


    UpdateUser = (Name) => {

        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: Name,

        }).then(function () {
            alert("updated  Display Name: " + Name);
        }).catch(function (error) {
            // An error happened.
        });

    }

    componentDidMount() {
        var user = firebase.auth().currentUser;
        if (user != null) {
            this.setState({
                Name: user.displayName,
                Email: user.email
            })
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: "40%", marginTop: "5%" }}>
                        <View style={styles.profileicon}>
                            <Icon name="person" />
                        </View>
                    </View>

                    <View style={{ marginLeft: "10%", marginTop: 50 }}>
                        <Text style={{ fontSize: 25 }}> Name : {this.state.Name} </Text>
                        <Text style={{ fontSize: 25 }}>Email : {this.state.Email}</Text>
                    </View>
                    <View style={{ width: "30%", marginLeft: "35%", marginTop: 40 }}>
                        <SignOut navigation={this.props.navigation} />
                    </View>
                    <View style={{ width: "40%", marginLeft: "35%", marginTop: 40 }}>
                        <Text style={{ fontSize: 15 }}>
                             Or Wanna Update display Name : 

                        </Text>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Form style = {{flexDirection : "row",}}>
                            <Item floatingLabel style = {{flex: 8}}>
                                <Label>Name</Label>
                                <Input
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    onChangeText={Name => this.setState({ Name })}
                                />
                            </Item>

                            <Button
                                style={{flex : 2}}
                                full
                                rounded
                                onPress={() => {
                                    this.UpdateUser(
                                        this.state.Name,
                                    )
                                }}
                            >
                                <Text style={styles.buttonText}>Update</Text>
                            </Button>

                        </Form>
                    </View>

                </View>
                </ScrollView>
                <View>
                    <FooterMenu navigation={this.props.navigation} />
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 10
    },
    profileicon: {
        width: 88,
        height: 88,
        borderRadius: 88 / 2,
        borderWidth: 3,
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})
