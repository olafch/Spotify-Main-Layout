import { View, ScrollView } from "react-native";
import { Reel } from "./Reel";

const reelsLength = Array.from({ length: 1 });

export const Reels = (props) => {
  return (
    <ScrollView horizontal>
      {reelsLength.map((_, index) => {
        return (
          <Reel
            key={index}
            mainReelText={props.mainReelText}
            secondaryReelText={props.secondaryReelText}
          />
        );
      })}
    </ScrollView>
  );
};
