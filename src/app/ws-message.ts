type WsMessageType = 'start' | 'turn' | 'quit' | 'caseClicked' | 'done' | 'reset' | 'swap' | 'join' | 'update' | 'end';

export interface WsMessage {
    type: WsMessageType,
    room: string,
    data: any
}
