import { View, StyleSheet } from "react-native";
import { Logo } from "./Logo";
import { UpperMenuIcons } from "./UpperMenuIcons";

export const UpperTopSpotify = () => {
  return (
    <View style={styles.upperTopSpotifyContainer}>
      <Logo />
      <UpperMenuIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  upperTopSpotifyContainer: {
    backgroundColor: "#0f0f0fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
});
