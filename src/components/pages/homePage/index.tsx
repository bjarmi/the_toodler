import { SafeAreaView, ScrollView } from "react-native";
import { useAppSelector } from "../../../common/hooks";
import { IBoard } from "../../../common/interfaces";
import BoardCard from "../../cards/boardCard";
import EntityList from "../../list";
import PageLayout from "../pageLayout";

const HomePage = () => {
  const { boards } = useAppSelector((store) => store.boards);

  const openCreateModal = () => {
    console.log("Open modal");
  };

  return (
    <PageLayout action={() => openCreateModal()}>
      <ScrollView>
        <EntityList<IBoard> entities={boards} entityComponent={BoardCard} />
      </ScrollView>
    </PageLayout>
  );
};

export default HomePage;
