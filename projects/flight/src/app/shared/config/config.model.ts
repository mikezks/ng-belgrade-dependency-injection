
export type UserInfo = {
  username: string;
  firstname: string;
  lastname: string;
};

export type ConfigState = {
  userInfo: UserInfo;
  apiUrl: string;
};

export const initialConfigState: ConfigState = {
  userInfo: {
    username: '',
    firstname: '',
    lastname: ''
  },
  apiUrl: ''
};
