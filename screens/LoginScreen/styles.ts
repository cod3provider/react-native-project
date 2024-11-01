import {Dimensions, StyleSheet} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const LOGIN_SCREEN_STYLES = StyleSheet.create({
  // container: {
  //   justifyContent: 'flex-end',
  //   height: '100%'
  // },
  // backgroundImage: {
  //   flex: 1,
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  // },
  container: {
    justifyContent: 'flex-end',
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  loginFormContainer: {
    width: SCREEN_WIDTH,
    height: '60%',
    paddingTop: 32,
    gap: 43,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userImagePlaceholder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -120 }],
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  text: {
    marginTop: 0,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: '500',
    textAlign: "center",
  },
  inputContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    padding: 16,
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  buttonsContainer: {
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerBtn: {
    width: '80%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  registerBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
  },
  textContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  textLink: {
    color: '#1B4371',
    fontSize: 16,
    fontWeight: '400',
  },
  // text: {
  //   fontSize: 16,
  // },
})