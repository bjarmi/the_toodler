import { Card, Title, Paragraph } from "react-native-paper";
import { IBoard } from "../../../common/interfaces";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "../../../common/type";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

const BoardCard = (board: IBoard) => {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();

  return (
    <Card
      key={board.id}
      style={styles.card}
      elevation={2}
      onPress={() => navigation.navigate("BoardPage", { boardId: board.id })}
    >
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <FontAwesomeIcon size={48} icon={faPoo} />
        </View>
        <View style={styles.aboutContainer}>
          <Title>{board.name}</Title>
          <Paragraph>{board.description.slice(0, 60)}...</Paragraph>
        </View>
      </View>
    </Card>
  );
};

export default BoardCard;
