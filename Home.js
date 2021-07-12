import React, {Component} from 'react';
import { ImageBackground, Text, View, TouchableOpacity, Platform, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";

export default class HomeScreen extends Component {
    render(){
        return (
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ImageBackground source={require('../assets/stars.gif')} style = {styles.backgroundImage}>
                    <View style ={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar</Text>
                    </View>
                <TouchableOpacity style={styles.routeCard} onPress = {() => 
                this.props.navigation.navigate("Daily Pic")
                }>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                    <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress = {() => 
                this.props.navigation.navigate("Space Craft")
                }>
                    <Text style={styles.routeText}>Space Craft</Text>
                    <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress = {() => 
                this.props.navigation.navigate("Star Map")
                }>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleBar:{
        flex: 0.15,
        justifyContent :"center",
        alignItems: "center"
    },
   titleText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"white"
    },
    routeText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"black",
        marginTop: 75,
        paddingLeft:30
    },
    routeCard:{
        flex: 0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor: 'white'
    },
    knowMore:{
        paddingLeft:30,
        color:"Red",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"RGBA(183,183,183,0.5)",
        fontSize:150,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{ 
        position: "absolute", 
        height: 200, 
        width: 200, 
        resizeMode: "contain", 
        right: 20, 
        top: -80
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
})