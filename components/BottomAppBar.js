import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Entypo} from '@expo/vector-icons';

const BottomAppBar = () => {
    return(

        <View style={styles.container}>

            <View style={styles.notch}>

                <View style={styles.button}>
                    <Entypo style={styles.buttonImg} name="camera" size={24} color="black" />
                </View>
            
            </View>
          
        <View style={styles.bottomAppBar}>
  
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
    },
    notch:{
      position: 'absolute', 
      alignSelf: 'center', 
      backgroundColor: '#fff', 
      width: 70, 
      height: 70, 
      borderRadius: 35, 
      bottom: 18, 
      zIndex: 10,
      paddingTop:5,
    },
    button:{
      width:60,
      height:60,
      borderRadius:70,
      backgroundColor:'#09F0FF',
      alignSelf:'center',
    },
    buttonImg:{
      position:'absolute',
      alignSelf: 'center',
      justifyContent:'center',
      fontSize:30,
      paddingTop:15
    },
    bottomAppBar:{
      position: 'absolute', 
      backgroundColor: '#07CAD7', 
      bottom: 0, 
      zIndex: 1, 
      width: '100%', 
      height: 50, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      paddingHorizontal: 15, 
      paddingVertical: 10
    }
  });
  

export default BottomAppBar;