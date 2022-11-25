import { View, Text } from "react-native";
import { data } from "../../../../dataStub";
import { ListScreenProps } from "../../../common/type";

const getTasks = (listId: number) =>
  data.tasks.filter((task) => task.listId === listId);

const ListPage = ({ route }: ListScreenProps) => {
  const tasks = getTasks(route.params.listId);

  return (
    <View>
      {tasks.map((task) => (
        <Text key={task.id}>{task.name}</Text>
      ))}
    </View>
  );
};

export default ListPage;
