import loginApi from "@/api/loginApi";
import { FormEvent } from "react";

export default function Login() {
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = await loginApi("gugu");
    localStorage.setItem("nickname", data.data);
  };

  return (
    <section className="flex h-[100vh] w-full flex-col items-center justify-center">
      <article className="relative -top-12">
        <img
          src="/images/logo/main_logo.webp"
          alt="제주벨름 로고"
          width="220"
          height="110"
          className="object-cover"
        ></img>
      </article>
      <form className="relative -top-12 w-full pt-14" onSubmit={onSubmit}>
        <div className="m-auto flex w-2/3 items-center justify-center">
          <input
            placeholder="닉네임을 입력해주세요."
            className="min-w-0 flex-1 rounded-l-md border border-gray-300 py-2 pl-3 text-gray-700 outline-none"
          ></input>
          <button className="flex-none rounded-r-md border border-personalRed bg-personalRed py-2 px-4 text-white opacity-50">
            Go
          </button>
        </div>
      </form>
    </section>
  );
}
