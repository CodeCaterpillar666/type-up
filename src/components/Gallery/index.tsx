import React from "react";
import Container from "@mui/system/Container";
import DictCard from '../DictCard';

export interface IDict {
  name: string;
  description: string;
  cnt: number;
}

export interface IGallery {
  listOfDicts: { name: string; description: string; cnt: number; }[];
}

export const Gallery: React.FC<IGallery> = ({ listOfDicts }) => {
  return (
    <>
      <Container>
        {
          listOfDicts.map(dict => 
            (<DictCard
              name={dict.name}
              description={dict.description}
              cnt={dict.cnt}
            >
            </DictCard>)
          )
        }
      </Container>
    </>
  );
}