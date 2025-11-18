import { SCHEDULE_QUERIES } from '../../db/queries/schedule.js';
import pool from '../../db/database.js';
import { scheduleJob } from 'node-schedule';
import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import { client } from '../../index.js';

export class ScheduleManager {
  constructor() {
    this.jobs = new Map();
  }

  async loadSchedules(guildId) {
    try {
      const result = await pool.query(SCHEDULE_QUERIES.GET_TIME, [guildId]);
      if (result.rows.length === 0) {
        console.log('등록된 시간 없음');
        return;
      }

      const row = result.rows[0];
      this.createJob(row.id, row.attendance_channel_id, row.attendance_time);

      console.log('등록된 시간 가져옴');
    } catch (error) {
      console.error(error);
    }
  }

  createJob(settingId, channelId, time) {
    const hour = time;
    const minute = 0;
    const timeFormat = `${minute} ${hour} * * *`;

    const schedule = scheduleJob(timeFormat, async () => {
      await this.sendMessage(channelId);
    });

    this.jobs.get(settingId, schedule);
    console.log(`스케쥴 생성됨 ${hour}:00 - 채널 : ${channelId}`);
  }

  async sendMessage(channelId) {
    try {
      const channel = await client.channels.fetch(channelId);

      if (!channel || !channel.isTextBased()) {
        console.error(`해당 채널이 없습니다.`);
        return;
      }

      const button = new ButtonBuilder()
        .setCustomId('attendance_check')
        .setLabel('출석 체크')
        .setStyle(ButtonStyle.Primary);

      const row = new ActionRowBuilder().addComponents(button);

      await channel.send({
        content: '출석 메시지(임시)',
        components: [row],
      });
      console.log(`메시지 전송됨 ${channelId}`);
    } catch (error) {
      console.error(`메시지 전송 실패 ${error}`);
    }
  }
}

export const scheduleManager = new ScheduleManager();
