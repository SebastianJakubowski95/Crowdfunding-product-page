import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBookmarked: false,
  userPledge: 0,
  selectedReward: null,
  minimumPledge: null,
  moneyCurrent: 69995,
  moneyGoal: 100000,
  totalBackers: 4999,
  daysLeft: 56,
  data: [
    {
      id: "pledgewithnoreward",
      title: "Pledge with no reward",
      pledge: 0,
      leftItems: 1000000000000,
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email",
    },
    {
      id: "bamboostand",
      title: "Bamboo Stand",
      pledge: 25,
      leftItems: 100,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    },
    {
      id: "blackeditionstand",
      title: "Black Edition Stand",
      pledge: 75,
      leftItems: 70,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    },
    {
      id: "mahoganyspecialedition",
      title: "Mahogany Special Edition",
      pledge: 120,
      leftItems: 0,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    },
  ],
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    calculate(state, action) {
      const userPledge = Number(action.payload);
      const selectedRewardId = state.selectedReward;
      const selectedRewardItem = state.data.filter(
        (item) => item.id == selectedRewardId
      )[0];
      state.moneyCurrent += Number(userPledge);
      selectedRewardItem.leftItems--;
      state.totalBackers++;
    },
    setSelectReward(state, action) {
      state.selectedReward = action.payload;
    },
    setUserPledge(state, action) {
      state.userPledge = action.payload;
    },
    setMinimumPledge(state, action) {
      state.minimumPledge = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
