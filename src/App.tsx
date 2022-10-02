import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GoodsList } from "./Components/GoodsList";
import { Header } from "./Components/Header";
import { ModalForm } from "./Components/ModalForm";
import { useActions } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";

export const App = () => {
  const { fetchGoodsListAction } = useActions();
  const goods = useTypedSelector((state) => state.goods);
  const modal = useTypedSelector((state) => state.modal);

  useEffect(() => {
    fetchGoodsListAction();
  }, []);

  if (goods.loading)
    return (
      <Grid
        container
        style={{ height: "100vh" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <CircularProgress color="secondary" size={100} />
          <Typography variant={"h4"} m={5}>
            Plese wait
          </Typography>
        </Grid>
      </Grid>
    );
  else if (goods.error) {
    <Alert severity="error">ERROR: {goods.error}</Alert>;
  }

  return (
    <div>
      <Header />
      <GoodsList />
      {modal.show && <ModalForm />}
    </div>
  );
};
