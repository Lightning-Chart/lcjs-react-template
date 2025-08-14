// React logic for managing LightningChart JS instances that are shared
// between any LCJS based components that can be visible at the same time
// In simple use cases with 1-2 charts visible at once, there is no need to use these.
// However, with more charts visible at once, this gives an incredible performance advantage, since all charts use a shared LC context.
// See usage example in ./Components/MyChartComponent.js and ./App.js

import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
} from "react";
import { LightningChart, lightningChart } from "@lightningchart/lcjs";

export const LCContext = createContext<undefined | LightningChart>(undefined);

export function LCHost(props: PropsWithChildren) {
  const lcRef = useRef<undefined | LightningChart>(undefined);
  const [lcState, setLcState] = useState<undefined | LightningChart>(undefined);

  useEffect(() => {
    if (!lcRef.current) {
      try {
        lcRef.current = lightningChart({
          license: process.env.REACT_APP_LCJS_LICENSE,
          licenseInformation: {
            appTitle: "LightningChart JS Trial",
            company: "LightningChart Ltd.",
          },
          sharedContextOptions: {
            useIndividualCanvas: true,
          },
        });
        setLcState(lcRef.current);
      } catch (e) {
        console.error(e);
      }
    }

    return () => {
      if (lcRef.current && "dispose" in lcRef.current) {
        lcRef.current.dispose();
        lcRef.current = undefined;
        setLcState(undefined);
      }
    };
  }, []);

  return (
    <>
      <LCContext.Provider value={lcState}>{props.children}</LCContext.Provider>
    </>
  );
}
