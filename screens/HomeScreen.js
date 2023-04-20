import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image
    } from "react-native";

export default class HomeScreen extends Component {
 render(){
    return(
        <View style={styles.container}>
           <ImageBackground
           source={require("../assets/bgImage.webp")}
           style={styles.backgroundImage}
           >
         <Text style={styles.text}>ART GALLERY APP</Text>
         <Text style={styles.infoText}>Welcome to the Art Gallery App!</Text>
        
         
        </ImageBackground>
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
            color:'white',
            fontSize:45,
            fontWeight:'bold'
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        //width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height
     },
     infoText:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        alignSelf:'center',
        marginTop: 100,
        color:'white',
        fontSize:35,
        fontWeight:'bold'
     },
    
})