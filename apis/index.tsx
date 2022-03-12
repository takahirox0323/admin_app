import axios from "axios";
import { API_URL } from "@/config";
import { Branch, BranchRequest } from "@/types/branch";

// 現場一覧取得
export const fetchSiteDataList = async (
  branchId?: number
): Promise<Branch[]> => {
  const fetchedSiteList = await axios.get(`${API_URL}/branchs`);
  return fetchedSiteList.data;
};

// 現場を登録
export const postBranch = async (body: BranchRequest): Promise<void> => {
  return await axios.post(`${API_URL}/branches`, body);
};

// // 現場を更新
// export const updateSiteData = async (
//   siteId: number,
//   body: SiteRequest
// ): Promise<void> => {
//   const idToken = await fetchIdToken();
//   return await axios.put(`${API_URL}/sites/${siteId}`, body, {
//     headers: { Authorization: `Bearer ${idTosken}` },
//   });
// }

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
