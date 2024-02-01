import { View, StyleSheet, Text } from "react-native";
import { getRandomHexColor } from "../RandomColors";

export const Reel = (props) => {
  const mainText = props.mainReelText;
  const secondaryText = props.secondaryReelText;
  const isMainTextPresent = !!mainText;
  const isSecondaryTextPresent = !!secondaryText;
  const textToShow = isMainTextPresent ? mainText : secondaryText;
  const chosenText =
    textToShow.length < 42 ? textToShow : textToShow.slice(0, 41) + "...";
  const randomColor = getRandomHexColor();

  return (
    <View style={styles.fullReelContainer}>
      <View
        style={[
          isSecondaryTextPresent ? styles.reel : styles.circle,
          { backgroundColor: randomColor },
        ]}
      />
      <View style={styles.textContainer}>
        <Text
          style={
            isMainTextPresent && !isSecondaryTextPresent
              ? styles.uniqueReelText
              : isMainTextPresent
              ? styles.mainReelText
              : styles.secondaryReelText
          }
        >
          {chosenText}
        </Text>
      </View>
      {isMainTextPresent && (
        <Text style={styles.secondaryReelText}>{secondaryText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullReelContainer: {
    alignItems: "flex-start",
  },
  reel: {
    height: 166,
    width: 166,
    borderRadius: 16,
    marginBottom: 6,
    marginRight: 18,
  },
  mainReelText: {
    color: "#fcfcfcff",
    fontSize: 15,
    lineHeight: 22,
  },
  secondaryReelText: {
    color: "#a1a1a1ff",
    fontSize: 15,
    lineHeight: 22,
    width: 166,
  },
  textContainer: {
    width: 166,
  },
  circle: {
    height: 166,
    width: 166,
    borderRadius: 83,
    marginBottom: 6,
    marginRight: 18,
  },
  uniqueReelText: {
    color: "#fcfcfcff",
    fontSize: 15,
    textAlign: "center",
    right: 2,
    lineHeight: 22,
  },
});
