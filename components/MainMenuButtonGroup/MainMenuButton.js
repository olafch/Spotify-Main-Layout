import { View, StyleSheet, Text } from "react-native";

export const MainMenuButton = (props) => {
  return (
    <View
      style={[
        styles.mainMenuButton,
        props.selected ? styles.mainMenuButtonSelected : null,
      ]}
    >
      <View
        style={[
          styles.buttonInsidePicture,
          props.selected ? styles.buttonInsidePictureSelected : null,
        ]}
      />
      <Text
        style={
          props.selected
            ? styles.mainMenuButtonSelected
            : styles.mainMenuButtonText
        }
      >
        {props.buttonName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenuButton: {
    flexDirection: "row",
    flexGrow: 1,
    width: 80,
    flexBasis: 50,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  mainMenuButtonText: {
    fontSize: 10,
    color: "#a1a1a1ff",
  },
  mainMenuButtonSelected: {
    fontSize: 11,
    color: "white",
    fontWeight: "600",
  },
  buttonInsidePicture: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#a1a1a1ff",
    alignSelf: "center",
  },
  buttonInsidePictureSelected: {
    backgroundColor: "white",
  },
});
