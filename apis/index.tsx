import axios from "axios";
import { API_URL } from "@/config";
import {
  Branch,
  ParkRequest,
  ParkTypeRequest,
  UserRequest,
} from "@/types/branch";
import { PhotoRequest } from "@/types/Photo";

// 現場一覧取得
export const fetchSiteDataList = async (): Promise<any[]> => {
  const fetchedParkList = await axios.get(`${API_URL}/parks`);
  const fetchedArea = await axios.get(`${API_URL}/areas`);
  const fetchedPrefecture = await axios.get(`${API_URL}/prefectures`);
  return await Promise.all([fetchedParkList, fetchedArea, fetchedPrefecture]);
};

// 現場を登録
export const postBranch = async (body: ParkRequest): Promise<void> => {
  return await axios.post(`${API_URL}/parks`, body);
};

// 公園タイプ一覧更新
export const postParkType = async (body: ParkTypeRequest): Promise<void> => {
  return await axios.post(`${API_URL}/parkTypes`, body);
};

// 公園タイプ一覧更新
export const postUser = async (body: UserRequest): Promise<void> => {
  return await axios.post(`${API_URL}/users`, body);
};

// 写真更新
export const postPhoto = async (body: PhotoRequest): Promise<void> => {
  return await axios.post(`${API_URL}/photos`, body);
};

//タグAPI
export const TAGS = [
  { id: 1, name: "家族", type: "fdfad" },
  { id: 2, name: "カップル", type: "fdfad" },
  { id: 3, name: "同僚", type: "fdfad" },
  { id: 4, name: "友人", type: "fdfad" },
  { id: 5, name: "おひとり", type: "fdfad" },
  { id: 6, name: "小さい子供", type: "fdfad" },
  { id: 7, name: "車椅子の方", type: "fdfad" },
  { id: 8, name: "乳幼児", type: "fdfad" },
];
