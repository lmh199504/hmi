import type { UploadFile } from "antd/es/upload/interface";

interface CustomFile extends UploadFile {
  id: string;
}
