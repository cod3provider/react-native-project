import {StyleSheet} from "react-native";

const POST_SCREEN_STYLES = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  imageContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 13,
    fontWeight: 700,
    color: '#212121',
  },
  subtitle: {
    color: 'rgba(33, 33, 33, 0.80)',
    fontSize: 11,
    fontWeight: 400,
  },
});

export default POST_SCREEN_STYLES;