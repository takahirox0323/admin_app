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
  parkStatusName: string;
  parkTypeId: string;
};
