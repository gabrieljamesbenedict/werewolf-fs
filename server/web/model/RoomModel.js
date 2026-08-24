export const RoomModel = (roomId) => {
    return {
        roomId: roomId,
        playerList: [],
        createdAt: new Date().toISOString()
    }
}