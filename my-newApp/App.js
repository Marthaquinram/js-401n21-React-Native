import * as React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
// import * as Location from 'expo-location';

export default function App() {
  // using state, adding stating. the default value is the lat and lon for disney 
  // this will allow us to update the circle around the map to update to whatever the new pin is
  const [pin, setPin] = React.useState({
    latitude: 33.812511,
    longitude: -117.9190,
  })
  const [region, setRegion] = React.useState({
    latitude: 33.812511,
    longitude: -117.9190,
  })

  return (
    <View style={{
      marginTop: 50, flex: 1
    }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        featchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: process.env.GOOGLE_PLACES_API_KEY,
          language: 'en',
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
          listView: { backgroundColor: "white" }
        }}

      />
      <MapView style={styles.map}
        initialRegion={{
          latitude: 33.812511,
          longitude: -117.9190,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        provider="google"

      >
        <Marker
          coordinate={pin}
          pinColor='purple'
          draggable={true}
          onDragStart={(e) => {
            console.log('Drag Start', e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
            console.log('Drag End', e.nativeEvent.coordinate);
          }}
        >
          <Callout>
            <Text>Where do you want to go next?</Text>
          </Callout>
        </Marker>
        <Circle center={pin}
          radius={1000} />
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




// React.useEffect(() => {
  //   (async () => {

  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     console.log(location);

  //     setPin({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     })
  //   })();
  // }, []);

  // showsUserLocation={true}
      // onUserLocationChange={(e) => {
      //   console.log('this is the User location: ', e.nativeEvent.coordinate);

      // setPin({
      //   latitude: e.nativeEvent.coordinate.latitude,
      //   longitude: e.nativeEvent.coordinate.longitude,
      // })
      // }}
