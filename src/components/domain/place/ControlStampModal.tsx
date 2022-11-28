import withCurrentPlaceInfo from "@/recoil/place/withCurrentPlaceInfo";
import { cls } from "@/utils/cls";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import StampModal from "../common/StampModal";

const DISTANCE_RANGE = 100;

interface ControlStampModalParams {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ControlStampModal({
  isOpen,
  setIsOpen,
}: ControlStampModalParams) {
  const currentPlaceInfo = useRecoilValue(withCurrentPlaceInfo);

  return (
    <StampModal
      imgSrc={currentPlaceInfo.stampImageUrl}
      title={currentPlaceInfo.name}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      controlPanel={<StampControlPanel></StampControlPanel>}
    ></StampModal>
  );
}

function StampControlPanel() {
  const currentPlaceInfo = useRecoilValue(withCurrentPlaceInfo);
  const [modalState, setModalState] = useState<{
    status: "GONE" | "DISTANCE IN" | "DISTANCE OUT" | "GPS ERROR" | "INIT";
  }>({ status: "INIT" });

  useEffect(() => {
    if (currentPlaceInfo.isVisited) {
      setModalState({ status: "GONE" });
      return;
    }
    const id = setInterval(() => {
      getNowDistance(
        currentPlaceInfo.latitude,
        currentPlaceInfo.longitude,
        setModalState
      );
    }, 2000);
    return () => clearInterval(id);
  }, [
    currentPlaceInfo.latitude,
    currentPlaceInfo.longitude,
    currentPlaceInfo.isVisited,
  ]);

  return (
    <section className="w-full text-center">
      {modalState.status !== "GONE" && (
        <>
          <button
            className={cls(
              "rounded-md bg-personalRed bg-opacity-20 px-4 py-1.5 text-personalRed",
              "disabled:bg-personalBlack disabled:bg-opacity-20 disabled:text-personalBlack"
            )}
            disabled={modalState.status !== "DISTANCE IN"}
          >
            도장찍기
          </button>
          {modalState.status === "GPS ERROR" && (
            <div className="mt-2 text-personalRed">GPS를 연결해주세요.</div>
          )}
          {modalState.status === "DISTANCE OUT" && (
            <div className="mt-2 text-personalRed">사정 거리 밖입니다.</div>
          )}
          {modalState.status === "INIT" && (
            <div className="mt-2 text-personalRed">거리를 계산 중입니다.</div>
          )}
        </>
      )}
    </section>
  );
}

function getNowDistance(
  curlatitude: number,
  curlongitude: number,
  setModalState: any
) {
  if (!navigator.geolocation) return setModalState({ status: "GPS ERROR" });
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const distance = getDistance({
        startLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        endLocation: {
          latitude: curlatitude,
          longitude: curlongitude,
        },
      });
      if (distance < DISTANCE_RANGE)
        return setModalState({ status: "DISTANCE IN" });
      else return setModalState({ status: "DISTANCE OUT" });
    },
    () => {
      return setModalState({ status: "GPS ERROR" });
    },
    {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: Infinity,
    }
  );
}

function getDistance({
  startLocation,
  endLocation,
}: {
  startLocation: { latitude: number; longitude: number };
  endLocation: { latitude: number; longitude: number };
}) {
  const lat1 = startLocation.latitude;
  const lon1 = startLocation.longitude;
  const lat2 = endLocation.latitude;
  const lon2 = endLocation.longitude;

  if (lat1 == lat2 && lon1 == lon2) return 0;

  var radLat1 = (Math.PI * lat1) / 180;
  var radLat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radTheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
}
