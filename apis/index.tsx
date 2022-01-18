import axios from "axios";
import { API_URL } from "@/config";
import { Branch } from "@/types/branch";

// 現場一覧取得
export const fetchSiteDataList = async (
  branchId?: number
): Promise<Branch[]> => {
  const fetchedSiteList = await axios.get(`${API_URL}/branches`);
  return fetchedSiteList.data;
};

// 現場を登録
// export const postSiteData = async (body: SiteRequest): Promise<void> => {
//   const idToken = await fetchIdToken();
//   return await axios.post(`${API_URL}/sites`, body, {
//     headers: { Authorization: `Bearer ${idToken}` },
//   });
// };

// // 現場を更新
// export const updateSiteData = async (
//   siteId: number,
//   body: SiteRequest
// ): Promise<void> => {
//   const idToken = await fetchIdToken();
//   return await axios.put(`${API_URL}/sites/${siteId}`, body, {
//     headers: { Authorization: `Bearer ${idToken}` },
//   });
// };
