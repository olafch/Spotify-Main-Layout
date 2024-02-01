import { StyleSheet, Text } from "react-native";

export const Logo = () => {
  return <Text style={styles.logo}>Good afternoon</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fcfcfcff",
  },
});
