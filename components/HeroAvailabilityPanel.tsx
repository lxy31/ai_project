"use client";

import { useMemo, useState } from "react";

const slots = [
  {
    title: "小型犬快洗",
    note: "预计 70 分钟",
    count: "2 位"
  },
  {
    title: "猫咪舒缓洗护",
    note: "独立安静房",
    count: "1 位"
  },
  {
    title: "全身精修",
    note: "需洗前评估",
    count: "3 位"
  }
];

const arrivalTimes = ["10:30", "12:00", "14:30", "16:00", "18:30"];

export default function HeroAvailabilityPanel() {
  const [selectedTime, setSelectedTime] = useState(arrivalTimes[2]);

  const arrivalHint = useMemo(() => {
    const [hour] = selectedTime.split(":").map(Number);

    if (hour < 12) {
      return "上午到店，适合快洗和基础护理";
    }

    if (hour < 17) {
      return "下午余位更稳，适合洗护造型";
    }

    return "晚间时段，建议优先电话确认";
  }, [selectedTime]);

  return (
    <aside className="hero-panel" aria-label="今日预约状态">
      <div className="status-row">
        <div>
          <strong>今日余位</strong>
          <p>建议提前 2 小时预约</p>
        </div>
        <span className="open-pill">
          <i className="dot" aria-hidden="true" />
          营业中
        </span>
      </div>

      <div className="quick-arrival" aria-labelledby="quick-arrival-title">
        <div className="quick-arrival-head">
          <strong id="quick-arrival-title">快速到店时间</strong>
          <span>{selectedTime} 到店</span>
        </div>
        <div className="arrival-options" role="list" aria-label="选择到店时间">
          {arrivalTimes.map((time) => (
            <button
              className="arrival-chip"
              type="button"
              aria-pressed={selectedTime === time}
              key={time}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <p>{arrivalHint}</p>
      </div>

      <div className="slots">
        {slots.map((slot) => (
          <div className="slot" key={slot.title}>
            <div>
              <strong>{slot.title}</strong>
              <span>{slot.note}</span>
            </div>
            <b>{slot.count}</b>
          </div>
        ))}
      </div>

      <a className="panel-booking-btn" href="#booking">
        预约 {selectedTime} 到店
      </a>
    </aside>
  );
}
