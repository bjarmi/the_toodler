import { SafeAreaView, ScrollView } from "react-native";
import { useAppSelector } from "../../../common/hooks";
import { IBoard } from "../../../common/interfaces";
import BoardCard from "../../cards/boardCard";
import EntityList from "../../list";

const HomePage = () => {
  const { boards } = useAppSelector((store) => store.boards);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EntityList<IBoard> entities={boards} entityComponent={BoardCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
