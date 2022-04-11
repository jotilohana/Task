import React from 'react';
import {View, Image, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


const HeaderImage=()=>{
    const route =useRoute();
    return(
        
       <View style={styles.ImageView}>
            <Image
            style={styles.profilePicture}
            source={require('../Assets/profile2.jpg')}
            />
            <Text style={styles.text}>Joti Kumari</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    ImageView:{
        height:70,
        borderRadius:50,
        margin:30,
        flexDirection:'row',
    },
    profilePicture:{
        height:50,
        borderRadius:50,
        width:50,
        marginTop:10
    },
    text:{
        fontWeight:'bold',
        marginTop:25,
        color:'black',
        marginLeft:10,
        fontSize:18
    }
})

export default HeaderImage;