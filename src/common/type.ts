import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IBoard, IList } from "./interfaces";

// Defines all the different params each screen accepts
export type PageParams = {
  HomePage: undefined;
  BoardPage: { board: IBoard };
  ListPage: { list: IList };
};

export type HomeScreenProps = NativeStackScreenProps<PageParams, "HomePage">;
export type BoardScreenProps = NativeStackScreenProps<PageParams, "BoardPage">;
export type ListScreenProps = NativeStackScreenProps<PageParams, "ListPage">;
