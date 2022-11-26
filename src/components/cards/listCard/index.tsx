import { Card, Title } from "react-native-paper";
import { IList } from "../../../common/interfaces";
import { useNavigation } from "@react-navigation/native";
import { BoardScreenProps } from "../../../common/type";
import { StyleSheet } from "react-native";

interface Props {
  list: IList;
}

const ListCard = (list: IList) => {
  const navigation = useNavigation<BoardScreenProps["navigation"]>();

  return (
    <Card
      elevation={2}
      onPress={() => navigation.navigate("ListPage", { listId: list.id })}
      style={{ ...styles.card, backgroundColor: list.color }}
    >
      <Title>{list.name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    marginHorizontal: 12,
    padding: 10,
  },
});

export default ListCard;
