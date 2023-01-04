import { useDispatch } from "react-redux";
import { setAlbumSelectModal } from "redux/slice/statusSlice";

import S3Image from "views/components/addition/S3Image";

function SliderEmpty() {
  const dispatch = useDispatch();

  return (
    <section className="slider-exception">
      <main>아직 추억이 남아있지 않아요...!</main>
      <S3Image folder={"toshimee"} file={"empty.png"} />
      <footer>
        <button
          className="make-memory-button"
          onClick={() => {
            dispatch(setAlbumSelectModal(true));
          }}
        >
          추억 만들러 가기 🥕
        </button>
      </footer>
    </section>
  );
}

export default SliderEmpty;
