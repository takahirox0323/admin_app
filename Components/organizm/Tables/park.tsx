import dayjs from "dayjs";
export const columns = [
  { id: "id", label: "id" },
  { id: "name", label: "公園名称" },
  { id: "areaName", label: "国" },
  { id: "prefectureName", label: "都道府県" },
  {
    id: "parkTypeId",
    label: "公園タイプ",
    align: "right",
  },
  {
    id: "createdUserId",
    label: "登録ユーザー名",
    align: "right",
  },
  {
    id: "updatedAt",
    label: "最終更新日時",
    align: "right",
    format: (value) => dayjs(value).format(`YYYY/MM/DD`),
  },
  {
    id: "parkStatusName",
    label: "ステータス",
    align: "right",
    format: (value) => (
      <span
        style={{
          padding: "4px 8px",
          background: "#5787D0",
          color: "#fff",
          borderRadius: 4,
        }}
      >
        {value}
      </span>
    ),
  },
];

export const parkTypeListColumns = [
  { id: "id", label: "id" },
  { id: "name", label: "公園タイプ" },
  {
    id: "updatedAt",
    label: "最終更新日時",
    align: "right",
    format: (value) => value,
  },
];

export const userListColumns = [
  { id: "id", label: "id" },
  { id: "familyName", label: "名前" },
  { id: "sexId", label: "姓別" },
  { id: "age", label: "年齢" },
  { id: "createdUserId", label: "作成ユーザー" },
  {
    id: "updatedAt",
    label: "最終更新日時",
    align: "right",
    format: (value) => value,
  },
];
