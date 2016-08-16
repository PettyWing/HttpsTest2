/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class HttpsTest extends Component {
    postByHttps(){
      // let data={'username':'123','password':'123456','token':''};
      let data  = {'phone':'18867105799'};
      let TOKEN = "";
      let url = "https://218.205.115.195:7443/v2/apps/users/getcode?token=\'\'";
      console.log(url);

      var fetchOptions = {
          method: 'POST',
          headers: {
              'Accept': 'text/html',
              //json形式
              'Content-Type': 'application/octet-stream',
              'application-id':'Az6qw876jHg65j680911o933xXfVpi41',
          },
          body: JSON.stringify(data),

      };
      console.log('fetchOptions:\n'+fetchOptions.body);
      fetch(url, fetchOptions)
          .then((response) => response.json())
          .then((responseText) => {
              console.log(responseText);
          })
          .catch((error) => {
              console.error(error);
          }).done();
  }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <TouchableOpacity onPress={this.postByHttps.bind(this)} style={ styles.button }>
            <Text >GET by fetch</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
          width : 180,
          height: 50,
          justifyContent:'center',
          backgroundColor: '#e2e2e2',
          alignItems:'center',
          margin: 10,
        }
});

AppRegistry.registerComponent('HttpsTest', () => HttpsTest);
