export interface WorkDay {
  id: string; // Unique identifier formatted as "WD-timestamp"
  clockIn: number; // Unix timestamp in milliseconds when clocked in
  lunchStart: number | null; // Unix timestamp in milliseconds when lunch started (0 or null if not applicable/started)
  lunchEnd: number | null; // Unix timestamp in milliseconds when lunch ended (0 or null if not applicable/ended)
  extraClocks: Array<[number, number]>; // Additional [clockIn, clockOut] timestamp pairs during the work day
  targetClockOut: number; // Automatically calculated target clock out Unix timestamp in milliseconds
  clockOut: number | null; // Actual clock out Unix timestamp in milliseconds (0 or null if currently working)
  overtime: number; // Overtime duration in minutes (0 if target not exceeded or not yet clocked out)
}
