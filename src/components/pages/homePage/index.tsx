import { View, Text, Button } from "react-native";
import { data } from "../../../../dataStub";
import { BoardRoute } from "../../../common/constants";

const HomePage = ({ navigation }) => {
  return (
    <View>
      {data.boards.map((board) => (
        <Button
          onPress={() => navigation.navigate(BoardRoute, { id: board.id })}
          title={board.name}
        />
      ))}
    </View>
  );
};

export default HomePage;
