import {
  Button,
  Modal,
  Box,
  ButtonGroup,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const style = {
  box: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "350px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gridGap: "10px",
  },
  button: {
    width: "70px",
    height: "50px",
  },
};

export const ModalForm = () => {
  const { hideModalAction, editedItemGoodsListAction, addItemGoodsListAction } =
    useActions();

  const modal = useTypedSelector((state) => state.modal);
  const goods = useTypedSelector((state) => state.goods);

  const [title, setTitle] = useState<string>(
    modal.item ? modal.item.title : ""
  );
  const [description, setDescription] = useState<string>(
    modal.item ? modal.item.description : ""
  );
  const [weight, setWeight] = useState<string>(
    modal.item ? modal.item.weight : ""
  );
  const [category, setCategory] = useState<string>(
    modal.item ? modal.item.category : ""
  );

  const onReset = useCallback(() => {
    setTitle(modal.item ? modal.item.title : "");
    setDescription(modal.item ? modal.item.title : "");
    setWeight(modal.item ? modal.item.title : "");
    setCategory(modal.item ? modal.item.title : "");
  }, []);

  const onSave = useCallback(() => {
    if (title && description && weight) {
      if (modal.item) {
        editedItemGoodsListAction({
          ...modal.item,
          title: title,
          description: description,
          weight: weight,
          category: category,
        });
      } else {
        addItemGoodsListAction({
          title: title,
          description: description,
          weight: weight,
          category: category,
        });
      }

      if (goods.error) {
        alert("Error " + goods.error);
      } else {
        setTitle("");
        setDescription("");
        setWeight("");
        setCategory("");
      }
    } else {
      alert("Empty field");
    }
  }, [title, description, weight, category]);

  return (
    <div>
      <Modal
        open={modal.show}
        onClose={hideModalAction}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
          <Typography variant="h5">
            {modal.item ? "Edit mode" : "Add mode"}
          </Typography>
          <TextField
            id="outlined-required"
            required
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          />
          <TextField
            id="outlined-required"
            required
            label="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="outlined-required"
            label="Weight"
            value={weight}
            required
            onChange={(e) => {
              if (Number(e.target.value) || e.target.value === "") {
                setWeight(e.target.value);
              } else {
                e.target.value = "";
                alert("weight must be a number");
              }
            }}
          />
          <TextField
            id="outlined-required"
            label="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <ButtonGroup variant="text" aria-label="text button group">
            <Button style={style.button} onClick={onSave}>
              {goods.isDataAdding || goods.isUpdating ? (
                <CircularProgress color="secondary" size={30} />
              ) : (
                "SAVE"
              )}
            </Button>
            <Button style={style.button} onClick={onReset}>
              RESET
            </Button>
            <Button style={style.button} onClick={hideModalAction}>
              CLOSE
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};
