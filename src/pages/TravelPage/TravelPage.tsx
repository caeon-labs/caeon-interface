import {
  Grid2
} from "@mui/material";
import {useTonAddress} from "@tonconnect/ui-react";
import "mapbox-gl/dist/mapbox-gl.css";

export const TravelPage = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tonWalletAddress = useTonAddress()
  return (
    <div>
    {!visible ? (
      <Grid2 container spacing={1} p={2}>
        <iframe src="https://caeon-game.netlify.app/" style={{width: '100vw', height: '100vh'}}/>
      </Grid2>
    ) : (
      ""
    )}
  </div>
  
  );
};
