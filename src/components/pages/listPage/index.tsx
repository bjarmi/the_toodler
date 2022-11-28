import { ScrollView } from "react-native";
import { IList, ITask, ITaskForm } from "../../../common/interfaces";
import { ListScreenProps } from "../../../common/type";
import TaskCard from "../../cards/taskCard";
import EntityList from "../../list";
import { dispatchActions, useAppSelector } from "../../../common/hooks";
import CustomModal from "../../modal";
import PageLayout from "../pageLayout";
import { useState } from "react";
import TaskForm from "../../input/forms/taskForm";


const ListPage = ({ route }: ListScreenProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const list: IList = route.params.list;
  const { tasks } = useAppSelector((store) => store.tasks);

  const getTasksByList = (list: IList): ITask[] =>
    tasks.filter((task: ITask) => task.listId === list.id);

  const onCreate = (task: ITaskForm) => {
    setIsModalOpen(false);
    dispatchActions.addTask({ ...task, listId: list.id });
  };

  return (
    <PageLayout action={() => setIsModalOpen(true)}>
      <CustomModal
        visible={isModalOpen}
        hideModal={() => setIsModalOpen(false)}
      >
        <TaskForm onSubmit={onCreate} />
      </CustomModal>
      <ScrollView>
        <EntityList<ITask>
          entities={getTasksByList(list)}
          renderCallback={(task: ITask) => (
            <TaskCard key={task.id} task={task} />
          )}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default ListPage;
