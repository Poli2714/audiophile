export type AnonUserId = string;

export type UserId = string | undefined;

export type UserType = {
  isUserSignedIn: boolean;
};

export type UserInfo = {
  isUserSignedIn: boolean;
  userId: UserId;
};
