import { useRouter } from "next/router";
import ChevronLeftIcon from "../Icon/ChevronLeftIcon";
import MyPageIcon from "../Icon/MyPageIcon";

interface HeaderParams {
  isBack?: boolean;
  isMyPage?: boolean;
}

const Header = ({ isBack = false, isMyPage = false }: HeaderParams) => {
  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  const onMyPageClick = () => {
    router.push("/mypage");
  };

  return (
    <header className="fixed top-0 z-30 h-20 w-full bg-white">
      <nav className="grid h-full w-full grid-cols-3">
        {isBack && (
          <div className="col-start-1 flex items-center justify-start pl-5">
            <button className="h-fit w-fit" onClick={onBackClick} type="button">
              <ChevronLeftIcon width="27" height="27"></ChevronLeftIcon>
            </button>
          </div>
        )}
        <figure className="col-start-2 flex items-center justify-center">
          <img
            src="/images/logo/header_logo.webp"
            alt="제주벨르 헤더 로고"
            width="105"
            height="33"
          ></img>
        </figure>
        {isMyPage && (
          <div className="col-start-3 flex items-center justify-end pr-5">
            <button
              className="h-fit w-fit"
              onClick={onMyPageClick}
              type="button"
            >
              <MyPageIcon width="27" height="27"></MyPageIcon>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
