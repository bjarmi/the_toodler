import { SafeAreaView, ScrollView } from "react-native";
import { data } from "../../../redux/dataStub";
import { IBoard } from "../../../common/interfaces";
import BoardCard from "../../cards/boardCard";
import EntityList from "../../list";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EntityList<IBoard>
          entities={data.boards}
          entityComponent={BoardCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
