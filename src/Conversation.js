import React, {Fragment, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOAD_MESSAGES_QUERY = gql`
  query {
    messages {
      id
      text
    }
  }
`;

const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription restaurantAdded {
    messageSent {
      id
      text
    }
  }
`;

const updateQuery = (previousResult, {subscriptionData}) => {
  console.log({previousResult, subscriptionData});
  const newMessage = {...subscriptionData.data.messageSent};
  return {
    messages: [...previousResult.messages, newMessage],
  };
};

function Conversation() {
  const {loading, error, data, subscribeToMore} = useQuery(LOAD_MESSAGES_QUERY);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    subscribeToMore({
      document: NEW_MESSAGE_SUBSCRIPTION,
      updateQuery,
    });
  }, []);
  /* eslint-enable  */

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }

  console.log({data});

  return (
    <View>
      <FlatList
        data={data.messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
}

export default Conversation;
