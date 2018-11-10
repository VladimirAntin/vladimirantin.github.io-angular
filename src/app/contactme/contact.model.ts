export interface ContactInterface {

  liked: number;
  watch: number;
  messages: {name, email, text}[];
  ips: any;
}
