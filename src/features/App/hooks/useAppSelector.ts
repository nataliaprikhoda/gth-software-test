import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;