import { ReactNode } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useAppSelector } from "../../../common/hooks";
import { IBoard, IList } from "../../../common/interfaces";
import { BoardScreenProps } from "../../../common/type";
import ListCard from "../../cards/listCard";
import EntityList from "../../list";
import BoardOverview from "./boardOverview";

const BoardPage = ({ route }: BoardScreenProps) => {
  const board: IBoard = route.params.board;
  const { lists } = useAppSelector((store) => store.lists);

  const getListsByBoard = (board: IBoard): Set<IList> => {
    const filteredLists: Set<IList> = new Set();

    lists.forEach((list: IList) => {
      if (list.boardId === board.id) filteredLists.add(list);
    });

    return filteredLists;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BoardOverview board={board} />
        <EntityList<IList>
          entities={getListsByBoard(board)}
          entityComponent={ListCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardPage;
