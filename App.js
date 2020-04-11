import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import AlertBox from './components/AlertBox';

class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'default' }}
          centerComponent={{text: 'Power Notifier', style: styles.text}}
          containerStyle={{
            backgroundColor: '#008080',
            justifyContent: 'space-around',
          }}
        />
        <AlertBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;

