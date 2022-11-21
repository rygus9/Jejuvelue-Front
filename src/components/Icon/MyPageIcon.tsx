interface IconParams {
  width: string;
  height: string;
}

const MyPageIcon = ({ width, height }: IconParams) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_287_2695" transform="scale(0.00854701)" />
        </pattern>
        <image
          id="image0_287_2695"
          width="117"
          height="117"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MyPageIcon;
