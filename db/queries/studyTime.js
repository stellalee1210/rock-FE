export const STUDY_TIME_QUERIES = Object.freeze({
  SAVE_STUDY_TIME: `INSERT INTO session (user_id, study_date, start_time, end_time, total_study_time)
    VALUES( $1, $2, $3, $4, $5)`,
  FETCH_DAY_STUDY_TIME: `SELECT total_study_time from session WHERE study_date = $1 ORDER BY total_study_time desc`,
});
