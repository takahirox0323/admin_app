import { useParkList } from "@/hooks";
import { useEffect, useState } from "react";
import { getPhoto } from "@/hooks/photo";
import CircularProgress from "@mui/material/CircularProgress";

export const AdminParkDetail: React.FC = () => {
  const [url, setURL] = useState("");
  const { isLoading, parkList } = useParkList();

  useEffect(() => {
    const get = async () => {
      const pictures = await getPhoto();
      setURL(pictures);
    };
    get();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <img src={url} />
          <p>公園名:{parkList.data[0].name}</p>
          <p>住所:{parkList.data[0].address}</p>
          <p>公園詳細:{parkList.data[0].description}</p>
          <p>都道府県:{parkList.data[0].prefectureName}</p>
          <p>地域</p>
          <p>国</p>
          <p>サイトURL:{parkList.data[0].parkUrl}</p>
          <p>開演時間:{parkList.data[0].openingTime}</p>
          <p>料金:{parkList.data[0].price}</p>
          <p>タグ:{parkList.data[0].tag}</p>
        </>
      )}
    </>
  );
};
