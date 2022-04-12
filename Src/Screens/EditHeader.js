import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const EditDetails = ({navigation}) => {
  const [text, onChangeText] = useState('Joti Kumari');
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={styles.profilePicture}
        source={require('../Assets/profile2.jpg')}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen', {title: {text}})}
          style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    marginTop: 150,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    marginTop: 40,
    textAlign: 'center',
  },
  buttonView: {
    marginTop: 'auto',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#EEEDE7',
    width: 250,
    padding: 20,
    marginTop: 'auto',
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
export default EditDetails;
