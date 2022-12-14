import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setAlbumHandKeywordDialog,
  setAlbumHandLocationDialog,
  setAlbumHandRoadAddrDialog,
} from "redux/slice/statusSlice";

import DragAndDrop from "views/components/album/add/auto/DragAndDrop";

import "./hand/index.scss";
function HandAdd(props) {
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.album.search);

  const handleResizeHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  useEffect(() => {
    if (searchData) {
      props.addrRef.current.value = searchData.addr;
      props.semiAddrRef.current.value = searchData.semiAddr
        ? searchData.semiAddr
        : "";

      props.addrRef.current?.focus({ cursor: "end" });
    }
  }, [searchData]);

  return (
    <section className="album-hand-info">
      <article className="info-title">
        <label htmlFor="title">
          제목<span>(*)</span>
        </label>
        <input type="text" id="title" ref={props.titleRef}></input>
      </article>
      <article className="info-content">
        <label htmlFor="content">이야기</label>
        <textarea
          id="content"
          rows={1}
          spellCheck="false"
          ref={props.contentRef}
          onChange={handleResizeHeight}
        ></textarea>
      </article>
      <article className="info-date">
        <label htmlFor="date">
          날짜<span>(*)</span>
        </label>
        <input
          id="date"
          type="datetime-local"
          max="9999-12-31T23:59"
          min="1948-08-15T00:00"
          ref={props.dateRef}
        ></input>
      </article>
      <article className="info-photo">
        <label htmlFor="photo">
          사진<span>(*)</span>
        </label>
        <DragAndDrop
          dragType="hand"
          photoRef={props.photoRef}
          previewRef={props.previewRef}
        ></DragAndDrop>
      </article>
      <article className="info-search">
        <label htmlFor="content">
          주소 추가<span>(*)</span>
        </label>
        <section className="info-addr-buttons">
          <button
            className="search-keyword-button"
            onClick={() => {
              dispatch(setAlbumHandKeywordDialog(true));
            }}
          >
            키워드 검색
          </button>
          <button
            className="search-road-addr-button"
            onClick={() => {
              dispatch(setAlbumHandRoadAddrDialog(true));
            }}
          >
            도로명 검색
          </button>
          <button
            className="search-location-button"
            onClick={() => {
              dispatch(setAlbumHandLocationDialog(true));
            }}
          >
            위치 선택
          </button>
        </section>
      </article>
      {searchData ? (
        <section className="info-address">
          <article className="info-addr">
            <label htmlFor="addr">주소 확인</label>
            <input id="addr" type="text" readOnly ref={props.addrRef}></input>
          </article>
          <article className="info-semi-addr">
            <label htmlFor="semi-addr">추가 정보</label>
            <input id="semi-addr" type="text" ref={props.semiAddrRef}></input>
          </article>
        </section>
      ) : null}
    </section>
  );
}
export default HandAdd;
