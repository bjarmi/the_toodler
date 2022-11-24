import { View, Text, Button } from "react-native";
import { data } from "../../../../dataStub";
import { BoardScreenProps } from "../../../common/type";

const getLists = (boardId: number) =>
  data.lists.filter((list) => list.boardId === boardId);

const BoardPage = ({ route, navigation }: BoardScreenProps) => {
  const lists = getLists(route.params.boardId);

  return (
    <View>
      {lists.map((list) => (
        <Button
          key={list.id}
          title={list.name}
          onPress={() => navigation.navigate("ListPage", { listId: list.id })}
        />
      ))}
    </View>
  );
};

export default BoardPage;
