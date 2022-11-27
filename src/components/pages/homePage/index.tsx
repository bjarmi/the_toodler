import { useState } from "react";
import { ScrollView } from "react-native";
import { useAppSelector, dispatchActions } from "../../../common/hooks";
import { IBoard, IBoardForm } from "../../../common/interfaces";
import BoardCard from "../../cards/boardCard";
import BoardForm from "../../forms/boardForm";
import EntityList from "../../list";
import CustomModal from "../../modal";
import PageLayout from "../pageLayout";

const HomePage = () => {
  const { boards } = useAppSelector((store) => store.boards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCreate = (board: IBoardForm) => {
    setIsModalOpen(false);
    dispatchActions.addBoard(board);
  };

  return (
    <PageLayout action={() => setIsModalOpen(true)}>
      <CustomModal
        visible={isModalOpen}
        hideModal={() => setIsModalOpen(false)}
      >
        <BoardForm onSubmit={(form: IBoardForm) => onCreate(form)} />
      </CustomModal>
      <ScrollView>
        <EntityList<IBoard>
          entities={boards}
          renderCallback={(board: IBoard) => <BoardCard board={board} />}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default HomePage;
