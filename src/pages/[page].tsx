import Header from "@/components/layout/Header";
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  return (
    <>
      <Header isMyPage isBack></Header>
      <main></main>
    </>
  );
}
