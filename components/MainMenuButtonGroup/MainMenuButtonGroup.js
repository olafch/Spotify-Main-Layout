import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MainMenuButton } from "./MainMenuButton";

export const MainMenuButtonGroup = (props) => {
  const [selectedButton, setSelectedButton] = useState(props.buttons[0]);

  return (
    <View style={styles.allButtonsContainer}>
      {props.buttons.map((button, index) => {
        return (
          <Pressable key={index} onPress={() => setSelectedButton(button)}>
            <MainMenuButton
              selected={button === selectedButton}
              buttonName={props.buttons[index]}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  allButtonsContainer: {
    position: "relative",
    bottom: 50,
    backgroundColor: "#0f0f0fff",
    opacity: 0.96,
    width: "100%",
    flexBasis: 64,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainMenuButtonSelected: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
  },
});
