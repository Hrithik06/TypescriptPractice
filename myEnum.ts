// the translated JS code is very big
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const seat = SeatChoice.AISLE;

// so to reduce the code size use const
const enum SeatChoice2 {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const seat2 = SeatChoice2.AISLE;

export {};
