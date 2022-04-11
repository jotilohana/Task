import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const [apiData, setData] = useState([]);

  useEffect(() => {
    fetch('https://veramobile.mios.com/test_android/items.test')
      .then(response => response.json())
      .then(json => setData(json.Devices))
      .catch(error => console.error(error));
  }, []);

  const navigation = useNavigation();
  const RenderData = ({item}) => {
    return (
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Product Details', {
              itemId: item.MacAddress,
            })
          }>
          <Text style={{height: 30}}>{item.Platform}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 25,
      }}>
      <FlatList
        data={apiData}
        renderItem={RenderData}
        keyExtractor={(item => item.id, navigation => navigation)}
      />
    </View>
  );
};
export default Homescreen;
