import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Hello, World</Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
