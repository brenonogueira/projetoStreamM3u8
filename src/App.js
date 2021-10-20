import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <ReactHlsPlayer
        src="https://newedge.eu-central-1.edge.mycdn.live/live/sportv224ha/playlist.m3u8"
        autoPlay={true}
        controls={true}
        width="50%"
        height="auto"
      />
    </div>
  );
}

export default App;
