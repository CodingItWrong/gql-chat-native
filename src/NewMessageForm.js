import React, {Fragment, useState} from 'react';
import {Button, TextInput} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SEND_MESSAGE_MUTATION = gql`
  mutation($text: String!) {
    sendMessage(text: $text) {
      id
      text
    }
  }
`;

function NewMessageForm() {
  const [messageText, setMessageText] = useState('');
  const [sendMessageMutation] = useMutation(SEND_MESSAGE_MUTATION);

  const sendMessage = e => {
    sendMessageMutation({variables: {text: messageText}});
    setMessageText('');
  };

  return (
    <Fragment>
      <TextInput
        value={messageText}
        onChangeText={setMessageText}
        style={{borderColor: 'gray', borderWidth: 1, padding: 4}}
      />
      <Button title="Send" onPress={sendMessage} />
    </Fragment>
  );
}

export default NewMessageForm;
