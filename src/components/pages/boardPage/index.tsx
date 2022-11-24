import { View, Text, Button } from "react-native";
import { data } from "../../../../dataStub";
import { ListRoute } from "../../../common/constants";

const getLists = (boardId: number) =>
  data.lists.filter((list) => list.boardId === boardId);

const BoardPage = ({ route, navigation }) => {
  const lists = getLists(route.params.id);

  return (
    <View>
      {lists.map((list) => (
        <Button
          key={list.id}
          title={list.name}
          onPress={() => navigation.navigate(ListRoute, { listId: list.id })}
        />
      ))}
    </View>
  );
};

export default BoardPage;
