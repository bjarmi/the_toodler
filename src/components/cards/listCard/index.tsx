import { Card, Title, TouchableRipple } from "react-native-paper";
import { IList, IListForm } from "../../../common/interfaces";
import { useNavigation } from "@react-navigation/native";
import { BoardScreenProps } from "../../../common/type";
import styles from "./styles";
import { dispatchActions } from "../../../redux/store";
import { useState } from "react";
import CustomModal from "../../modal";
import ListForm from "../../input/forms/listForm";

interface Props {
  list: IList;
}

const ListCard = ({ list }: Props) => {
  const navigation = useNavigation<BoardScreenProps["navigation"]>();
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = (form: IListForm) => {
    setIsEditing(false);
    dispatchActions.editList({ id: list.id, ...form });
  };

  const onDelete = () => {
    setIsEditing(false);
    dispatchActions.removeList(list);
  };

  return (
    <>
      <Card
        elevation={2}
        onPress={() => navigation.navigate("ListPage", { list })}
        style={{ ...styles.card, backgroundColor: list.color }}
      >
        <TouchableRipple
          style={styles.content}
          onPress={() => navigation.navigate("ListPage", { list })}
          onLongPress={() => setIsEditing(true)}
        >
          <Title>{list.name}</Title>
        </TouchableRipple>
      </Card>
      <CustomModal visible={isEditing} hideModal={() => setIsEditing(false)}>
        <ListForm onSubmit={onEdit} list={list} onDelete={onDelete} />
      </CustomModal>
    </>
  );
};

export default ListCard;
