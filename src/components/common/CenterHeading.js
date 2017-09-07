import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 80,
    marginBottom: 60,
    paddingTop: 50,
    paddingBottom: 50,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
};

const CenterHeading = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{ props.children}</Text>
  </View>
);


export { CenterHeading as default };
