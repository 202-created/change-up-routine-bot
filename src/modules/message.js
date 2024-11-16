import moment from "moment";
import { getFormatKstDate, getFormatTodayDate } from "./date.js";

export const buildMessage = () => {
  const today = getFormatTodayDate("YYYY년 MM월 DD일 dddd");
  const startDate = getFormatKstDate(
    new Date("2024-11-18"),
    "YYYY-MM-DD (dddd)"
  );
  const endDate = getFormatKstDate(new Date("2024-12-06"), "YYYY-MM-DD (dddd)");
  const elapsedDays =
    moment(new Date()).diff(new Date("2024-11-18"), "days") + 1;

  const messageHeader = `*[${today} 루틴 인증 스레드]*\n`;
  const messageBody = `
  📆 진행 기간: ${startDate} ~ ${endDate} (총 ${
    moment(new Date("2024-12-06")).diff(new Date("2024-11-18"), "days") + 1
  }일)
  🏃 진행 일수: ${elapsedDays}일차
  `;
  const message = messageHeader + messageBody;

  return message;
};
