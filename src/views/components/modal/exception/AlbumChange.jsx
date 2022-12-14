import { useDispatch } from "react-redux";

import {
  setAlbumDialogAuto,
  setAlbumChangeModal,
} from "redux/slice/statusSlice";

import PhotoDataEmpty from "views/components/notify/exception/PhotoDataEmpty";

function AlbumChange(props) {
  const dispatch = useDispatch();
  return (
    <section className="album-change-component">
      <article>
        <section className="album-change-main">
          <header>
            <PhotoDataEmpty />
          </header>
          <footer className="album-change-buttons">
            <button
              className="change-restart-button"
              onClick={() => {
                dispatch(setAlbumChangeModal(false));
                props.handleClearAlbum();
              }}
            >
              <aside>π₯</aside>
              <main>
                μ²μλΆν°
                <br />
                λ€μμΈλμ!
              </main>
              <aside>π₯</aside>
            </button>
            <button
              className="change-picture-button"
              onClick={() => {
                dispatch(setAlbumChangeModal(false));
                props.handleClearPhoto();
              }}
            >
              <aside>π₯</aside>
              <main>
                μ¬μ§
                <br />
                λ°κΏλμ!
              </main>
              <aside>π₯</aside>
            </button>
            <button
              className="change-write-button"
              onClick={() => {
                dispatch(setAlbumChangeModal(false));
                dispatch(setAlbumDialogAuto(false));
              }}
            >
              <aside>π₯</aside>
              <main>
                μ§μ 
                <br />
                μΈλμ!
              </main>
              <aside>π₯</aside>
            </button>
          </footer>
        </section>
      </article>
    </section>
  );
}

export default AlbumChange;
