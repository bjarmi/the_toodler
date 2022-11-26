import { IEntity } from "../../common/interfaces";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { faFaceMeh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Title } from "react-native-paper";
import styles from "./styles";

interface Props<EntityType> {
  entities: EntityType[];
  entityComponent: (entity: IEntity) => ReactNode;
}

const EntityList = <E extends IEntity>({
  entities: entityList,
  entityComponent,
}: Props<E>) =>
  entityList.length !== 0 ? (
    <>{entityList.map((entity: IEntity) => entityComponent(entity))}</>
  ) : (
    <View style={styles.emptyView}>
      <FontAwesomeIcon size={96} icon={faFaceMeh} />
      <Title>No Results found</Title>
    </View>
  );

export default EntityList;
