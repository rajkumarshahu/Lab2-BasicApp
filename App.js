import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';

export default function App() {

  const [value, onChangeText] = useState('Placeholder');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
    <View></View>
    <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        style = {styles.edit}
        clearTextOnFocus
        onChangeText = {text => onChangeText(text)}
        value = {value}
      />
      <Text>{value}</Text>
      <Button
        style = {styles.button}
        title='clear'
        color='red'
        onPress={() => onChangeText('')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  edit: {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
  },
  text: {

  },
  button: {
    backgroundColor: 'blue',
    color: "white",
  }
});
