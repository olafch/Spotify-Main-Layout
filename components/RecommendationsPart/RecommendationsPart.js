import { StyleSheet, View } from "react-native";
import { RecommendationPost } from "./RecommendationPost";

const recommendationsTitles = [
  "Bad Bunny",
  "This Is Taylor Swift",
  "The Weeknd",
  "Ed Sheeran",
  "DJ",
  "The Song of Achilles: A Novel by Madeline Miller",
];

export const RecommendationsPart = () => {
  return (
    <View style={styles.recommendationPostsContainer}>
      {recommendationsTitles.map((title, index) => {
        return <RecommendationPost key={index} title={title} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  recommendationPostsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 38,
    paddingHorizontal: 18,
  },
});
