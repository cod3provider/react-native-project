import {StyleSheet} from "react-native";


export const REGISTER_SCREEN_STYLES = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 16,
  },
  plusButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#FF6C00',
    position: 'absolute',
    top: 30,
    right: 140,
    zIndex: 1,
  },
})