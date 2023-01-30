import React,{useEffect, useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import BottomAppBar from "../components/BottomAppBar";
import HeaderBar from "../components/HeaderBar";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get, child } from "firebase/database";













//Sensor Page Code Base



const Images = {
    K: require('../assets/sensor/K.png'),
    N: require('../assets/sensor/N.png'),
    P: require('../assets/sensor/P.png'),
    soil: require('../assets/sensor/Soil.png'),
    tempSense: require('../assets/sensor/TemperatureSensitive.png'),
    testTube: require('../assets/sensor/TestTube.png'),
    thermo: require('../assets/sensor/thermometer.png'),
    water: require('../assets/sensor/water.png'),
};

const SensorScreen = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image source={Images[props.image]}/>
                <Text style={styles.sensorName}>{props.sense}</Text>
            </View>

                <Text style={styles.requiredVal}>13</Text>
                <Text style={styles.currentVal}>{props.sensorDatabaseData}</Text>
        </View>
    );
};



 
const Sensor = () =>{
//Firebase Configuration and Initialization
const firebaseConfig = {
    apiKey: "AIzaSyDMyMcnWCWaP_HuwFxFSMmHe89b9st4YVY",
    authDomain: "sensors-data-4fb16.firebaseapp.com",
    databaseURL: "https://sensors-data-4fb16-default-rtdb.firebaseio.com",
    projectId: "sensors-data-4fb16",
    storageBucket: "sensors-data-4fb16.appspot.com",
    messagingSenderId: "197748863048",
    appId: "1:197748863048:web:a9c8247563dfff18c7687d",
    measurementId: "G-WRFC55F2ET" 
  };

const app = initializeApp(firebaseConfig);

const [sensorData, setData] = useState({});
useEffect(()=>{
    console.log('Started');
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Farm 2/')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("--------------------");
        setData(snapshot.val());
        console.log(snapshot.val());
        console.log("--------------------");
      } else {
        console.log("No data available"); 
      }
    }).catch((error) => {
      console.error(error);
    });

},[]);

    
    return(
        <View style={styles.container}>
            <HeaderBar icon="arrow-left"/>
            
            <Text style={styles.heading}>मिट्टी की मानकता</Text>

            <View style={styles.parameters}>
                <Text style={styles.name}>नाम</Text>
                <Text style={styles.required}>मानक</Text>
                <Text style={styles.current}>वर्तमान</Text>
            </View>

            <View style={styles.wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <SensorScreen image="water" sense="जलवायु की नमी" sensorDatabaseData={sensorData["Humidity:"]}/>
                <SensorScreen image="thermo" sense="तापमान" sensorDatabaseData={sensorData["Temperature:"]}/>
                <SensorScreen image="soil" sense="मिट्टी की नमी" sensorDatabaseData={sensorData["Soil Moisture:"]}/>
                <SensorScreen image="N" sense="नाइट्रोजन" sensorDatabaseData={sensorData["Nitrogen:"]}/>
                <SensorScreen image="tempSense" sense="मिट्टी का तापमान" sensorDatabaseData={sensorData["Soil Temperature:"]}/>
                <SensorScreen image="P" sense="फॉसफोरस" sensorDatabaseData={sensorData["Phosphorous:"]}/>
                <SensorScreen image="testTube" sense="मिट्टी का पीएच" sensorDatabaseData={sensorData["Ph Value:"]}/>
                <SensorScreen image="K" sense="पोटैशियम" sensorDatabaseData={sensorData["Potassium:"]}/>
                </ScrollView>
            </View>

            <BottomAppBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    heading:{
        textAlign:'center',
        marginVertical:10,
        fontSize:24,
    },
    parameters:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    name:{
        flex:2,
        textAlign:'center',
        fontSize:20,
    },
    required:{
        flex:1,
        textAlign:'center',
        fontSize:20,
    },
    current:{
        flex:1,
        textAlign:'center',
        fontSize:20,
    },
    wrapper:{
        paddingHorizontal:10,
        flex:5
    },
    item:{
        backgroundColor:'rgba(196,196,196,0.17)',
        borderRadius:13,
        borderColor:'#000',
        borderWidth:2,
        padding:10,
        flexDirection:'row',
        marginVertical:6
    },
    sensorName:{
        fontSize:18,
        paddingStart:5
    },
    itemLeft:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    requiredVal:{
        flex:1,
        fontSize:18,
        textAlign:'center',
    },
    currentVal:{
        flex:1,
        fontSize:18,
        textAlign:'center'
    },
});

export default Sensor;