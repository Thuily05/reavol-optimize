import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

//homeSelector là một inport selector - làm hàm nhận toàn bộ state của Redux store và trả về một phần state
export const homeSelector = (state: RootState) => state.home
//hàm có tham số là một biến có tên là state (kiểu DL là RootState), trả về file home của biến đó

