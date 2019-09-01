import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import NewMessageForm from './NewMessageForm';
import Conversation from './Conversation';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>GQL-Chat Native</Text>
            <NewMessageForm />
            <Conversation />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    </ApolloProvider>
  );
};

export default App;
