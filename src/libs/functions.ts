import { 
  ScrambleMoveType,
  ScrambleMove3x3,
  ScrambleMove2x2,
  MINIMUM_SCRAMBLE_LENGTH_2X2,
  MINIMUM_SCRAMBLE_LENGTH_3X3,
} from "@constants";
import type { Scramble } from "types/Scrambles";


export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}


export const generateScramble3x3 = (length = MINIMUM_SCRAMBLE_LENGTH_3X3) => {
  const notation = Object.values(ScrambleMove3x3);
  const exp = Object.values(ScrambleMoveType);
  const scramble: Scramble[] = [];
  const temp = [];
  for (let i = 0; i < length; i++) {
    let random = notation[getRandomInt(notation.length)];
    let asd = exp[getRandomInt(exp.length)];
    notation.splice(notation.indexOf(random), 1);
    temp.push(random);
    if (temp.length > 2) {
      notation.push(temp[0]);
      temp.shift();
    }
    scramble.push({ move: random, type: asd });

  }
  return scramble;
}



export const generateScramble2x2 = (length = MINIMUM_SCRAMBLE_LENGTH_2X2) => {
  const scramble: Scramble[] = [];
  const temp = [];
  const notation = Object.values(ScrambleMove2x2);
  const exp = Object.values(ScrambleMoveType);

  for (let i = 0; i < length; i++) {
    let random = notation[getRandomInt(notation.length)];
    let asd = exp[getRandomInt(exp.length)];
    notation.splice(notation.indexOf(random), 1);
    temp.push(random);
    if (temp.length > 2) {
      notation.push(temp[0]);
      temp.shift();
    }
    scramble.push({ move: random, type: asd });
  }
  return scramble;
}
