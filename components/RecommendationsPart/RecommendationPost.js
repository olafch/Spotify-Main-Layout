import { StyleSheet, Text, View } from "react-native";
import { getRandomHexColor } from "../RandomColors";

export const RecommendationPost = (props) => {
  const randomColor = getRandomHexColor();
  return (
    <View style={styles.recommendationPostContainer}>
      <View
        style={[
          styles.recommendationPostPicture,
          { backgroundColor: randomColor },
        ]}
      />
      <Text style={styles.recommendationPostText}>
        {props.title.length <= 26
          ? props.title
          : props.title.slice(0, 26) + "..."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendationPostContainer: {
    height: 64,
    width: 192,
    borderRadius: 6,
    backgroundColor: "#292929ff",
    flexDirection: "row",
  },
  recommendationPostPicture: {
    height: 64,
    width: 64,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  recommendationPostText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fcfcfcff",
    alignSelf: "center",
    marginLeft: 8,
    marginRight: 64,
  },
});
