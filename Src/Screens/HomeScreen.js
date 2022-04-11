import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import action from '../Common/api';

const Homescreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://veramobile.mios.com/test_android/items.test')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {[data].map((item, index) => {
        {
          console.log(item);
        }
        <Text>{item}</Text>;
      })}
    </View>
  );
};
export default Homescreen;
