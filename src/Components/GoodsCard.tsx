import {
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Goods } from "../types/goods";

const style = {
  card: {
    width: "160px",
    height: "200px",
    padding: "4px",
  },
};

interface GoodsCardProps {
  goods: Goods;
}

export const GoodsCard: React.FC<GoodsCardProps> = ({ goods }) => {
  const { deleteFromGoodsListAction } = useActions();
  const { showModalEditAction } = useActions();
  const goodsState = useTypedSelector((state) => state.goods);

  return (
    <Grid item m={1}>
      <Card elevation={2} style={style.card}>
        <CardContent>
          <Typography variant="h6">{goods.title}</Typography>
          <hr />
          <Typography variant="subtitle2">{goods.description}</Typography>
          <Typography variant="subtitle2">{goods.weight}</Typography>
          <Typography variant="subtitle2">
            {goods.category ? goods.category : "???"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              showModalEditAction(goods);
            }}
          >
            ✍🏼
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              deleteFromGoodsListAction(goods.id);
            }}
          >
            {goodsState.isDeleted ? (
              goodsState.isDeleted[goods.id] ? (
                <CircularProgress color="secondary" size={25} />
              ) : (
                "❌"
              )
            ) : (
              "❌"
            )}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
