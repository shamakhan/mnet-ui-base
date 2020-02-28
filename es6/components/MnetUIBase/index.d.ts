import * as React from "react";
import { ThemeType } from "../../themes";

export interface MnetUIBaseProps {
  cssVars?: boolean;
  full?: boolean;
  plain?: boolean;
  theme?: ThemeType;
  themeMode?: "dark" | "light";
  userAgent?: string;
}

declare const MnetUIBase: React.ComponentClass<MnetUIBaseProps & JSX.IntrinsicElements['div']>;

export { MnetUIBase };
