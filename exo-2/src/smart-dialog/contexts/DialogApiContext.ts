import { createContext } from "react";
import { DialogApi } from "../types";

export const DialogApiContext = createContext<DialogApi | null>(null);