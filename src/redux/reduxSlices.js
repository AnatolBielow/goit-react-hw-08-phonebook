import { createSlice } from '@reduxjs/toolkit';

// export const itemsSlice = createSlice({
//   name: 'items ',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      value: ''
    },
    reducers: {
        setFilter: (state, action) => void(state.value = action.payload)
        }
    
})

export const { setFilter } = filterSlice.actions;
// export const { add, remove } = itemsSlice.actions;