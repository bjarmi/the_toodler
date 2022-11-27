import { Card, Title } from "react-native-paper";
import { IList } from "../../../common/interfaces";
import { useNavigation } from "@react-navigation/native";
import { BoardScreenProps } from "../../../common/type";
import styles from "./styles";

interface Props {
  list: IList;
}

const ListCard = ({ list }: Props) => {
  const navigation = useNavigation<BoardScreenProps["navigation"]>();

  return (
    <Card
      elevation={2}
      onPress={() => navigation.navigate("ListPage", { list })}
      style={{ ...styles.card, backgroundColor: list.color }}
    >
      <Title>{list.name}</Title>
    </Card>
  );
};

export default ListCard;
