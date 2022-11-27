import { ScrollView, StyleSheet } from "react-native";
import icons from "../../common/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableRipple } from "react-native-paper";
import { useState } from "react";

interface Props {
  selectedIcon: string;
  onChnage: (icon: string) => void;
}

const IconSelector = ({ selectedIcon, onChnage }: Props) => {
  const [offset, setOffset] = useState(0);
  const iconSize: number = 65;

  const Icon = ({ iconName, idx }) => {
    let backgroundColor = "";
    if (iconName === selectedIcon) {
      setOffset(iconSize * idx);
      backgroundColor = "rgba(54, 249, 73, .5)";
    } else backgroundColor = "rgba(90, 90, 90, .3)";

    return (
      <TouchableRipple
        onPress={() => onChnage(iconName)}
        style={{ ...styles.iconContainer, backgroundColor: backgroundColor }}
      >
        <FontAwesomeIcon size={35} icon={icons[iconName]} />
      </TouchableRipple>
    );
  };

  return (
    <ScrollView horizontal={true} contentOffset={{ x: offset, y: 0 }}>
      {Object.keys(icons).map((key: string, idx: number) => (
        <Icon key={idx} iconName={key} idx={idx} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconSelector;
