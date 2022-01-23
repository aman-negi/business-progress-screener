
import { Button, Text,  Footer, FooterTab } from "native-base";
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class FooterMenu extends Component {


  render() {

    return (
      <Footer>
        <FooterTab>
          <Button
            vertical

            onPress={() => this.props.navigation.navigate("LearnOrWork")}>
            <Icon name="book" size = {26} />
            <Text>L{'&'} W</Text>
          </Button>
          <Button
            vertical

            onPress={() => this.props.navigation.navigate("VariousBusiness")}>
            <Icon name="folder-plus" size = {26} />
            <Text>Work</Text>
          </Button>
          <Button
            vertical

            onPress={() => this.props.navigation.navigate("Tools")}>
            <Icon name="briefcase" size = {26} />
            <Text>Tools</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Icon name="user-circle" size={26} />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({})
