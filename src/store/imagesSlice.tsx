import { createSlice, configureStore } from "@reduxjs/toolkit";
import initialImage from '../assets/robotImg.jpg';

interface ImageData {
  url: string;
}

interface GeneratedImageStore {
  generatedImages: ImageData[];
  description : string;
  isLoading : boolean;
  formIsValid : boolean ;
}

export interface RootState {
  generatedImageStore: GeneratedImageStore;
}

export const initalState : GeneratedImageStore = {
  generatedImages: [
    {url : initialImage} 
  ],
  description : "",
  isLoading : false,
  formIsValid : true ,
};

let generatedImagesSlice = createSlice({
  name: "generatedImagesSlice",
  initialState: initalState,
  reducers: {
    addGeneratedImages(state, action) {
      state.generatedImages = action.payload;
    },

    addDescription(state , action){
        state.description = action.payload ;
    },

    setIsLoading(state , action){
        state.isLoading = action.payload;
    },

    setFormIsValid(state , action){
        state.formIsValid = action.payload;
    }
  },
});

const store = configureStore({
  reducer: {
    generatedImageStore: generatedImagesSlice.reducer,
  },
});

export const imagesAction = generatedImagesSlice.actions;

export default store;
