import { Grid } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import { Thumbnail } from "@/Components/atoms/Thumbnail";
import { SectionTitle } from "./SectionTitle";
import { Tags } from "@/Components/atoms/Tag";

export const PopularParkSection: React.FC = () => {
  const CATEGORY = ["1", "2", "3", "4", "5"];
  const AREA = [
    { name: "北海道", prefectures: [] },
    {
      name: "東北",
      prefectures: [{ name: "青森" }, { name: "岩手" }, { name: "青森" }],
    },
    { name: "関東" },
    { name: "中部・北部" },
    { name: "関西" },
    { name: "中国・四国" },
    { name: "九州・沖縄" },
  ];
  return (
    <>
      {/* //人気のカテゴリー */}
      <SectionTitle name="人気のカテゴリから探す" />
      <Spacer size={24} vertical />
      <Grid container spacing={2.5} columns={{ xs: 10, sm: 10, md: 10 }}>
        {CATEGORY.map((card) => {
          return (
            <Grid item xs={2} sm={2} md={2}>
              <Thumbnail />
            </Grid>
          );
        })}
      </Grid>
      <Spacer size={16} vertical />
      <Tags array={AREA} />
    </>
  );
};
