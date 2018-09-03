const initialState = {
    title: '',
    content: null
}

const Modal = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return Object.assign({}, {content: action.content, title: action.title, open: action.open});
    default:
      return state;
  }
}

export default Modal;