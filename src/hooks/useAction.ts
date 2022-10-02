import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ActionCreator from "../store/action_creator";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreator, dispatch);
};
