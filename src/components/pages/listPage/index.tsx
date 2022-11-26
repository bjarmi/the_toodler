import { SafeAreaView, ScrollView } from "react-native";
import { data } from "../../../redux/dataStub";
import { ITask } from "../../../common/interfaces";
import { ListScreenProps } from "../../../common/type";
import TaskCard from "../../cards/taskCard";
import EntityList from "../../list";

const getTasks = (listId: number) =>
  data.tasks.filter((task) => task.listId === listId);

const ListPage = ({ route }: ListScreenProps) => {
  const tasks = getTasks(route.params.listId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EntityList<ITask> entities={tasks} entityComponent={TaskCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPage;
