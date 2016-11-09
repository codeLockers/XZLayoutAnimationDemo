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
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

class App extends Component{
    constructor(props) {
    super(props);
  
    this.state = {
      width:100,
      height:100
    };
  }

  componentWillMount() {
    
  }
  componentDidMount(){
    
  }

  _onPress(){
    
    LayoutAnimation.spring()
    this.setState({
      width: this.state.width+15,
      height:this.state.height+15
    });
  }

  render(){
    return(
        <View>
          <View style ={{width:this.state.width,height:this.state.height,backgroundColor:'red'}}></View>
          <TouchableOpacity onPress={this._onPress.bind(this)}>
              <Text>press me</Text>
          </TouchableOpacity>
        </View>
      )
  }
}


export default class XZLayoutAnimationDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XZLayoutAnimationDemo', () => XZLayoutAnimationDemo);
