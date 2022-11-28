/*
 * This module contains React- and Redux hooks to be used within the application.
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
export { dispatchActions } from "../redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
