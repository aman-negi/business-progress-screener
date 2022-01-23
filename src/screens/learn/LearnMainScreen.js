import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FooterMenu from '../h&f/Footer'

export default class LearnMainScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <Image
                source={require("../../images/vdt.png")}
                style={{ height: 50, width: 300 }}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={styles.headerTitle}>
                            <Text style={{
                                fontSize: 30,
                            }}>Pre-Requisites</Text>
                            <Text
                                style={{
                                    fontSize: 22,
                                }}>Of Business</Text>
                        </View>
                        <View style={styles.selectionbox}>
                            <View style={styles.para}>
                                <Text>
                                    Before Starting a business just keep in mind about these things,
                                    just know how to manipualte these things according to your final goal in business.
                                    It doesnt matter what kind of your business, these things matter in each aspect.
                                </Text>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Idea</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Working Team</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Business Model</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Funding or Finance</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Timing</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selection}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text style={{ fontSize: 15 }}>Efficiency {'&'} Influence</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.selectionbox}>
                            <View style={{ marginLeft: 7, marginTop: 10 }}>
                                <Text style={{ fontSize: 24 }}>Govt. Assistance in Aid for startups</Text>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => { }}>
                                    <Text></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20}}>
                                        <Text style={{ fontSize: 16 }}>1.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>MSME Govt Service - for established business</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://www.startupindia.gov.in/content/sih/en/government-schemes.html')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10}}>
                                        <Text style={{ fontSize: 16 }}>2.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>For new Startups</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://aim.gov.in/atal-incubation-centres.php')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10}}>
                                        <Text style={{ fontSize: 16 }}>3.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>Atal Innovation Mission - Under NITI Aayog</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://www.startupindia.gov.in/content/sih/en/government-schemes/newgen-innovation-and-entrepreneurship-development-centre.html')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10}}>
                                        <Text style={{ fontSize: 16 }}>4.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>NewGEN IEDC - for innovation and science tech</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://niti.gov.in/women-entrepreneurship-platform-wep#:~:text=The%20idea%20of%20setting%20up,of%20the%20United%20States%20ofs')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10}}>
                                        <Text style={{ fontSize: 16 }}>5.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>The Women Entrepreneurship Platform (WEP) -by NITI Aayog</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://www.startupindia.gov.in/content/sih/en/government-schemes/venture-capital-scheme.htmls')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10}}>
                                        <Text style={{ fontSize: 16 }}>6.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>Venture Capital Scheme for Agri-Business Development</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.help}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('https://www.startupindia.gov.in/content/sih/en/government-schemes/sustainable-finance-scheme.html')
                                    }}>
                                    <View style = {{flexDirection :"row" ,marginLeft : 20, marginTop :10,marginBottom:30}}>
                                        <Text style={{ fontSize: 16 }}>7.</Text>
                                        <Text style={{ fontSize: 16 , marginLeft : 10}}>Sustainable Finance Scheme - for sustainable development projects</Text>
                                    </View>
                                </TouchableOpacity>
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
        padding: 5,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8
    },
    headerTitle: {
        justifyContent: "center",
        alignItems: "center"
    },
    preRequisite: {
        alignItems: "stretch"
    },
    para: {
        alignItems: "center",
        marginLeft: 8
    }

})
