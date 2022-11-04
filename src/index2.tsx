import { showHUD } from "@raycast/api";
import { setTimeout } from "timers/promises";

export default async function Command() {
  await setTimeout(2000);
  await showHUD("Launched");
}
