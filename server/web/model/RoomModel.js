export const createRoomModel = (roomId) => {
    return {
        roomId: roomId,
        playerList: [],
        createdAt: new Date().toISOString()
    }
}