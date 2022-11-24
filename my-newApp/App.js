import * as React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 33.812511,
          longitude: -117.9190,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker
          coordinate={{ latitude: 33.812511, longitude: -117.9190 }}
          pinColor='navy'
          draggable={true}
          onDragStart={(e) => {
            console.log('Drag Start', e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log('Drag End', e.nativeEvent.coordinate);
          }}
        >
          <Callout>
            <Text>Hello From inside Expo Go Device!</Text>
          </Callout>
        </Marker>
        <Circle center={{ latitude: 33.812511, longitude: -117.9190 }}
          radius={600} />
      </MapView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>HELLO! Welcome to my application thats currently under construction.</Text>
//       <StatusBar style="auto" />
//     </View>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
