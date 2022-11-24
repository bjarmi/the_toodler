import { View, Button } from "react-native";
import { data } from "../../../../dataStub";
import { HomeScreenProps } from "../../../common/type";

const HomePage = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      {data.boards.map((board) => (
        <Button
          key={board.id}
          onPress={() =>
            navigation.navigate("BoardPage", { boardId: board.id })
          }
          title={board.name}
        />
      ))}
    </View>
  );
};

export default HomePage;
