/**
  F: Front (Frente)
  B: Back (Atrás)
  U: Up (Arriba)
  D: Down (Abajo)
  L: Left (Izquierda)
  R: Right (Derecha)
 */

  export const MINIMUM_SCRAMBLE_LENGTH_3X3 = 20;
  export const MINIMUM_SCRAMBLE_LENGTH_2X2 = 10;

  export enum ScrambleMove3x3 {
    F = "F",
    B = "B",
    U = "U",
    D = "D",
    L = "L",
    R = "R",
  }
  
  export enum ScrambleMoveType {
    NONE = "",
    PRIME = "'",
    DOUBLE = "2",
  }
  
  export enum ScrambleMove2x2 {
    U = "U",
    R = "R",
    F = "F",
  }