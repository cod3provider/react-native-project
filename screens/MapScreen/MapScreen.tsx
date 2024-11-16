import {useEffect, useState} from "react";
import {View} from "react-native";
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

import styles from "@/screens/MapScreen/styles";

type Coords = {
  latitude: number;
  longitude: number;
}

const MapScreen = () => {
  const [location, setLocation] = useState<Coords | null>(null);
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }


      let location = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }
      setLocation(coords);
    })();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        // minZoomLevel={15}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        {location !== null && (
          <Marker
            title="I am here"
            onPress={() => console.log('Pressed on marker')}
            coordinate={location}
            description='Hello'
          />
        )}
      </MapView>
    </View>
  )
}

export default MapScreen;