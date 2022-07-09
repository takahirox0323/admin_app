export type Photo = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type PhotoRequest = {
  createdUserId: number;
  key: string;
  parkId: number;
};
