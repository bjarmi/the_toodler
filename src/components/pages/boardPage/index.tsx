import { useState } from "react";
import { ScrollView } from "react-native";
import { dispatchActions, useAppSelector } from "../../../common/hooks";
import { IBoard, IList, IListForm } from "../../../common/interfaces";
import { BoardScreenProps } from "../../../common/type";
import ListCard from "../../cards/listCard";
import ListForm from "../../input/forms/listForm";
import EntityList from "../../list";
import CustomModal from "../../modal";
import PageLayout from "../pageLayout";
import BoardOverview from "./boardOverview";

const BoardPage = ({ route }: BoardScreenProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const board: IBoard = route.params.board;
  const { lists } = useAppSelector((store) => store.lists);

  const getListsByBoard = (board: IBoard): IList[] =>
    lists.filter((list: IList) => list.boardId === board.id);

  const onCreate = (list: IListForm) => {
    setIsModalOpen(false);
    dispatchActions.addList({ ...list, boardId: board.id });
  };

  return (
    <PageLayout action={() => setIsModalOpen(true)}>
      <CustomModal
        visible={isModalOpen}
        hideModal={() => setIsModalOpen(false)}
      >
        <ListForm onSubmit={(form: IListForm) => onCreate(form)} />
      </CustomModal>
      <ScrollView>
        <BoardOverview board={board} />
        <EntityList<IList>
          entities={getListsByBoard(board)}
          renderCallback={(list: IList) => (
            <ListCard key={list.id} list={list} />
          )}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default BoardPage;
