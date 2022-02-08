import { ChangeEvent, useCallback, useEffect, useState } from "react";
import useUserInput from "../../hooks/useUserInput";

export const UserInput = () => {
    const userInput = useUserInput();
    return (<>{userInput}</>);
};