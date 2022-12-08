import * as React from 'react';

import { GOOGLE_PLACES_API_KEY } from '@env';
import { Dimensions, StyleSheet, Text, View, Button } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function Map({ navigation }) {
  // using state, adding stating. the default value is the lat and lon for disney 
  // this will allow us to update the circle around the map to update to whatever the new pin is
  const [pin, setPin] = React.useState({
    latitude: 33.812511,
    longitude: -117.9190,
  })
  const [region, setRegion] = React.useState({
    latitude: 33.812511,
    longitude: -117.9190,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  })

  return (
    <>
      <View>
        <Button
          title="About Me"
          onPress={() => navigation.navigate("AboutMe")}
        />
      </View>
      <View style={{
        marginTop: 2, flex: 1
      }}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          featchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance",
            fields: 'geometry',

          }}

          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setRegion({
              latitude: data.geometry.location.lat,
              longitude: data.geometry.location.lng,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            })
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY,
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
          <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
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
              <Text>Where to next??</Text>
            </Callout>
          </Marker>
          <Circle center={pin}
            radius={600} />
        </MapView>

      </View >
    </>
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
