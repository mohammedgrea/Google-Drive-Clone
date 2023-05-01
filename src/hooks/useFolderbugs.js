import { useEffect, useReducer } from "react";
import { doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { collRef, fileColRef } from "../firebase";
import { useSelector } from "react-redux";

const ACTIONS = {
  SLECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  UPDATE_CHILDS_FOLDERS: "update-childs-folders",
  UPDATE_CHILDS_Files: "update-childs-files",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SLECT_FOLDER:
      return {
        ...state,
        folderId: payload.folderId,
        folder: payload.folder,
      };
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.UPDATE_CHILDS_FOLDERS:
      return {
        ...state,
        childernFolder: payload.childernFolder,
      };
    case ACTIONS.UPDATE_CHILDS_Files:
      return {
        ...state,
        childrenFiles: payload.childrenFiles,
      };

    default:
      return state;
  }
}
export const ROOT_FOLDER = { folderName: "Root", id: null, path: [] };

export default function useFolder(folderId = null, folder = null) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log("bugs here");
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childernFolder: [],
    childrenFiles: [],
  });
  useEffect(() => {
    dispatch({ type: ACTIONS.SLECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);
  useEffect(() => {
    if (folderId === null) {
      dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    } else {
      console.log("blblafjdjflsjflsdjf");
      const docRef = doc(collRef, folderId);
      getDoc(docRef).then((doc) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: { id: doc.id, ...doc.data() } },
        });
      });
    }
  }, [folderId, folder]);

  useEffect(() => {
    const q = query(
      collRef,
      where("userId", "==", currentUser.uid),
      where("parentId", "==", folderId)
    );
    let child = [];
    onSnapshot(q, (docs) => {
      docs.forEach((doc) => {
        child.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: ACTIONS.UPDATE_CHILDS_FOLDERS,
        payload: { childernFolder: child },
      });
    });
  }, [folderId, folder, currentUser.uid]);
  useEffect(() => {
    const q = query(
      fileColRef,
      where("userId", "==", currentUser.uid),
      where("parentId", "==", folderId)
    );
    let child = [];
    onSnapshot(q, (docs) => {
      docs.forEach((doc) => {
        child.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: ACTIONS.UPDATE_CHILDS_Files,
        payload: { childrenFiles: child },
      });
    });
  }, [folderId, folder, currentUser.uid]);

  return state;
}
