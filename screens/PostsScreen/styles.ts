import {StyleSheet} from "react-native";

const POST_SCREEN_STYLES = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 32,
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
  post: {
    marginTop: 32,
    gap: 8,
  },
  postImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  nameText: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 500,
  },
  commentWrap: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  commentsText: {
    color: '#BDBDBD',
    fontSize: 16,
    fontWeight: 400,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationWrap: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#212121',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 400,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'flex',
  }
});

export default POST_SCREEN_STYLES;