import { StyleSheet, Text } from "react-native";

export const ReelsTitle = (props) => {
  return <Text style={styles.logo}>{props.reelsTitle}</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fcfcfcff",
    paddingBottom: 26,
    paddingHorizontal: 18,
  },
});
