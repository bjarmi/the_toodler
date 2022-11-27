import { SafeAreaView, ScrollView } from "react-native";
import { IList, ITask } from "../../../common/interfaces";
import { ListScreenProps } from "../../../common/type";
import TaskCard from "../../cards/taskCard";
import EntityList from "../../list";
import { useAppSelector } from "../../../common/hooks";

const ListPage = ({ route }: ListScreenProps) => {
  const list: IList = route.params.list;
  const { tasks } = useAppSelector((store) => store.tasks);

  const getTasksByList = (list: IList): ITask[] =>
    tasks.filter((task: ITask) => task.listId === list.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EntityList<ITask>
          entities={getTasksByList(list)}
          renderCallback={(task: ITask) => (
            <TaskCard key={task.id} task={task} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPage;
