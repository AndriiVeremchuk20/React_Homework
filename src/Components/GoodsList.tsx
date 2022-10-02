import { useMemo } from "react";
import { Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FIELD_FOR_SORT_GOODS } from "../types/goods";
import { GoodsCard } from "./GoodsCard";

const style = {
  box: {
    background: "whitesmoke",
    minHeight: "94vh",
    maxHeight: "auto",
  },
  grid: {
    height: "auto",
    width: "auto",
  },
};

export const GoodsList = () => {
  const goodsList = useTypedSelector((state) => state.goods.data.goods);
  const filter = useTypedSelector((state) => state.goods.filter);
  const order = useTypedSelector((state) => state.goods.order);

  const orderedList = useMemo(() => {
    switch (order) {
      case FIELD_FOR_SORT_GOODS.TITLE:
        return [...goodsList].sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );

      case FIELD_FOR_SORT_GOODS.DESCRIPTION:
        return [...goodsList].sort((a, b) =>
          a.description > b.description
            ? 1
            : b.description > a.description
            ? -1
            : 0
        );

      case FIELD_FOR_SORT_GOODS.WEIGHT:
        return [...goodsList].sort(
          (a, b) => Number(b.weight) - Number(a.weight)
        );

      default:
        return goodsList;
    }
  }, [order, goodsList]);

  const filtredList = useMemo(() => {
    return orderedList.filter(
      (i) =>
        i.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        i.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }, [filter, orderedList]);

  return (
    <Container maxWidth="md">
      <Box maxWidth={"md"} style={style.box}>
        <Grid
          container
          style={style.grid}
          justifyContent={"space-around"}
          wrap={"wrap"}
        >
          {filtredList.map((item) => (
            <GoodsCard key={item.id} goods={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
