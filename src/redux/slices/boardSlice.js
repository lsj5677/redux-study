import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  selectedBoardId: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state, action) => {
      const title = action.payload;
      state.boards.push({
        id: state.boards.length + 1,
        title,
      });
    },

    deleteBoard: (state, action) => {
      const targetBoardId = action.payload;
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== targetBoardId),
      };
    },

    seleteBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },

    resetBoard: () => initialState,
  },
});

export const {
  createBoard,
  deleteBoard,
  // updateBoard,
  seleteBoard,
  resetBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
