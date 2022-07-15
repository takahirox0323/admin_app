import { useState } from "react";
import { Spacer } from "@/Components/Layout/Spacer";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useParkList, usePostPark } from "@/hooks";
import { ParkRequest } from "@/types/branch";
import { Tabs } from "@/Components/Molecules/Tabs";

export const ParkRegister: React.FC = () => {
  const [park, setPark] = useState<ParkRequest>();
  const usePostPark_ = usePostPark(park);

  const onChangePark = ({ key, value }: { key: string; value: string }) => {
    setPark((prev) => {
      return { ...prev, [key]: value, createdUserId: "1", parkStatusId: 1 };
    });
  };

  const onSubmit = () => {
    usePostPark_.mutate();
  };

  return (
    <>
      <form>
        <Tabs
          Item1Name="基本情報"
          Item2Name="所在地"
          Item1={
            <Box padding={2} display="flex" flexDirection="column">
              <p>公園名</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "name", value: e.target.value })
                }
              />
              <Spacer vertical size={24} />
              <p>住所</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "address", value: e.target.value })
                }
              />
              <Spacer vertical size={24} />
              <p>公園詳細</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({
                    key: "description",
                    value: e.target.value,
                  })
                }
              />
              <Spacer vertical size={24} />
              <p>都道府県</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({
                    key: "prefectureId",
                    value: e.target.value,
                  })
                }
              />
              <Spacer vertical size={24} />
              <p>地域</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "areaId", value: e.target.value })
                }
              />
              <Spacer vertical size={24} />
              <p>公園タイプ</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({
                    key: "parkTypeId",
                    value: e.target.value,
                  })
                }
              />
              <Spacer vertical size={24} />
              <p>国</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({
                    key: "countryId",
                    value: e.target.value,
                  })
                }
              />

              <Spacer vertical size={24} />
              <p>サイトURL</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "parkUrl", value: e.target.value })
                }
              />
              <Spacer vertical size={24} />
              <p>開演時間</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({
                    key: "openingTime",
                    value: e.target.value,
                  })
                }
              />
              <Spacer vertical size={24} />
              <p>料金</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "price", value: e.target.value })
                }
              />
              <Spacer vertical size={24} />
              <p>タグ</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) =>
                  onChangePark({ key: "tagId", value: e.target.value })
                }
              />
              <Spacer vertical size={36} />
              <Button onClick={onSubmit} variant="contained">
                Send
              </Button>
            </Box>
          }
        />
      </form>
    </>
  );
};
