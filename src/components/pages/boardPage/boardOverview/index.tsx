import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import { IBoard } from "../../../../common/interfaces";
import styles from "./styles";

interface Props {
  board: IBoard;
}

const BoardOverview = ({ board }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon size={72} icon={faPoo} />
        <Title>{board.name}</Title>
      </View>
      <View>
        <Paragraph>{board.description}</Paragraph>
      </View>
    </View>
  );
};

export default BoardOverview;
