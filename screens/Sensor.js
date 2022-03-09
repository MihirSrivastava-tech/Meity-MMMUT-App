import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomAppBar from "../components/BottomAppBar";
import HeaderBar from "../components/HeaderBar";


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

                <Text style={styles.requiredVal}>10</Text>
                <Text style={styles.currentVal}>15</Text>
        </View>
    );
};


const Sensor = () =>{
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
                <SensorScreen image="water" sense="जलवायु की नमी"/>
                <SensorScreen image="thermo" sense="तापमान"/>
                <SensorScreen image="soil" sense="मिट्टी की नमी"/>
                <SensorScreen image="N" sense="नाइट्रोजन"/>
                <SensorScreen image="tempSense" sense="मिट्टी का तापमान"/>
                <SensorScreen image="P" sense="फ़ास्फ़रोस"/>
                <SensorScreen image="testTube" sense="मिट्टी का पीएच"/>
                <SensorScreen image="K" sense="पोटैशियम"/>
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
        paddingHorizontal:10
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