import { BackButton } from "./BackButton";
import raceTrackImage from "./ReadySetBet/ReadySetBetRaceTrack.jpg";

export function ReadySetBet({ onBack }: { onBack?: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${raceTrackImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BackButton onClick={onBack} />
    </div>
  );
}
