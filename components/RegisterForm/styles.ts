import {StyleSheet} from 'react-native';

export const REGISTER_FORM_STYLES = StyleSheet.create({
  container: {
    width: '100%',
    height: 580,
    padding: 16,
    gap: 43,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    marginTop: 92,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    gap: 16,
  },
  input: {
    padding: 16,
    fontSize: 16,
    fontWeight: 400,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  buttonsContainer: {
    display: "flex",
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerBtn: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  registerBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  textLink: {
    color: '#1B4371',
    fontSize: 16,
    fontWeight: 400,
  },
})