import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { storage, fileColRef } from "../firebase";
import { ROOT_FOLDER } from "./useFolder";
import { UserAuth } from "../context/AuthenticationContext";
export default function useUpload(file, currentFolder) {
  const newPath = [];
  const { currentUser, setProg } = UserAuth();
  for (let path of currentFolder.path) {
    const { name } = path;
    newPath.push(name);
  }
  if (!file) return;
  const filePath =
    currentFolder === ROOT_FOLDER
      ? `${newPath.join("/")}`
      : `${newPath.join("/")}/${currentFolder.name}`;
  const storageRef = ref(storage, `files/${filePath}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProg(prog);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        try {
          addDoc(fileColRef, {
            url: url,
            name: file.name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: filePath,
          });
        } catch (error) {
          alert(error.message);
        }
      });
    }
  );
}
