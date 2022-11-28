import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAppSelector } from "../../../../common/hooks";
import { ISubTask, ITask, ITaskForm } from "../../../../common/interfaces";
import styles from "./styles";
import SubTasksForm from "./subTasksForm";

const initialTaskFormState = (task?: ITask): ITaskForm =>
  task
    ? task
    : {
        name: "",
        isFinished: false,
        description: "",
        listId: -1,
      };

interface Props {
  onSubmit: (task: ITaskForm) => void;
  onDelete?: () => void;
  task?: ITask;
}

const TaskForm = ({ onSubmit, onDelete, task }: Props) => {
  const { subTasks } = useAppSelector((store) => store.subTasks);
  const [taskForm, setTaskForm] = useState(initialTaskFormState(task));
  const [subTaskForms, setSubTaskForms] = useState(
    subTasks.filter((subTask: ISubTask) => subTask.taskId === task?.id)
  );

  const taskInputHandler = (name: string, value: string) =>
    setTaskForm({
      ...taskForm,
      [name]: value,
    });

  const subTaskInputHandler = (idx: number, name: string) => {
    let forms = [...subTaskForms];
    let taskForm = { ...subTaskForms[idx] };
    taskForm.name = name;
    forms[idx] = taskForm;
    setSubTaskForms(forms);
  };

  const addSubTask = () => {
    subTaskForms.push({ name: "", isFinished: false });
  };

  const removeSubTask = (idx: number) =>
    setSubTaskForms(subTaskForms.splice(idx, 1));

  const handleOnSubmit = () => onSubmit(taskForm);

  return (
    <View>
      <TextInput
        style={styles.input}
        label="Board Name"
        value={taskForm.name}
        onChangeText={(value: string) => taskInputHandler("name", value)}
      />
      <TextInput
        style={styles.input}
        label="Board Name"
        value={taskForm.description}
        onChangeText={(value: string) => taskInputHandler("description", value)}
      />
      <SubTasksForm
        subTasks={subTasks}
        onChange={subTaskInputHandler}
        onRemove={removeSubTask}
      />
      <View style={styles.buttonGroup}>
        {task ? (
          <Button mode="contained" buttonColor="red" onPress={() => onDelete()}>
            Delete
          </Button>
        ) : (
          <></>
        )}
        <Button mode="contained" onPress={() => handleOnSubmit()}>
          {task ? "Confirm" : "Create"}
        </Button>
      </View>
    </View>
  );
};

export default TaskForm;
