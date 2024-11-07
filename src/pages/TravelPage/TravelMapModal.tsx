import {Iconify} from "@/components/iconify";
import {ILocationStore,ITabs} from "@/types/index.type";
import {encodeLocationKey} from "@/utils";
import {Button,Grid2,IconButton} from "@mui/material";
import {cloudStorage as cloudData} from "@telegram-apps/sdk";
import "mapbox-gl/dist/mapbox-gl.css";
import {useRef} from "react";

export const TravelMapModal = ({
  visible,
  setVisible,
  setTab,
}: {
  setTab: React.Dispatch<React.SetStateAction<ITabs>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  // const [mapRef, setMapRef] = useState<
  //   React.MutableRefObject<HTMLDivElement | null>
  // >({ current: null });

  return (
    <div
      style={{
        ...(!visible
          ? { opacity: 0, height: 0, position: "fixed" }
          : {
              position: "fixed",
              width: "100vw",
              height: "100vh",
              left: 0,
              zIndex: 10000,
            }),
      }}
    >
      <div style={{ marginTop: 2 }}>
        <IconButton
          size="large"
          sx={{
            borderRadius: "50%",
            position: "fixed",
            zIndex: 10,
            top: "80px",
            marginLeft: 2,
            p: "0.7rem",
            background: "white",
          }}
          className="aeon-box-shadow-bold aeon-transition"
          onClick={() => {
            setVisible(false);
          }}
        >
          <Iconify icon="ic:outline-arrow-back-ios" width={20} />
        </IconButton>{" "}
      </div>
      <Grid2
        container
        // p={1}
        spacing={1}
        className="aeon-box-border aeon-box-shadow-bold aeon-transition"
        sx={{
          position: "fixed",
          zIndex: 1,
          bottom: "50px",
          background: "white",
          width: "40%",
          left: "30%",
          borderRadius: "20px",
        }}
      >
        <Grid2 size={12}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ width: "100%", height: "50px" }}
            className="aeon-box-border aeon-box-shadow-bold aeon-transition"
            startIcon={<Iconify icon="entypo:location" />}
            onClick={async () => {
            }}
          >
            Checkin
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1} sx={{ height: "100vh", width: '100vw' }}>
        <div
          id="map-container"
          style={{
            width: "100vw",
            height: '100vh',
            transition: "0.4s",
            background: "white",
            ...(!visible
              ? {
                  visibility: "hidden",
                  opacity: 0,
                }
              : {
                  opacity: 1,
                  visibility: "visible",
                }),
          }}
          ref={mapContainerRef}
        />
      </Grid2>
    </div>
  );
};
