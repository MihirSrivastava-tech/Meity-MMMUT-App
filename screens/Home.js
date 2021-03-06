import React from "react";
import {View, StyleSheet, Text}  from "react-native";
import BottomAppBar from "../components/BottomAppBar";
import HeaderBar from "../components/HeaderBar";
import WeatherInfoCard from "../components/WeatherInfoCard";
import Cards from "../components/Cards";


const Home = () => {

    return(
        <View style={styles.container}>
            <HeaderBar icon="menu"/>
            
            <WeatherInfoCard/>

            <Cards/>

            <BottomAppBar/>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },


});

export default Home;