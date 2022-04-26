import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

import PersonRenderer from './PersonRenderer';


const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={ {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          } }>
          <Text style={ {fontWeight: "bold", textAlign: "center"} }>
            Back4App React Native Relay - Query Renderer List Example
          </Text>
          <PersonRenderer />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
