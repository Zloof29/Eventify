import { Action, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";
import { EventModel } from "../Models/EventModel";

// npm i react-redux @types/react-redux @reduxjs/toolkit

// Init all products
export function initEvent(
  currentState: EventModel[],
  action: PayloadAction<EventModel[]>
) {
  const newState: EventModel[] = action.payload; // Here, action.payload is all products to init.
  return newState;
}

export function oneEvent(
  currentState: EventModel,
  action: PayloadAction<EventModel>
) {
  const newState: EventModel = action.payload; // Here, action.payload is all products to init.
  return newState;
}

export function deleteEvent(
  currentState: EventModel[],
  action: PayloadAction<EventModel>
) {
  const newState = currentState.filter(
    (event) => event.id !== action.payload.id
  );
  return newState;
}

// Add product:
export function addEvent(
  currentState: EventModel[],
  action: PayloadAction<EventModel>
) {
  const newState: EventModel[] = [...currentState];
  newState.push(action.payload); // Here, action.payload is a product to add.
  return newState;
}

export function initUser(
  currentState: UserModel,
  action: PayloadAction<UserModel>
) {
  const newState: UserModel = action.payload;
  return newState;
}

export function logoutUser(currentState: UserModel, action: Action) {
  const newState: UserModel = null;
  return newState;
}
