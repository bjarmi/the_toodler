import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Defines all the different params each screen accepts
export type PageParams = {
    HomePage: undefined;
    BoardPage: { boardId: number };
    ListPage: { listId: number };
};

export type HomeScreenProps = NativeStackScreenProps<PageParams, 'HomePage'>;
export type BoardScreenProps = NativeStackScreenProps<PageParams, 'BoardPage'>;
export type ListScreenProps = NativeStackScreenProps<PageParams, 'ListPage'>;
