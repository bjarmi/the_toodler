import { SafeAreaView, ScrollView, View } from "react-native";
import { data } from "../../../../dataStub";
import BoardCard from "../../cards/boardCard";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {data.boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
