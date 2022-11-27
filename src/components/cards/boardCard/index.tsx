import { Card, Title, Paragraph, TouchableRipple } from "react-native-paper";
import { IBoard, IBoardForm } from "../../../common/interfaces";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "../../../common/type";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import icons from "../../../common/icons";
import styles from "./styles";
import CustomModal from "../../modal";
import { useState } from "react";
import BoardForm from "../../forms/boardForm";
import { dispatchActions } from "../../../redux/store";

interface Props {
  board: IBoard;
}

const BoardCard = ({ board }: Props) => {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = (form: IBoardForm) => {
    setIsEditing(false);
    dispatchActions.editBoard({ id: board.id, ...form });
  };

  const onDelete = () => {
    setIsEditing(false);
    dispatchActions.removeBoard(board);
  };

  return (
    <>
      <Card elevation={2} style={styles.card}>
        <TouchableRipple
          onPress={() => navigation.navigate("BoardPage", { board })}
          onLongPress={() => setIsEditing(true)}
        >
          <View style={styles.cardContent}>
            <View style={styles.imageContainer}>
              <FontAwesomeIcon size={48} icon={icons[board.thumbnailPhoto]} />
            </View>
            <View style={styles.aboutContainer}>
              <Title>{board.name}</Title>
              <Paragraph>{board.description.slice(0, 60)}...</Paragraph>
            </View>
          </View>
        </TouchableRipple>
      </Card>
      <CustomModal visible={isEditing} hideModal={() => setIsEditing(false)}>
        <BoardForm
          onSubmit={(form: IBoardForm) => onEdit(form)}
          onDelete={() => onDelete()}
          initialValue={board}
        />
      </CustomModal>
    </>
  );
};

export default BoardCard;
