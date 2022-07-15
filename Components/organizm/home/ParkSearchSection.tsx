import { Grid } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import { Thumbnail } from "@/Components/atoms/Thumbnail";
import { SectionTitle } from "./SectionTitle";
import { Tags } from "@/Components/atoms/Tag";

export const ParkSearchSection: React.FC = () => {
  const TYPEOFPARK = ["1", "2", "3", "4", "5", "5"];
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
      {/* //公園の種類から探す */}
      <SectionTitle name="公園の種類から探す" />
      <Spacer size={24} vertical />
      <Grid container spacing={2.5} columns={{ xs: 9, sm: 9, md: 9 }}>
        {TYPEOFPARK.map((card) => {
          return (
            <Grid item xs={3} sm={3} md={3}>
              <Thumbnail height={250} />
            </Grid>
          );
        })}
      </Grid>
      <Spacer size={16} vertical />
      <Tags array={AREA} />
    </>
  );
};
