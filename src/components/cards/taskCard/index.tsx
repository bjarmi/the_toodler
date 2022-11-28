import { Card, Title, TouchableRipple } from "react-native-paper";
import { IList, ITask, ITaskForm } from "../../../common/interfaces";
import styles from "./styles";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { dispatchActions, useAppSelector } from "../../../common/hooks";
import CustomModal from "../../modal";
import { useState } from "react";
import TaskForm from "../../input/forms/taskForm";

interface Props {
  task: ITask;
}

const TaskCard = ({ task }: Props) => {
  const { lists } = useAppSelector((store) => store.lists);
  const [isEditing, setIsEditing] = useState(false);

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
      <Card
        elevation={2}
        style={{
          ...styles.card,
          backgroundColor: lists.find((list: IList) => list.id === task.listId)
            .color,
        }}
      >
        <TouchableRipple
          style={styles.touchable}
          onPress={() => console.log("asdf")}
          onLongPress={() => setIsEditing(true)}
        >
          <View style={styles.content}>
            <Title>{task.name}</Title>
            <RadioButton
              value="first"
              status={task.isFinished ? "checked" : "unchecked"}
              onPress={() => onEdit({ ...task, isFinished: !task.isFinished })}
            />
          </View>
        </TouchableRipple>
      </Card>
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
