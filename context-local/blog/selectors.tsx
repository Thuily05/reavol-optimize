import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const blogSelector = (state: RootState) => state.blog


