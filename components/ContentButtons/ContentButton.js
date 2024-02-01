import { View, StyleSheet, Text } from "react-native";

export const ContentButton = (props) => {
  return (
    <View style={styles.contentButton}>
      <Text style={styles.contentText}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#292929ff",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "#fcfcfcff",
    fontSize: 16,
  },
});
