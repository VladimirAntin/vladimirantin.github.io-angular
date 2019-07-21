export interface Message {
  user: {id: number, username: string};
  text: string;
  isConnected?: boolean;
  createdAt?: Date;
}
