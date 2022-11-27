import { ScrollView } from "react-native";
import icons from "../../../common/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableRipple } from "react-native-paper";
import styles from "./styles";

interface Props {
  selectedIcon: string;
  onChnage: (icon: string) => void;
}

const IconSelector = ({ selectedIcon, onChnage }: Props) => {
  const iconSize: number = 65;
  let offset = 0;

  // Set Offset
  for (let idx = 0; idx < Object.keys(icons).length; idx++)
    if (Object.keys(icons)[idx] === selectedIcon)
      offset = idx * iconSize - 2 * iconSize;

  const Icon = ({ iconName }) => {
    const backgroundColor =
      iconName === selectedIcon
        ? "rgba(54, 249, 73, .5)"
        : "rgba(90, 90, 90, .3)";

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
        <Icon key={idx} iconName={key} />
      ))}
    </ScrollView>
  );
};

export default IconSelector;
