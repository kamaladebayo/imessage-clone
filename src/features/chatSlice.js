import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './userAPI';

const initialState = {
  chat: null,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'chat/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
    chatName: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  }

});

export const { setChat } = chatSlice.actions;


export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;



export default chatSlice.reducer;
