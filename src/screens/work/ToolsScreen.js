import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {Button} from "native-base"
import FooterMenu from '../h&f/Footer'
import * as firebase from 'firebase'

export default class ToolsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WebsiteSelected: false,
            MobileAppSelected: false,
            ComputerSoftwareSelected: false,
            DataAnalysisSelected: false,
            CloudServiceSelected: false,
            AccountantServiceSelected: false,
            BusinessConsultancySelected: false
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

    toggleSelectedWebsite = () => {
        this.setState({ ...this.state, WebsiteSelected: !this.state.WebsiteSelected })
    }

    EnterTheService = (
        WebsiteSelected,
        MobileAppSelected,
        ComputerSoftwareSelected,
        DataAnalysisSelected,
        CloudServiceSelected,
        AccountantServiceSelected,
        BusinessConsultancySelected
    ) => {

        var uid = firebase.auth().currentUser.uid;

        firebase
            .firestore()
            .collection(uid+"ServiceAskedFor").doc("ServiceAskedFor").set({

                WebsiteSelected: WebsiteSelected,
                MobileAppSelected: MobileAppSelected,
                ComputerSoftwareSelected: ComputerSoftwareSelected,
                DataAnalysisSelected: DataAnalysisSelected,
                CloudServiceSelected: CloudServiceSelected,
                AccountantServiceSelected: AccountantServiceSelected,
                BusinessConsultancySelected: BusinessConsultancySelected
            })
            .then(() => {
                alert("Updated The Service asked for we'll contact you soon");
            })
            .catch(error => {
                alert(error.message)
            });


    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 25 }}>Tap On The Service</Text>
                            <Text style={{ fontSize: 23 }}>You Want</Text>
                        </View>
                        <View style={styles.selectionbox}>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, WebsiteSelected: !this.state.WebsiteSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Website Service</Text>
                                        <Text>{this.state.WebsiteSelected ? "👍" : "👎"}</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, MobileAppSelected: !this.state.MobileAppSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Mobile Application Service</Text>
                                        <Text>{this.state.MobileAppSelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, ComputerSoftwareSelected: !this.state.ComputerSoftwareSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Computer Software Service</Text>
                                        <Text>{this.state.ComputerSoftwareSelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, DataAnalysisSelected: !this.state.DataAnalysisSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Data Analysis Service</Text>
                                        <Text>{this.state.DataAnalysisSelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, CloudServiceSelected: !this.state.CloudServiceSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Cloud Computing Service</Text>
                                        <Text>{this.state.CloudServiceSelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, AccountantServiceSelected: !this.state.AccountantServiceSelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Accountancy Service</Text>
                                        <Text>{this.state.AccountantServiceSelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ ...this.state, BusinessConsultancySelected: !this.state.BusinessConsultancySelected }) }}
                                >
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text>Business Consultancy Service</Text>
                                        <Text>{this.state.BusinessConsultancySelected ? "👍" : "👎"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                <Button
                                    style={styles.button}
                                    title="submit"
                                    onPress={() => {
                                        this.EnterTheService(
                                            this.state.WebsiteSelected,
                                            this.state.MobileAppSelected,
                                            this.state.ComputerSoftwareSelected,
                                            this.state.DataAnalysisSelected,
                                            this.state.CloudServiceSelected,
                                            this.state.AccountantServiceSelected,
                                            this.state.BusinessConsultancySelected
                                        );
                                    }}
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>


                <View>
                    <FooterMenu navigation={this.props.navigation} />
                </View>
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
    selectionbox: {
        justifyContent: "space-around",
    },
    selection: {
        borderWidth: 1,
        padding: 15,
        marginTop: 10
    }

})
