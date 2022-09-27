import * as TodoActionCreators from "./todo";
import * as AppActionCreators from "./modal";
import * as ModalActionCreators from "./filter";

export default {
  ...TodoActionCreators,
  ...AppActionCreators,
  ...ModalActionCreators,
};
