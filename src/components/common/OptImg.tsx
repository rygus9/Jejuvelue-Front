import { cls } from "@/utils/cls";
import { useState } from "react";
import DefaultImg from "./DefaultImg";

interface OptImgParams {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export default function OptImg({ src, alt, loading = "eager" }: OptImgParams) {
  const [isLaoding, setIsLoading] = useState(false);

  return (
    <>
      <img
        className={cls(
          !isLaoding ? "hidden" : "",
          "h-full w-full object-cover"
        )}
        alt={alt}
        src={src}
        loading={loading}
        onLoad={() => setIsLoading(true)}
      ></img>
      <div className={cls(isLaoding ? "hidden" : "", "h-full w-full")}>
        <DefaultImg />
      </div>
    </>
  );
}
