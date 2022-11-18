import { useRef, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { preivewImage } from "lib/setPreview";
import { getExifData } from "lib/getExifData";

import "./DragAndDrop.scss";
import { setPhotoData, setPhotoFile } from "redux/slice/photoSlice";
function DragAndDrop() {
  const dragRef = useRef(null);

  const dispatch = useDispatch();

  const [isDrag, setIsDrag] = useState(false);

  const handleChangeFiles = useCallback(async (e) => {
    const fileObject =
      e.type === "drop" ? e.dataTransfer.files : e.target.files;
    console.log(fileObject);
    preivewImage(fileObject);
    dispatch(setPhotoFile(fileObject));
    dispatch(setPhotoData(await getExifData(fileObject)));
  }, []);

  const handleFileFilter = useCallback((id) => {});

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDrag(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.dataTransfer.files) {
      setIsDrag(true);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    handleChangeFiles(e);
    setIsDrag(false);
  }, []);

  const initDragEvents = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener("dragnenter", handleDragEnter);
      dragRef.current.addEventListener("dragleave", handleDragLeave);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, DragAndDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.removeEventListener("dragnenter", handleDragEnter);
      dragRef.current.removeEventListener("dragleave", handleDragLeave);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, DragAndDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <section className="drag-component">
      <input
        id="photo"
        type="file"
        onChange={handleChangeFiles}
        accept="image/*"
        capture="user"
      ></input>
      <label
        className={isDrag ? "dragging" : "drop"}
        ref={dragRef}
        htmlFor="photo"
      >
        <section className="photo-preview"></section>
      </label>
    </section>
  );
}
export default DragAndDrop;
