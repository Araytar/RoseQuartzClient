import {createTheme} from "@mantine/core";

export const defaultTheme = createTheme({
    /** Controls focus ring styles. Supports the following options:
     *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
     *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
     *  - `never` – focus ring is always hidden (not recommended)
     */
    focusRing: "auto"
});