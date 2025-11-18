export const SCHEDULE_QUERIES = {
  GET_TIME: `SELECT id, attendance_channel_id, attendance_time FROM settings WHERE guild_id = $1`,
};
