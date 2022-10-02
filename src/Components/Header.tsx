import {
  AppBar,
  Button,
  Hidden,
  InputBase,
  Select,
  Typography,
  MenuItem,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useCallback, useState } from "react";
import { useActions } from "../hooks/useAction";
import { useDebounce } from "../hooks/useDebounce";
import { FIELD_FOR_SORT_GOODS } from "../types/goods";

const style = {
  appBar: {
    height: "7vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px",
  },
  inputBase: {
    background: "whitesmoke",
    border: "solid 1px",
    borderRadius: "5px",
    height: "70%",
    padding: "5px",
    width: "45%",
    marginTop: "10px",
    marginRight: "3px",
  },
  select: { width: "120px" },
};

export const Header = () => {
  const [order, setOrder] = useState<string>(FIELD_FOR_SORT_GOODS.NONE + "");

  const { showModalAction } = useActions();
  const debounce = useDebounce();
  const { setFilterAction, setOrderAction } = useActions();

  const onFilterChange = useCallback((event: { target: { value: string } }) => {
    debounce(() => {
      setFilterAction(event.target.value);
    }, 300);
  }, []);

  const onOrderChange = useCallback((event: { target: { value: string } }) => {
    debounce(() => {
      setOrderAction(Number(event.target.value) as FIELD_FOR_SORT_GOODS);
    }, 300);

    setOrder(event.target.value);
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <Box>
          <AppBar
            position="relative"
            style={{ ...style.appBar, flexDirection: "row" }}
          >
            <Hidden smDown>
              <Typography variant="h4" mt={1}>
                Goods App 🍉
              </Typography>
            </Hidden>

            <InputBase
              style={style.inputBase}
              color="secondary"
              type="search"
              placeholder="🔍 Search.."
              onChange={onFilterChange}
            />
            <Select
              id="demo-simple-select"
              style={style.select}
              value={order}
              onChange={onOrderChange}
            >
              <MenuItem value={FIELD_FOR_SORT_GOODS.NONE}>Sort</MenuItem>
              <MenuItem value={FIELD_FOR_SORT_GOODS.TITLE}>Title</MenuItem>
              <MenuItem value={FIELD_FOR_SORT_GOODS.DESCRIPTION}>
                Description
              </MenuItem>
              <MenuItem value={FIELD_FOR_SORT_GOODS.WEIGHT}>Weight</MenuItem>
            </Select>
            <Button onClick={showModalAction} color="inherit">
              Add +
            </Button>
          </AppBar>
        </Box>
      </Container>
    </div>
  );
};
