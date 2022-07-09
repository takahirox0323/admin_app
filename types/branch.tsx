export type Branch = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ParkRequest = {
  name: string;
  address: string;
  description: string;
  prefectureId: string;
  areaId: string;
  countryId: string;
  parkUrl: string;
  openingTime: string;
  price: string;
  categoryId: string;
  createdUserId: string;
  parkTypeId: string;
  parkStatusId: number;
};

export type ParkTypeRequest = {
  name: string;
};

export type UserRequest = {
  familyName: string;
  givenName: string;
  sexId: number;
  age: string;
  createdUserId: string;
};
