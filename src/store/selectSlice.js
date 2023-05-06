import { createSlice } from "@reduxjs/toolkit";
import { ref, deleteObject } from "firebase/storage";
import { fileColRef, collRef, storage } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = { folders: [], files: [], count: 0 };

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    addFolders: (state, { payload }) => {
      state.folders.push(payload);
      state.count += 1;
    },
    removeFolders: (state, { payload }) => {
      state.folders = state.folders.filter(
        (folder) => folder.id !== payload.id
      );
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    addfiles: (state, { payload }) => {
      if (state.files.length === 0) {
        state.files.push(payload);
      } else if (!state.files.find((file) => file.id === payload.id)) {
        state.files.push(payload);
      }
      state.count += 1;
    },
    removeFiles: (state, { payload }) => {
      if (state.count > 0) {
        state.files = state.files.filter((file) => file.id !== payload.id);
        state.count -= 1;
      }
    },
    deleteElement: (state, { payload }) => {
      if (state.folders.length > 0) {
        state.folders.map((folder) => {
          const docRef = doc(collRef, folder.id);
          deleteDoc(docRef);
        });
        state.folders = payload;
      }
      if (state.files.length > 0) {
        state.files.map((file) => {
          const docRef = doc(fileColRef, file.id);
          deleteDoc(docRef);
          const deleteRef = ref(storage, `files/${file.path}/${file.name}`);
          deleteObject(deleteRef);
        });
        state.files = payload;
      }
      state.count = 0;
    },
    resetState: (state, { payload }) => {
      state.folders = payload.emptyArray;
      state.files = payload.emptyArray;
      state.count = payload.count;
    },
  },
});

export default selectSlice.reducer;
export const {
  addFolders,
  removeFolders,
  addfiles,
  removeFiles,
  deleteElement,
  resetState,
} = selectSlice.actions;
