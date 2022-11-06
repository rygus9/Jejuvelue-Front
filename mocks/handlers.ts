import { rest } from "msw";

function authLoginMock() {
  return rest.post("/api/v1/auth/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100));
  });
}

function servicePlacesMock() {
  return rest.post("/api/v1/place", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json([
        {
          placeId: 1,
          name: "고양이는 귀엽다",
          shortDescription:
            "고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.",
          stampImageUrl: "/images/mock/cat1.webp",
          placeImageUrl: "/images/mock/stamp_off_001.webp",
          latitude: 33.49202209142753,
          longitude: 126.45408248124293,
        },
        {
          placeId: 2,
          name: "고양이는 행복하다",
          shortDescription:
            "사람들이 저를 보고 갓생을 산다고 하는 데 정말 갓생은 고양이라 생각합니다.",
          stampImageUrl: "/images/mock/cat2.webp",
          placeImageUrl: "/images/mock/stamp_off_002.webp",
          latitude: 33.47968505922961,
          longitude: 126.40630416243812,
        },
      ])
    );
  });
}

function servicePlaceMock() {
  return rest.post("/api/v1/place/:placeId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        placeId: 1,
        name: "고양이는 귀엽다",
        description:
          "고양이는 귀엽습니다. 고양이는 정말 귀엽습니다. 그런 고양이도 야생동물입니다. 저번에 학교 인기 탑 고양이가 까치를 사냥해려 했던 거 보면 섬뜩하면서도 귀엽습니다. 역시 귀엽습니다.",
        shortDescription:
          "고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.",
        stampImageUrl: "/images/mock/stamp_off_001.webp",
        visitorNumber: 1200,
        starAvg: 4.5,
        latitude: 33.49202209142753,
        longitude: 126.45408248124293,
        address: "주소를 알앗으면 좋겠어",
        isVisited: false,
        placeImageUrlDtoList: [
          {
            orderNum: 1,
            imageUrl: "/images/mock/cat1.webp",
          },
          {
            orderNum: 2,
            imageUrl: "/images/mock/cat3.webp",
          },
        ],
      })
    );
  });
}

function serviceMypage() {
  return rest.post("/api/v1/member/mypage", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        stampList: [
          {
            placeId: 1,
            name: "고양이는 귀엽다",
            shortDescription:
              "고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.",
            stampImageUrl: "/images/mock/cat1.webp",
            placeImageUrl: "/images/mock/stamp_off_001.webp",
          },
          {
            placeId: 2,
            name: "고양이는 행복하다",
            shortDescription:
              "사람들이 저를 보고 갓생을 산다고 하는 데 정말 갓생은 고양이라 생각합니다.",
            stampImageUrl: "/images/mock/cat2.webp",
            placeImageUrl: "/images/mock/stamp_off_002.webp",
          },
          {
            placeId: 3,
            name: "고양이는 귀엽다",
            shortDescription:
              "고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.",
            stampImageUrl: "/images/mock/cat1.webp",
            placeImageUrl: "/images/mock/stamp_off_001.webp",
          },
          {
            placeId: 4,
            name: "고양이는 행복하다",
            shortDescription:
              "사람들이 저를 보고 갓생을 산다고 하는 데 정말 갓생은 고양이라 생각합니다.",
            stampImageUrl: "/images/mock/cat2.webp",
            placeImageUrl: "/images/mock/stamp_off_002.webp",
          },
          {
            placeId: 5,
            name: "고양이는 귀엽다",
            shortDescription:
              "고양이는 정말 귀엽습니다. 제 장래 희망은 고양이입니다.",
            stampImageUrl: "/images/mock/cat1.webp",
            placeImageUrl: "/images/mock/stamp_off_001.webp",
          },
          {
            placeId: 6,
            name: "고양이는 행복하다",
            shortDescription:
              "사람들이 저를 보고 갓생을 산다고 하는 데 정말 갓생은 고양이라 생각합니다.",
            stampImageUrl: "/images/mock/cat2.webp",
            placeImageUrl: "/images/mock/stamp_off_002.webp",
          },
        ],
        stampCnt: 3,
        badgeList: [
          {
            badgeId: 1,
            description: "고양고양해",
            badgeImageUrl: "/images/mock/cat4.webp",
          },
          {
            badgeId: 2,
            description: "고양고양해2",
            badgeImageUrl: "/images/mock/cat5.webp",
          },
        ],
        badgeCnt: 0,
      })
    );
  });
}

function serviceStamp() {
  return rest.post("/api/v1/place/visit/:placeId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.text("/images/mock/stamp_on_001.webp")
    );
  });
}

export const handlers = [
  authLoginMock(),
  servicePlacesMock(),
  servicePlaceMock(),
  serviceMypage(),
  serviceStamp(),
];
