import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Image, 
  ActivityIndicator,
  ScrollView, 
  TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
import FooterMenu from '../h&f/Footer'

export default class BusinessEvaluationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      Name: "",
      BusinessName: "",
      IdeaRating: "",
      TeamRating: "",
      BusinessModel: "",
      FundingRating: "",
      TimingRating: "",
      EfficiencyRating: "",
      TotalRating: ""
    }
  }

  static navigationOptions = {
    headerTitle: (
      <Image 
      source = {require("../../images/vdt.png")}
      style = {{height: 50, width: 300}}
      />
  ),

  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const BusinessName = params ? params.BusinessName : null;
    const uid = firebase.auth().currentUser.uid;

    firebase
      .firestore()
      .collection(uid)
      .doc(BusinessName)
      .onSnapshot(documentSnapshot => {


        this.setState({
          BusinessName: documentSnapshot.data().BusinessName,
          Name: documentSnapshot.data().Name,
          EfficiencyRating: documentSnapshot.data().EfficiencyRating,
          BusinessModel : documentSnapshot.data().BusinessModel,
          FundingRating: documentSnapshot.data().FundingRating,
          IdeaRating: documentSnapshot.data().IdeaRating,
          TeamRating: documentSnapshot.data().TeamRating,
          TimingRating: documentSnapshot.data().TimingRating,
          TotalRating: documentSnapshot.data().TotalRating,
          
          loading: false
        })

      });
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
  }


  render() {



    return (

      
        <View style={styles.container}>
          <ScrollView>
            <View>
              <Text style={{ 
                fontSize: 35, 
                justifyContent : "center",
                alignItems : "center",
                marginLeft : 15 }}>{this.state.BusinessName} Ratings : </Text>
            </View>
            <View style = {{marginLeft : 10}}>
              <Text style = {{
                fontSize : 15
              }}>
                Tap on the one to learn how to increase ratings.
              </Text>
              <Text style = {{
                fontSize : 20,
                marginLeft : "44%"
              }}>
                OR
              </Text>
              <Text style = {{
                fontSize : 15
              }}>
                Use tools to enhance those by implementing things.
              </Text>
            </View>
            <View style ={{marginTop : 5}}>
              <TouchableOpacity
              
              onPress = {() => {}}
              
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Idea Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.IdeaRating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Timing Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.TimingRating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Efficiency Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.EfficiencyRating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Team Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.TeamRating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Business Model Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.BusinessModel}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Funding Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.FundingRating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {}}
              >
                <View style={styles.ratingdisplay}>
                  <Text style={styles.listtextheading}>Total Rating : </Text>
                  <Text style={styles.listtextheadingno}>{this.state.TotalRating}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
              onPress = {() => {
                this.props.navigation.navigate("Tools");
              }}
              >
                <View style = {styles.usetoolbutton}>
                  <Text style = {{
                    fontSize : 30,
                    color : "#EAF0F1"
                  }}>Use Tools</Text>
                </View>
              </TouchableOpacity>
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
    marginTop : 10
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10
  },
  ratingdisplay: {
    borderWidth: 1,
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginLeft : 10,
    marginRight : 10,
    padding:10

  },
  listtextheading: {
    marginLeft: 7,
    fontSize: 25
  },
  listtextheadingno: {
    marginRight: 8,
    fontSize: 25,

  },
  usetoolbutton : {
    marginTop : 30,
    marginLeft : 100,
    marginBottom : 25,
    justifyContent : "center",
    alignItems: "center",
    borderWidth : 1,
    borderRadius : 35,
    height : 70,
    width : 200,
    backgroundColor : "#8B78E6",
  },
})
