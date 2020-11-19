import * as React from "react";
export interface UploadFileProps {
  validateUrl?: string;
  uploadUrl?: string;
  downloadSampleUrl?: string;
}

declare const UploadFile: React.FC<UploadFileProps>;

export { UploadFile };
