import React, { Component, useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableHighlight,
} from 'react-native'
import { ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

import FooterMenu from '../h&f/Footer';

export default class VariousBusinessScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            business: null,
            
        }
    }

    static navigationOptions = {
        headerTitle: (
            <Image
                source={require("../../images/vdt.png")}
                style={{ height: 50, width: 300 }}
            />
        ),

    };





    componentDidMount() {

        var uid = firebase.auth().currentUser.uid;
        const subscriber = firebase.firestore()
            .collection(uid)
            .onSnapshot(querySnapshot => {
                const business = [];

                querySnapshot.forEach(documentSnapshot => {
                    business.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                console.log(business);
                this.setState({
                    business: business,
                    loading: false

                })

            });



        if (this.state.loading) {
            return <ActivityIndicator />;
        }
    }

    render() {

        var uid = firebase.auth().currentUser.uid;

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 27,
                                marginTop: 5,
                                marginBottom: 15,
                                marginLeft: 20,
                                marginRight: 19,
                                borderBottomWidth: 5,
                            }}

                        >Choose the one to work on</Text>
                    </View>
                    <FlatList
                        data={this.state.business}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    let BusinessName = item.BusinessName;
                                    this.props.navigation.navigate("BusinessEvaluation", { BusinessName });
                                }}
                            >
                                <View style={styles.Businesslist}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 25, }}> {item.BusinessName}  </Text>
                                        <Text style={{ fontSize: 17, }}> {item.Name} </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                    <View style={{ marginBottom: 30, marginRight: 30, justifyContent: "flex-end", alignSelf: "flex-end" }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                width: Dimensions.get('window').width * 0.15,
                                height: Dimensions.get('window').width * 0.15,
                                backgroundColor: '#FF3031',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            underlayColor='#ccc'
                            onPress={() => {
                                this.props.navigation.navigate("BusinessRegistration");
                            }}
                        >
                            <Text style={{ fontSize: 60, color: "#192A56" }}> + </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <FooterMenu navigation={this.props.navigation} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 10
    },

    Businesslist: {
        borderWidth: 2,

        margin: 8,
        padding: 5,
    },
    plusicon: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        borderWidth: 1,
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center"
    }

});

