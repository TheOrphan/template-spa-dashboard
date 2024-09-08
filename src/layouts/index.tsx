import React from "react";
import { Box } from "@mantine/core";
import { NavbarNested } from "../components/NavbarNested/NavbarNested";
import * as classes from "./Layouts.module.css";

export default function NotFound({ children }: { children: React.ReactNode }) {
  return (
    <Box mah={"100vh"} maw={"100vw"}>
      <NavbarNested />
      <div className={classes.content}>{children}</div>
    </Box>
  );
}
