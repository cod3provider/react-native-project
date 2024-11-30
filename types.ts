export interface UserData {
  uid: string;
  email: string;
  displayName?: string;
  profilePhoto?: string;
};

export type Post = {
  id: string;
  name: string;
  location: string;
  photoPicture: string;
  comments: Comment[];
};