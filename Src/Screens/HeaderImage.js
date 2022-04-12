import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
const HeaderImage = () => {
  return (
    <View style={styles.ImageView}>
      <Image
        style={styles.profilePicture}
        source={require('../Assets/profile2.jpg')}
      />
      <Text style={styles.text}>Joti Kumari</Text>
    </View>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  ImageView: {
    height: 70,
    borderRadius: 50,
    margin: 30,
    flexDirection: 'row',
  },
  profilePicture: {
    height: 40,
    borderRadius: 50,
    width: 40,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
    marginLeft: 10,
    fontSize: 20,
  },
});
