import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import { data } from "../../../../dataStub";
import { IBoard, IList } from "../../../common/interfaces";
import { BoardScreenProps } from "../../../common/type";
import ListCard from "../../cards/listCard";
import EntityList from "../../list";
import BoardOverview from "./boardOverview";

// NOTE: Temp function, replace with redux
const getLists = (boardId: number): IList[] =>
  data.lists.filter((list: IList) => list.boardId === boardId);

// NOTE: Temp function, replace with redux
const getBoard = (boardId: number): IBoard =>
  data.boards.filter((board: IBoard) => board.id === boardId)[0];

const BoardPage = ({ route }: BoardScreenProps) => {
  const lists: IList[] = getLists(route.params.boardId);
  const board: IBoard = getBoard(route.params.boardId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BoardOverview board={board} />
        <EntityList<IList> entities={lists} entityComponent={ListCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardPage;
