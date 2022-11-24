import { View, Text } from "react-native";
import { data } from "../../../../dataStub";

const getTasks = (listId: number) =>
  data.tasks.filter((task) => task.listId === listId);

const ListPage = ({ route }) => {
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
