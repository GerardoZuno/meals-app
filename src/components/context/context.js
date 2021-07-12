import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
export const myContext = createContext();

export const AppContext = ({ children }) => {
 
      return  <myContext.Provider>{children}</myContext.Provider>
      
};