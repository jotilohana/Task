import React, {useState, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const [apiData, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    fetch('https://veramobile.mios.com/test_android/items.test')
      .then(response => response.json())
      .then(json => setData(json.Devices))
      .catch(error => console.error(error));
  }, []);

  // const deleteItem = index => {
  //   const arr = [...apiData];
  //   arr.splice(index, 1);
  //   setData(arr);
  // };

 const deleteItemById = (id) => {
   console.log(id)
    const filteredData = apiData.filter(item => item.id !== id);
    setData({ data: filteredData });
  }

  const handlerLongClick = (props) => {
    console.log(props)
    setModalVisible(true, props);
    setId(props)
  
  };
  const CloseModal = () => {
    setModalVisible(false);
  };




  const navigation = useNavigation();
  const RenderData = ({item}) => {
    return (
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onLongPress={handlerLongClick(item.MacAddress)}
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={{
                  backgroundColor: '#EEEDE7',
                  width: 150,
                  padding: 5,
                  borderRadius: 10,
                  paddingLeft: 20,
                }}
                onPress={()=>deleteItemById()}
                >
                <Text>Delete</Text>
              </Pressable>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 'auto',
                  marginTop: 20,
                }}>
                <Pressable
                  onPress={CloseModal}
                  style={{marginRight: 10}}>
                  <Text>Cancel</Text>
                </Pressable>
                <Pressable style={{justifyContent: 'space-between'}}>
                  <Text>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Homescreen;
