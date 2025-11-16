import pool from "../../db/database.js";
import { STUDY_TIME_QUERIES } from "../../db/queries/studyTime.js";
import { getKoreanTime, formatKSTDate } from "../../utils/time.js";
import { formatStudyTime } from "../../utils/time.js";

export const fetchDayStudyTime = async (interaction) => {
  const todayDate = formatKSTDate(getKoreanTime());

  try {
    const totalStudyTime = await getTotalStudyTimeFromDB(todayDate);
    const formattedTotalStudyTime = formatStudyTime(totalStudyTime);

    const userDisplayName = interaction.member.displayName;
    const msg = `[${userDisplayName}] 마님의 ${todayDate} 공부시간은 ${formattedTotalStudyTime} 여유! `;
    await interaction.reply(msg);
  } catch (error) {
    console.log(error.message);
  }
};

const getTotalStudyTimeFromDB = async (todayDate) => {
  const totalStudyTime = await pool.query(
    STUDY_TIME_QUERIES.FETCH_DAY_STUDY_TIME,
    [todayDate]
  );
  return totalStudyTime.rows[0].total_study_time;
};
