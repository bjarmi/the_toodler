import { IEntity } from "../../common/interfaces";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Title } from "react-native-paper";
import styles from "./styles";

interface Props<T> {
  entities: Set<T>;
  entityComponent: (entity: IEntity) => ReactNode;
}

const createList = (
  entities: Set<IEntity>,
  component: (entity: IEntity) => ReactNode
): ReactNode[] => {
  let nodes: ReactNode[] = [];

  entities.forEach((entity: IEntity) => {
    nodes.push(<View key={entity.id}>{component(entity)}</View>);
  });

  return nodes;
};

const EntityList = <E extends IEntity>({
  entities,
  entityComponent,
}: Props<E>) =>
  entities.size !== 0 ? (
    <>{createList(entities, entityComponent)}</>
  ) : (
    <View style={styles.emptyView}>
      <FontAwesomeIcon size={96} icon={faFaceMeh} />
      <Title>No Results found</Title>
    </View>
  );

export default EntityList;
