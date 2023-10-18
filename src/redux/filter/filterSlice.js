import { createSlice } from "@reduxjs/toolkit";


export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     
        filterRecipes: '',

    },
    reducers: {
        setFilterRecipes(state, action) {
        state.filterRecipes = action.payload
      },

}
})

export const {setFilterRecipes}  = filterSlice.actions
export const filterReducer = filterSlice.reducer

