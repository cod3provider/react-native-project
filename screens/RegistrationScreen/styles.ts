import {Dimensions, StyleSheet} from "react-native";

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

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
  registerFormContainer: {
    position: 'relative',
    width: SCREEN_WIDTH,
    height: '80%',
    paddingTop: 32,
    gap: 43,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userImagePlaceholder: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: [{translateX: -60}, {translateY: -100}],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    zIndex: 1,
  },
  text: {
    marginTop: 50,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: '500',
    textAlign: "center",
  },
  inputContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  // input: {
  //   padding: 16,
  //   fontSize: 16,
  //   fontWeight: '400',
  //   backgroundColor: '#F6F6F6',
  //   borderWidth: 1,
  //   borderColor: '#E8E8E8',
  //   borderRadius: 8,
  // },
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
  buttonShow: {
    borderColor: '#FF6C00',
    position: 'absolute',
    top: '100%',
    right: '5%',
  },
  buttonShowText: {
    color: '#1B4371',
    fontSize: 16,
  },
})