import { Paper, Box } from "@mui/material";
import { MapCard } from '../Card'

interface MapViewProps {
  map: Map<String, String>;
}

export const MapView: React.FC<MapViewProps> = ({map}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 200,
            height: 128,
          },
        }}
      >
        <MapCard cardKey={"Time"} cardVal={map.get("Time")!}></MapCard>
        <MapCard cardKey={"Enter Letters"} cardVal={map.get("Enter Letters")!}></MapCard>
        <MapCard cardKey={"Correct Letters"} cardVal={map.get("Correct Letters")!}></MapCard>
        <MapCard cardKey={"Correct Rate"} cardVal={map.get("Correct Rate")!}></MapCard>
      </Box>
    </>
  );
}