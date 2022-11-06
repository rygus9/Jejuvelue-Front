interface IconParams {
  width: string;
  height: string;
}

const ChevronLeftIcon = ({ width, height }: IconParams) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5911 19.8471L7.24268 12.5002L14.5911 5.15332L16.0271 6.58926L10.1161 12.5002L16.0271 18.4096L14.5911 19.8471Z"
        fill="#191929"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
