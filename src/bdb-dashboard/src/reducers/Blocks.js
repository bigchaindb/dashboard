import uimapper from '../configs/ui-mapper.config.json'
const initialState = [];
const Blocks = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_BLOCKS':
      if (!state.includes(action.blockId)){
        state.unshift(action.blockId);
      }
      if(state.length > uimapper.maxBlocks){
        state.splice(uimapper.maxBlocks, (state.length-uimapper.maxBlocks));
      }
      return state.slice();
    default:
      return state;
  }
}

export default Blocks;