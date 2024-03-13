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




/**
 * REGLAS DE GENERACIÓN DE MOVIMIENTOS
 * 1. No se puede hacer el mismo movimiento dos veces seguidas
 * 2. No se puede hacer el movimiento inverso al anterior, Ejemplo: Si se hizo F, no se puede hacer F 
 * 3. El paso 2 aplica si si el movimiento de hace 2 pasos antes y el anterior fue un movimiento de una cara diferente al actual, Ejemplo: B F2 B'
 * 4. No se puede hacer el movimiento inverso al anterior, Ejemplo: Si se hizo F, no se puede hacer F y si se hizo F, no se puede hacer F2
 * 5. No hacer el mismo movimiento de hace dos pasos, Ejemplo: F U F B
 * 
 * hacer un función que genere un arreglo de movimientos aleatorios dependiendo del tamaño del cubo
 */

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
