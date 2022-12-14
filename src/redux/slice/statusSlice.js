import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  option: {
    sort: false,
    gather: false,
    view: false,
  },
  dialog: {
    auto: false,
    create: false,
    keyword: false,
    location: false,
    roadAddr: false,
    swiper: false,
    view: false,
  },
  modal: {
    select: false,
    change: false,
    inspect: false,
    preview: false,
  },
  notify: {
    album: {
      create: false,
    },
    user: {
      empty: false,
    },
  },
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    /** option */
    setDialSortOption: (state, action) => {
      state.option.sort = action.payload;
    },
    setDialGatherOption: (state, action) => {
      state.option.gather = action.payload;
    },
    setDialViewOption: (state, action) => {
      state.option.view = action.payload;
    },
    /** dialog */
    setAlbumDialogAuto: (state, action) => {
      state.dialog.auto = action.payload;
    },
    setAlbumCreateDialog: (state, action) => {
      state.dialog.create = action.payload;
    },
    setAlbumHandKeywordDialog: (state, action) => {
      state.dialog.keyword = action.payload;
    },
    setAlbumHandLocationDialog: (state, action) => {
      state.dialog.location = action.payload;
    },
    setAlbumHandRoadAddrDialog: (state, action) => {
      state.dialog.roadAddr = action.payload;
    },
    setAlbumSwiperDialog: (state, action) => {
      state.dialog.swiper = action.payload;
    },
    setAlbumViewDialog: (state, action) => {
      state.dialog.view = action.payload;
    },
    /** modal */
    setAlbumSelectModal: (state, action) => {
      state.modal.select = action.payload;
    },
    setAlbumChangeModal: (state, action) => {
      state.modal.change = action.payload;
    },
    setAlbumInspectModal: (state, action) => {
      state.modal.inspect = action.payload;
    },
    setAlbumPreviewModal: (state, action) => {
      state.modal.preview = action.payload;
    },
    /** notify */
    setNotifyAlbumCreate: (state, action) => {
      state.notify.album.create = action.payload;
    },
    setNotifyUserEmpty: (state, action) => {
      state.notify.user.empty = action.payload;
    },
  },
});

export const {
  /** option */
  setDialSortOption,
  setDialGatherOption,
  setDialViewOption,
  /** dialog */
  setAlbumDialogAuto,
  setAlbumCreateDialog,
  setAlbumHandKeywordDialog,
  setAlbumHandLocationDialog,
  setAlbumHandRoadAddrDialog,
  setAlbumSwiperDialog,
  setAlbumViewDialog,
  /** modal */
  setAlbumSelectModal,
  setAlbumChangeModal,
  setAlbumInspectModal,
  setAlbumPreviewModal,
  /** notify */
  setNotifyAlbumCreate,
  setNotifyUserEmpty,
} = statusSlice.actions;

export default statusSlice.reducer;
