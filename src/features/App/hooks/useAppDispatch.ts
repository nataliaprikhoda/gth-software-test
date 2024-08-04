import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/types";

export const useAppDispatch = () => useDispatch<AppDispatch>();