import { View, StyleSheet } from "react-native";
import { ContentButton } from "./ContentButton";

export const ContentButtons = () => {
  const contentButtons = ["Music", "Podcasts & Shows"];
  return (
    <View style={styles.contentButtonsContainer}>
      <ContentButton content={contentButtons[0]} />
      <ContentButton content={contentButtons[1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentButtonsContainer: {
    flexDirection: "row",
    paddingTop: 36,
    paddingBottom: 22,
    paddingHorizontal: 18,
    gap: 8,
  },
});
