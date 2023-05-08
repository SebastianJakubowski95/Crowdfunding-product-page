import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backThisProjectModal: false,
  successMessageModal: false,
};

const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState,
  reducers: {
    openBackThisProjectModal(state) {
      state.backThisProjectModal = true;
    },
    closeBackThisProjectModal(state) {
      state.backThisProjectModal = false;
    },
    openSuccessMessageModal(state) {
      state.successMessageModal = true;
    },
    closeSuccessMessageModal(state) {
      state.successMessageModal = false;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice;
