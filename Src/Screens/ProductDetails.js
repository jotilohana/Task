import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ProductDetails = ({route}) => {
  const [apiData, setData] = useState([]);
  const {itemId} = route.params;
    console.log(itemId)
  const data = apiData.filter((e) => e.MacAddress== itemId)


  useEffect(() => {
    fetch('https://veramobile.mios.com/test_android/items.test')
      .then(response => response.json())
      .then(json => setData(json.Devices))
      .catch(error => console.error(error));
      console.log(apiData)
    }, []);
  
    const Details = ({item}) => {
        return (
      <View style={{backgroundColor: 'white', borderRadius: 25, margin:20, padding:20}}>
        <Text>{item.PK_Device}</Text>
        <Text>{item.MacAddress}</Text>
        <Text>{item.PK_DeviceType}</Text>
        <Text>{item.PK_DeviceSubType}</Text>
        <Text>{item.Server_Device}</Text>
        <Text>{item.Server_Event}</Text>
        <Text>{item.Firmware}</Text>
        <Text>{item.Server_Account}</Text>
        <Text>{item.InternalIP}</Text>
        <Text>{item.LastAliveReported}</Text>
        <Text>{item.Platform}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={Details}
        keyExtractor={(item => item.id)}
      />
    </View>
  );
};

export default ProductDetails;
