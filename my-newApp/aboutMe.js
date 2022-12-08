import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function AboutMe() {
  return (
    <View style={styles.container}>
      <Text>About Me</Text>
      <Image style={styles.imageMe} source={require("./assets/papaya.jpeg")} />
      <Text style={styles.text}>Hi! Im Martha Quintanilla-Ramirez, Thank you checking out my React Native Application. I had a lot of fun playing in React Native and building a Geolocation application!</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b49fdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMe: {
    marginBottom: 40,
    height: 250,
    width: 250
  },
  text: {
    marginLeft: 10,
  }

});

// const images = { uri: "https://openclipart.org/image/800px/4112" }

{/* <ImageBackground source={images} resizeMode="cover" style={styles.images}>
</ImageBackground> */}
