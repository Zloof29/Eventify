import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  addEvent,
  deleteEvent,
  initEvent,
  initUser,
  logoutUser,
  oneEvent,
} from "./reducers";
import { UserModel } from "../Models/UserModel";
import { EventModel } from "../Models/EventModel";

// Application state:
export type AppState = {
  events: EventModel[];
  user: UserModel;
};

// Creating products slice:
const eventSlice = createSlice({
  name: "events", // Internal use
  initialState: null,
  reducers: { initEvent, addEvent, oneEvent, deleteEvent },
});

// Create user slice:
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: { initUser, logoutUser },
});

// Creating action creators:
export const eventActions = eventSlice.actions;
export const userActions = userSlice.actions;

// Main redux object:
export const store = configureStore<AppState>({
  reducer: {
    events: eventSlice.reducer, // Product state.
    user: userSlice.reducer, // User state
  },
});
