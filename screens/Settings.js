import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  ScrollView,
  Image,
  View
} from 'react-native';
import NavBar from './../src/navbar';
import { Container, Header, Content, Card, CardItem, Body, Text, Icon, Right } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#FEEDA4'}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./../src/img/logo.png')}
          />
        </Header>
        <Content style={{backgroundColor: '#FEEDA4'}}>
          <Card>
            <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>Currency                 </Text>
              <Right>
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
            </CardItem>
            <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>Audio and Sound     </Text>
              <Right>
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
             </CardItem>
             <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>Notifications              </Text>
              <Right>
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
             </CardItem>
             <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>Privacy                       </Text>
              <Right> 
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
             </CardItem>
             <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>About Us                     </Text>
              <Right>
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
             </CardItem>
             <CardItem style={{backgroundColor: '#C8E4D1'}}>
              <Text>Terms and Conditions</Text>
              <Right>
              <Image
                style={{width: 15, height: 15}}
                source={require('./../src/img/arrow.png')}
             />
              </Right>
             </CardItem>
          </Card>
        </Content>
        <NavBar style={{flexDirection: 'column', justifyContent: 'space-between'}} />
      </Container>
    );
  }
}

AppRegistry.registerComponent(
  'penny',
  () => App);
