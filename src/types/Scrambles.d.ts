import { ScrambleMove2x2, ScrambleMove3x3, ScrambleMoveType } from "@constants";

export type Scramble = {
  move: ScrambleMove3x3 | ScrambleMove2x2;
  type: ScrambleMoveType;
}