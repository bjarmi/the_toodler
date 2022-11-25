import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import { data } from "../../../../dataStub";
import { BoardScreenProps } from "../../../common/type";
import BoardOverview from "./boardOverview";

const getLists = (boardId: number) =>
  data.lists.filter((list) => list.boardId === boardId);

const getBoard = (boardId: number) =>
  data.boards.filter((board) => board.id === boardId)[0];

const BoardPage = ({ route, navigation }: BoardScreenProps) => {
  const lists = getLists(route.params.boardId);
  const board = getBoard(route.params.boardId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BoardOverview board={board} />
        {lists.map((list) => (
          <Button
            key={list.id}
            title={list.name}
            onPress={() => navigation.navigate("ListPage", { listId: list.id })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardPage;
