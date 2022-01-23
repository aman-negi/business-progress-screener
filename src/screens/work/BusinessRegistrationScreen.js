import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  KeyboardAvoidingView, 
  TouchableOpacity ,
  ScrollView,
} from 'react-native';

import * as firebase from "firebase";

import {Form, Item, Input, Label,Picker, Button} from "native-base"
import FooterMenu from '../h&f/Footer';


export default class BusinessRegistrationScreen extends React.Component {


  constructor(props){
    super(props);
    this.state={
      name:"",
      BusinessName:"",
      IdeaRating:"",
      TeamRating:"",
      BusinessModel:"",
      FundingRating:"",
      TimingRating:"",
      EfficiencyRating:"",
    }
  }

  static navigationOptions= {
    headerTitle: (
      <Image 
      source = {require("../../images/vdt.png")}
      style = {{height: 50, width: 300}}
      />
  ),

  };

  register=(
  
  BusinessName,
  name,
  IdeaRating ,
  TeamRating ,
  BusinessModel ,
  FundingRating ,
  TimingRating ,
  EfficiencyRating,
  uid ) => {
    
    let totalrating =Number(IdeaRating) + Number(TeamRating) + Number(BusinessModel) 
                      + Number(FundingRating) + Number(TimingRating) +Number(EfficiencyRating);
    firebase
    .firestore()
    .collection( String(uid) ).doc(String(BusinessName)).set({
      uid : uid,
      BusinessName : BusinessName ,
      Name : name,
      IdeaRating : Number(IdeaRating),
      TeamRating : Number(TeamRating),
      BusinessModel : Number(BusinessModel),
      FundingRating : Number(FundingRating),
      TimingRating : Number(TimingRating),
      EfficiencyRating : Number(EfficiencyRating),
      TotalRating :  Number(totalrating)
    })
    .then( () => {
     this.props.navigation.replace("BusinessEvaluation", { BusinessName });
    })
    .catch( error =>{
      alert(error.message)
    });
  };


    render(){
    var uid = firebase.auth().currentUser.uid;    
        return (
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style = {{flex :1}}>
            <ScrollView>

              <Text
              style ={{
                fontWeight : "bold",
                fontSize : 25, 
                marginTop : 5,
                marginBottom:15, 
                marginLeft :50,
                marginRight:70,
                borderBottomWidth : 5,
              }}
              >Register Your Business</Text>
              <Form style = {styles.form}>
                <Item floatingLabel>
                    <Label>Business Name</Label>
                    <Input
                    autoCapitalize = "none"
                    autoCorrect={false}
                    keyboardType="name-phone-pad"
                    onChangeText={BusinessName => this.setState({BusinessName})}
                    />
                </Item>  
                <Item floatingLabel>
                    <Label>Name</Label>
                    <Input
                    autoCapitalize = "none"
                    autoCorrect={false}
                    keyboardType="name-phone-pad"
                    onChangeText={name => this.setState({name})}
                    />
                </Item>
                <Text style ={{
                  fontWeight : "bold",
                  fontSize : 30, 
                  marginTop : 15,
                  }}>
                  Rate Your Business</Text>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Idea
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 170,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.IdeaRating}
                    onValueChange={value => {this.setState({IdeaRating : value});}}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Team
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 160,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.TeamRating}
                    onValueChange={value => this.setState({TeamRating : value})}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Business Model
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 82,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.BusinessModel}
                    onValueChange={value => this.setState({BusinessModel : value})}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Funding
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 142,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.FundingRating}
                    onValueChange={value => this.setState({FundingRating : value})}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Timing
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 150,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.TimingRating}
                    onValueChange={value => this.setState({TimingRating : value})}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Item picker>
                  <Label style= {{fontWeight :"bold"}}>
                    Rate Your Idea Efficiency {"&"} Influence
                  </Label>
                  <Picker
                    mode="dropdown"
                    style={{ width: 20, marginLeft : 1,  }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.EfficiencyRating}
                    onValueChange={value => this.setState({EfficiencyRating : value})}
                  >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </Item>
                <Button
                style={styles.button}
                full
                rounded
                onPress={() => {
                  this.register(
                  this.state.BusinessName,
                  this.state.name,
                  this.state.IdeaRating ,
                  this.state.TeamRating ,
                  this.state.BusinessModel ,
                  this.state.FundingRating ,
                  this.state.TimingRating ,
                  this.state.EfficiencyRating,
                  uid
                  )
                }}

                >
                    <Text style={styles.buttonText}>Register</Text>
                </Button>

              </Form>
              <View style={styles.footer}>
                <Text style = {{fontSize:20}}>OR</Text>
                <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate("LearnOrWork");
                }}
                >
                  <Text style = {{
                  marginTop : 8,
                  fontSize : 17,
                  color: "#3C40C6"

                  }}>Go Back And learn</Text>

                </TouchableOpacity>
              </View>
            </ScrollView>
            </View>
            <FooterMenu navigation={this.props.navigation}  />      
          
          </KeyboardAvoidingView>
          );
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
    marginTop: 25,
    marginBottom: 15
  },
  form: {
    padding: 10,
    width: "99%",
    marginLeft : 8,
    alignItems : "center",
    

  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center",
    marginTop:35,
    marginBottom : 20
    
  }
});

