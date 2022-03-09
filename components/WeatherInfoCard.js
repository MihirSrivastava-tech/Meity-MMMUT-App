import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';



const WeatherInfoCard =() => {
    return(
        <View style={styles.weatherContainer}>
            <View style={styles.weatherCard}>
                
                

                    <View style={styles.data}>
                        <Text style={styles.date}>Tuesday, 12 July</Text>
                        <Text style={styles.weather}>Cloudy</Text>
                    </View>

                    <View style={styles.temp}>
                        <Text style={styles.tempData}>32°C</Text>
                    </View>

                    <View style={styles.image}>
                        <Image source={require('../assets/climate.png')}/>
                    </View>
                    
                

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    weatherContainer:{
        width:'100%',
        height:'18%',
        alignSelf:'center',
        justifyContent:'center',
    },
    weatherCard:{
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        width:'90%',
        height:'75%',
        borderRadius:10,
        elevation:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    data:{
        flex:3,
        backgroundColor:'#fff',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    date:{
        fontSize:18,
        color:'rgba(0,0,0,0.5)',
    },
    weather:{
        fontSize:28,
        color:'rgba(0,0,0,0.5)',

    },
    temp:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    tempData:{
        fontSize:24,
        fontWeight:'bold'
    },
    image:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignSelf:'center'
    }
});

export default WeatherInfoCard;