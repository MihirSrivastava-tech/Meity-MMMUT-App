import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HeaderBar = (props) =>{

    const navigation = useNavigation();


    const topAppBarButtonFunction = (name)=>{
        
        if(name=="arrow-left")
            navigation.goBack();
        else
        {
            navigation.openDrawer();
        }    
    };

    return(
        <View style={styles.headerContainer}>
            <View style={styles.menu}>

                <TouchableOpacity onPress={()=>topAppBarButtonFunction(props.icon)}>
                    <Feather name={props.icon} size={30} color="black"/>
                </TouchableOpacity>
                
                <Text style={styles.headerName}>कृषि सहज</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:'12%',
        paddingTop:45,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        elevation:8,
    },
    menu:{
        flexDirection:'row',
        alignItems:'center',
    },
    headerName:{
        marginHorizontal:20,
        fontSize:22,
    }
});

export default HeaderBar;