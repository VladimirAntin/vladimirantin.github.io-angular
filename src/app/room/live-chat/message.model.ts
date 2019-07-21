export interface Message {
  id: number;
  username: string;
  text: string;
  isConnected?: boolean;
  createdAt?: Date;
}
