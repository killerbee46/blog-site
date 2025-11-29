import { useState } from "react";
import { Button, Typography } from "@mui/material";

export default function FileUpload({ onFileSelect }: any) {
  const [base64, setBase64] = useState<any>("");
  const [preview, setPreview] = useState<any>("");

  // Convert file → base64
  const fileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const base64Data = await fileToBase64(file);
    setBase64(base64Data);
    setPreview(base64Data);
    onFileSelect(base64Data)
  };

  return (
    <div className="flex flex-col gap-4 my-5">
      {/* Upload Button */}
      <Button
        variant="outlined"
        component="label"
        className="w-100 aspect-video flex items-center justify-center overflow-hidden"
      >
        {preview ? (
            <>
              {preview.startsWith("data:image") ? (
                <img
               src={preview}
               alt="preview"
               className="w-full h-full object-cover"
             />
              ) : (
                <p className="text-gray-700 text-sm">
                  File loaded (Not an image).
                </p>
              )}
            </>
        ) : (
          <>
            {" "}
            Upload File
          </>
        )}
        <input type="file" hidden onChange={handleFileChange} />
      </Button>

      {/* Preview Section */}
    </div>
  );
}
