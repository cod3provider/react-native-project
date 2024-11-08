import {StyleSheet} from "react-native";

export const CREATE_POSTS_SCREEN_STYLES = StyleSheet.create({
  container: {
    gap: 32,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  icon: {},
  text: {
    color: '#BDBDBD',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  inputWrapper: {
    gap: 16,
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 15,
    fontSize: 16,
    backgroundColor: 'transparent',
    borderBottomColor: '#E8E8E8',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 0,
  },
  inputWithIcon: {
    paddingLeft: 28,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
    fontWeight: '400',
  },
  deleteIcon: {
    marginTop: 'auto',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});

export default CREATE_POSTS_SCREEN_STYLES;