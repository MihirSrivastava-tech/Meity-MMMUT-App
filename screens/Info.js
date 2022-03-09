import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HeaderBar from "../components/HeaderBar";
import BottomAppBar from "../components/BottomAppBar";
import { useNavigation } from "@react-navigation/native";


const InfoLayout = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.infoContainer}>
            <Text style={styles.heading}>सब्जी का नाम</Text>
            <Text style={styles.paragraph}>बैगन (अंग्रेज़ी: Brinjal) एक सब्जी है। बैंगन भारत में ही पैदा हुआ और आज आलू के बाद दूसरी सबसे अधिक खपत वाली सब्जी है। विश्व में चीन (54 प्रतिशत) के बाद भारत बैंगन की दूसरी सबसे अधिक पैदावार (27 प्रतिशत) वाले देश हैं। यह देश में 5.5 लाख हेक्टेयर क्षेत्रफल में उगाया जाता है।</Text>
            <Text style={styles.heading}>सब्जी में होने वाले रोग</Text>
            <Text style={styles.headingDisease}>रोग 1-</Text>
            <Text style={styles.paragraph}>बैगन (अंग्रेज़ी: Brinjal) एक सब्जी है। बैंगन भारत में ही पैदा हुआ और आज आलू के बाद दूसरी सबसे अधिक खपत वाली सब्जी है। विश्व में चीन (54 प्रतिशत) के बाद भारत बैंगन की दूसरी सबसे अधिक पैदावार (27 प्रतिशत) वाले देश हैं। यह देश में 5.5 लाख हेक्टेयर क्षेत्रफल में उगाया जाता है।</Text>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Sensor')}>
                    <Text style={styles.buttonText}>मिट्टी की जानकारी</Text>
            </TouchableOpacity>


        </View>
    );
};

const Info = () =>{
    return(
        <View style={styles.container}>
        <HeaderBar icon={"arrow-left"}/>

        <InfoLayout/>

        <BottomAppBar/>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    infoContainer:{
        width:'95%',
        height:'80%',
        backgroundColor:'#fff',
        alignItems:'center',
        alignSelf:'center'
    },
    heading:{
        fontSize:36,
        textAlign:'justify',
        marginVertical:10,
    },
    paragraph:{
        fontSize:16,
        textAlign:'justify',
        color:'rgba(0,0,0,0.77)'
    },
    headingDisease:{
        fontSize:26,
        alignSelf:'flex-start'
    },
    button:{
        width:'70%',
        height:'10%',
        backgroundColor:'#B6FEF5',
        borderRadius:13,
        elevation:5,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    },
    buttonText:{
        fontSize:24,
    }
});

export default Info;