import { cls } from "@/utils/cls";

interface BookHeaderParams {
  stampCount?: number;
  badgeCount?: number;
  nowPage: "stamp" | "badge";
  togglePage: () => void;
}

export default function BookHeader({
  stampCount = 0,
  badgeCount = 0,
  nowPage,
  togglePage,
}: BookHeaderParams) {
  const navCategory = [
    {
      page: "stamp",
      name: "스탬프",
      count: stampCount,
    },
    {
      page: "badge",
      name: "뱃지",
      count: badgeCount,
    },
  ];

  return (
    <header className="w-full bg-personalBlack text-white">
      <section className="px-5 py-2">
        <span className="opacity-50">My Book</span>
        <h3 className="pt-4 pb-7 text-xl">
          고양이천재짱짱님, <br /> 열어본 제주의 속을 확인하세요.
        </h3>
      </section>
      <nav className="flex items-stretch">
        {navCategory.map((navInfo) => (
          <button
            key={navInfo.name}
            onClick={() => nowPage != navInfo.page && togglePage()}
            className={cls(
              "flex-1 space-x-2 rounded-t-xl border-b-2 py-3",
              nowPage == navInfo.page
                ? "border-personalRed bg-white text-personalRed"
                : "border-personalBlack bg-personalBlack text-white opacity-50"
            )}
          >
            <span>{navInfo.name}</span>
            <span
              className={cls(
                "rounded-xl  bg-opacity-[15%] px-2 py-1",
                nowPage == navInfo.page ? "bg-personalRed" : "bg-[#858889]"
              )}
            >
              {navInfo.count}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}
