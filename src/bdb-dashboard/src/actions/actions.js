import * as types from './ActionTypes'

export const validTransaction = (txId, blockId, raw) => ({
    type: types.MESSAGE_RECEIVED,
    txId,
    blockId,
    raw
});

export const setModal = (title, content, open) => ({
    type: types.SET_MODAL,
    title,
    content,
    open
})

export const updateStats = (connected, blockHeight) => ({
    type: types.UPDATE_STATS,
    connected,
    blockHeight
})

export const checkBlocks = (blockId) => ({
    type: types.CHECK_BLOCKS,
    blockId
})
