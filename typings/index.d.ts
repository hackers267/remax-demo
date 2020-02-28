declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

type NodeEnv = "development" | "test" | "production";

interface OperateItem {
  imageSrc: any;
  title: string;
  tip?: string;
  isShow: boolean;
  operate: () => void;
}
interface CoutryItem {
  name: string;
  id: string;
  code: string;
  type: number;
}
interface ServerResponse {
  client: null | string;
  code: "1" | "0";
  data: any[];
  msg: string;
  msgcount: number | string;
  userid: string;
}
interface UploadFiles {
  url: string;
  name: string;
  data: any;
  filePath: string;
}
