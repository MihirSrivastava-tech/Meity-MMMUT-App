import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";


const Cards = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.cardsContainer}>
            {/* Row 1 */}
            <View style={styles.row}>

                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.cardData}>
                        <Image source={require('../assets/bananaImg.png')}/>
                        <Text style={styles.vegName}>केला</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.cardData}>
                        <Image source={require('../assets/tomatoImg.png') } style={{marginBottom:10}}/>
                        <Text style={styles.vegName}>टमाटर</Text>
                    </View>
                </TouchableOpacity>

            </View>

            {/* Row 2 */}
            <View style={styles.row}>

                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.cardData}>
                        <Image source={require('../assets/chilliImg.png')}/>
                        <Text style={styles.vegName}>मिर्च</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.cardData}>
                        <Image source={require('../assets/cauliImg.png')}/>
                        <Text style={styles.vegName}>गोभी</Text>
                    </View>
                </TouchableOpacity>

            </View>

            {/* Row 3 */}
            <View style={styles.row}>

                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Info')}>
                    <View style={styles.cardData}>
                        <Image source={require('../assets/brinjalImg.png')} />
                        <Text style={styles.vegName}>बैंगन</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardRight} >

                </View>

            </View>
            
        </View>
    );
};


const styles = StyleSheet.create({
    cardsContainer:{
        width:'100%',
        height:'62%',
        backgroundColor:'#fff',
    },
    row:{
        width:'100%',
        height:'32%',
        backgroundColor:'#fff',
        justifyContent:'space-around',
        flexDirection:'row',
        
    },
    card:{
        width:'41%',
        height:'85%',
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:6,
        alignItems:'center',
        justifyContent:'center'
    },
    cardData:{
        flexDirection:'column',
    },
    vegName:{
        backgroundColor:'#C4C4C4',
        borderRadius:5,
        textAlign:'center',
        fontSize:20
    },
    cardRight:{
        width:'41%',
        height:'85%',
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:10,     
    }
});

export default Cards;