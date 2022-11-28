import { List } from "react-native-paper";
import { IList, ISubTask, ITask, ITaskForm } from "../../../common/interfaces";
import styles from "./styles";
import { RadioButton } from "react-native-paper";
import { dispatchActions, useAppSelector } from "../../../common/hooks";
import CustomModal from "../../modal";
import { useState } from "react";
import TaskForm from "../../input/forms/taskForm";

interface Props {
  task: ITask;
}

const SubTask = ({ subTask }) => {
  const toggleFinished = () => {
    dispatchActions.editSubTask({
      ...subTask,
      isFinished: !subTask.isFinished,
    });
  };

  return (
    <List.Item
      key={subTask.id}
      title={subTask.name}
      right={() => (
        <RadioButton
          value="first"
          status={subTask.isFinished ? "checked" : "unchecked"}
          onPress={() => toggleFinished()}
        />
      )}
    />
  );
};
const TaskCard = ({ task }: Props) => {
  const { lists } = useAppSelector((store) => store.lists);
  const { subTasks } = useAppSelector((store) => store.subTasks);
  const [isEditing, setIsEditing] = useState(false);

  const tasksSubTasks = (): ISubTask[] =>
    subTasks.filter((subTask: ISubTask) => subTask.taskId === task.id);

  const onEdit = (form: ITaskForm): void => {
    setIsEditing(false);
    dispatchActions.editTask({ id: task.id, ...form });
  };

  const onDelete = (): void => {
    setIsEditing(false);
    dispatchActions.removeTask(task);
  };

  return (
    <>
      <List.Accordion
        title={task.name}
        onLongPress={() => setIsEditing(true)}
        right={() => (
          <RadioButton
            value="first"
            status={task.isFinished ? "checked" : "unchecked"}
            onPress={() => onEdit({ ...task, isFinished: !task.isFinished })}
          />
        )}
        style={{
          ...styles.card,
          backgroundColor: lists.find((list: IList) => list.id === task.listId)
            .color,
        }}
      >
        <List.Subheader>{task.description}</List.Subheader>
        {tasksSubTasks().map((subTask: ISubTask) => (
          <SubTask subTask={subTask} />
        ))}
      </List.Accordion>
      <CustomModal visible={isEditing} hideModal={() => setIsEditing(false)}>
        <TaskForm
          onSubmit={(form: ITaskForm) => onEdit(form)}
          onDelete={() => onDelete()}
          task={task}
        />
      </CustomModal>
    </>
  );
};

export default TaskCard;
