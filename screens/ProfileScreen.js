import React,{Component} from "react";
import {View, Text, StyleSheet} from "react-native";

export default class ProfileScreen extends Component {
 render(){
    return(
        <View style={styles.container}>
         <Text style={styles.text}>PROFILE SCREEN</Text>
        </View>
        
    )
 }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    },
    text:{
            justifyContent:'center',
            alignItems:'center',
            padding:10,
            alignSelf:'center',
            marginTop: 100,
            color:'white'
    }
})