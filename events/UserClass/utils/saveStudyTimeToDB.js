import pool from "../../../db/database.js";
import { STUDY_TIME_QUERIES } from "../../../db/queries/studyTime.js";

export async function saveStudyTimeToDB(
  user_id,
  study_date,
  start_time,
  end_time,
  total_study_time
) {
  pool.query(STUDY_TIME_QUERIES.SAVE_STUDY_TIME, [
    user_id,
    study_date,
    start_time,
    end_time,
    total_study_time,
  ]);
}
