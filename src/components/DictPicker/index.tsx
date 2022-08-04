import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const listOfDicts = [
  {
    'displayName': 'cet4',
    'sourceName': 'cet4',
  },
  {
    'displayName': 'cet6',
    'sourceName': 'cet6',
  }
];

export const DictPicker = () => {

  return (
    <>

    </>
  );
}


export function Highlights() {
  return (
    <></>
    // <Autocomplete
    //   id="highlights-demo"
    //   sx={{ width: 300 }}
    //   options={listOfDicts}
    //   getOptionLabel={(option) => option.displayName}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Highlights" margin="normal" />
    //   )}
    //   renderOption={(props, option, { inputValue }) => {
    //     const matches = match(option.displayName, inputValue);
    //     const parts = parse(option.displayName, matches);

    //     return (
    //       <li {...props}>
    //         <div>
    //           {parts.map((part, index) => (
    //             <span
    //               key={index}
    //               style={{
    //                 fontWeight: part.highlight ? 700 : 400,
    //               }}
    //             >
    //               {part.text}
    //             </span>
    //           ))}
    //         </div>
    //       </li>
    //     );
    //   }}
    // />
  );
}
