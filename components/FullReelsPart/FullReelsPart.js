import { ScrollView, StyleSheet, View } from "react-native";
import { ReelsTitle } from "./ReelsTitle";
import { Reels } from "./Reels";

export const FullReelsPart = (props) => {
  return (
    <View>
      <ReelsTitle reelsTitle={props.reelsTitle} />
      <ScrollView horizontal style={styles.scrollView}>
        {props.reelsData.map((reel, index) => (
          <Reels
            key={index}
            mainReelText={reel[0]}
            secondaryReelText={reel[1]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    paddingBottom: 70,
    paddingHorizontal: 18,
  },
});
