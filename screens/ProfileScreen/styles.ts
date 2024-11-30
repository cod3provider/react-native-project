import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // color: colors.black_primary,
  },
  profilePhotoContainer: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  cameraButton: {
    position: 'absolute',
    right: -10,
    top: 55,
  },
});

export default styles;