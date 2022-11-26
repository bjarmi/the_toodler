import { SafeAreaView, ScrollView } from "react-native";
import { IList, ITask } from "../../../common/interfaces";
import { ListScreenProps } from "../../../common/type";
import TaskCard from "../../cards/taskCard";
import EntityList from "../../list";
import { useAppSelector } from "../../../common/hooks";
import { ListScreenProps } from "../../../common/type";
import { ReactNode } from "react";

const ListPage = ({ route }: ListScreenProps): ReactNode => {
  const list: IList = route.params.list;
  const { tasks } = useAppSelector((store) => store.tasks);

  const getTasksByList = (list: IList): Set<ITask> => {
    const filteredTasks: Set<ITask> = new Set();

    tasks.forEach((task: ITask) => {
      if (task.listId === list.id) filteredTasks.add(task);
    });

    return filteredTasks;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EntityList<ITask>
          entities={getTasksByList(list)}
          entityComponent={TaskCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPage;
