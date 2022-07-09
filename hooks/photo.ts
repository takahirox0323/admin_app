import Link from "next/link";
import AWS from "aws-sdk";
import { nanoid } from "nanoid";
import { postPhoto } from "@/apis";
import { AWS_ACCESS_KEY,AWS_SECRET_KEY,S3_BUCKET } from "@/config";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: S3_BUCKET },
  region: "ap-northeast-1",
});

export const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = Object.values(e.target.files);
  try {
    await Promise.all(
      files.map(async (file) => {
        const date = formatDate(new Date().toString(), "", "", "") + "_";
        const ext = getFileExtension(file.name);
        const filename = ext ? date + nanoid() + "." + ext : date + nanoid();

        const result = await s3.putObject(
          {
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name,
          },
          (err, data) => {
            if (err) console.log(err, err.stack);
            else console.log(data);
          }
        );
        console.log(result)
        await postPhoto({createdUserId: 1,
          key: file.name,
          parkId: 1})

      })
    );
  } catch (e) {
    console.log(e);
  }
};
//バックエンドに写真のkeyを保存

export const getPhoto = async () => {
  // オブジェクトのリストを取得
  const result = await s3
    .listObjects({
      Bucket: S3_BUCKET,
      Prefix: "スクリーンショット",
    })
    .promise();

  // オブジェクトを取得
  const test = await Promise.all(
    await result.Contents.map(async (file) => {
      return await s3
        .getObject({
          Bucket: S3_BUCKET,
          Key: file.Key,
        })
        .promise();
    })
  );

  const blob = new Blob([test[1].Body as BlobPart], { type: "image/*" });

  return URL.createObjectURL(blob);
};


const getFileExtension = (filename: string): string | null => {
  const ext = filename.split(".").pop();
  if (ext === filename) return null;
  return ext;
};

const formatDate = (
  dateString = new Date().toString(),
  dateSeparator = "/",
  timeSeparator = ":",
  datetimeSeperator = " ",
  isStyleKanji = false
): string => {
  const date = new Date(dateString);
  const y = date.getFullYear();
  const m = ("0" + (date.getMonth() + 1)).slice(-2);
  const d = ("0" + date.getDate()).slice(-2);
  const T = ("0" + date.getHours()).slice(-2);
  const M = ("0" + date.getMinutes()).slice(-2);
  let ymd = y + dateSeparator + m + dateSeparator + d;
  if (isStyleKanji) {
    ymd = `${y}年${m}月${d}日`;
  }
  const TM = T + timeSeparator + M;
  return ymd + datetimeSeperator + TM;
};
