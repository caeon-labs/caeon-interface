export const TravelPage = ({
  visible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {/* <Grid2
        size={12}
        sx={{
          position: "fixed",
          display: "flex",
          zIndex: 101,
          left: '2rem',
          top: 0,
          justifyContent: "space-between",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          background: "none",
        }}
      >
        <div style={{ marginTop: 2 }}>
          <IconButton
            style={{
              borderRadius: "50%",
              width: '48px',
              height: '48px',
              padding: 1,
              background: 'white'
            }}
            className="aeon-box-shadow-bold aeon-transition"
            onClick={() => {
              setVisible(false);
            }}
          >
            <Iconify icon="ic:outline-arrow-back-ios" style={{fontSize: '50px', color: 'black'}} height={'30px'} width={'30px'}/>
          </IconButton>{" "}
        </div>
      </Grid2> */}
      {!visible ? (
        <iframe
          src="https://caeon-game.netlify.app/"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            zIndex: 100,
            border: "none",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
