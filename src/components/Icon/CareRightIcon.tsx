interface IconParams {
  width: string;
  height: string;
}

const CareRightIcon = ({ width, height }: IconParams) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7383 22.8256C12.7383 23.7165 13.8154 24.1626 14.4454 23.5327L21.2712 16.7069C21.6617 16.3163 21.6617 15.6832 21.2712 15.2927L14.4454 8.46687C13.8154 7.83691 12.7383 8.28307 12.7383 9.17398V22.8256Z"
        fill="#191929"
      />
    </svg>
  );
};

export default CareRightIcon;
