import { IEntity } from "../../common/interfaces";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Title } from "react-native-paper";
import styles from "./styles";

interface Props<T> {
  entities: T[];
  renderCallback: (entity: IEntity) => ReactNode;
}

const EntityList = <E extends IEntity>({
  entities,
  renderCallback,
}: Props<E>) => {
  if (entities.length !== 0)
    return (
      <>
        {entities.map((entity: IEntity) => (
          <View key={entity.id}>{renderCallback(entity)}</View>
        ))}
      </>
    );
  else
    <View style={styles.emptyView}>
      <FontAwesomeIcon size={96} icon={faFaceMeh} />
      <Title>No Results found</Title>
    </View>;
};

export default EntityList;
