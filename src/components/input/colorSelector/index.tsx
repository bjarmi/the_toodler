import { ScrollView, View, Text } from "react-native";
import icons from "../../../common/icons";
import { TouchableRipple } from "react-native-paper";
import styles from "./styles";

interface Props {
  selectedColor: string;
  onChnage: (color: string) => void;
}

const colors: string[] = [
  "#ffbc42",
  "#d81159",
  "#8f2d56",
  "#218380",
  "#73d2de",
  "#373f51",
  "#008dd5",
  "#dfbbb1",
  "#f56476",
  "#e43f6f",
];

const ColorSelector = ({ selectedColor, onChnage }: Props) => {
  const iconSize: number = 65;
  let offset = 0;

  // Set Offset
  for (let idx = 0; idx < Object.keys(icons).length; idx++)
    if (Object.keys(icons)[idx] === selectedColor)
      offset = idx * iconSize - 2 * iconSize;

  const Color = ({ colorCode }) => {
    const backgroundColor =
      colorCode === selectedColor
        ? "rgba(54, 249, 73, .5)"
        : "rgba(90, 90, 90, .3)";

    return (
      <TouchableRipple
        onPress={() => onChnage(colorCode)}
        style={{ ...styles.colorContainer, backgroundColor: backgroundColor }}
      >
        <View style={{ ...styles.colorOption, backgroundColor: colorCode }} />
      </TouchableRipple>
    );
  };

  return (
    <ScrollView horizontal={true} contentOffset={{ x: offset, y: 0 }}>
      {colors.map((color: string, idx: number) => (
        <Color key={idx} colorCode={color} />
      ))}
    </ScrollView>
  );
};

export default ColorSelector;
