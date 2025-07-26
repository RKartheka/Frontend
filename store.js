import { configureStore, createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    sessions: [],
    activeSessionId: null,
    loading: false,
    input: ''
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setSessions: (state, action) => {
      state.sessions = action.payload;
    },
    setActiveSession: (state, action) => {
      state.activeSessionId = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

export const {
  setMessages,
  addMessage,
  setSessions,
  setActiveSession,
  setLoading,
  setInput
} = chatSlice.actions;

export const store = configureStore({ reducer: { chat: chatSlice.reducer } });
