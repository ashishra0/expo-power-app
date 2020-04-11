import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {Button, Card} from 'react-native-elements';

class AlertBox extends React.Component {
  state = {
    url: 'https://crimson-north-ceiling.glitch.me',
    loaded: true,
    preData: null,
    data: null,
  };

  kickStart = () => {
    return fetch(this.state.url)
      .then((res) => this.setState({preData: res.status}))
      .then(this.getPowerStatus)
      .catch((err) => {
        console.log(err);
      });
  };

  getPowerStatus = () => {
    this.setState({loaded: false});
    if (this.state.preData === 200) {
      return axios
        .get(this.state.url + '/response')
        .then((res) => this.showData(res.data.status))
        .catch((err) => this.showError(err));
    }
  };

  showData = (data) => {
    this.setState({loaded: true, data: data});
  };

  showError = (err) => {
    this.setState({loaded: true, data: err});
  };

  render() {
    return (
      <View>
        <Card title="CHECK POWER">
          {!this.state.loaded && (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
          <Text style={styles.text}>{this.state.data}</Text>
          <Button
            title="Tap Here"
            type="outline"
            onPress={() => this.kickStart()}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default AlertBox;
