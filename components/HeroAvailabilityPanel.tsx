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

const arrivalTimes = ["09:30", "10:30", "12:00", "14:30", "16:00", "18:30"];
const defaultArrivalTime = "09:30";
const arrivalDateLabel = "明天";

export default function HeroAvailabilityPanel() {
  const [selectedTime, setSelectedTime] = useState(defaultArrivalTime);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const selectedArrivalLabel = `${arrivalDateLabel} ${selectedTime}`;

  const arrivalHint = useMemo(() => {
    const [hour] = selectedTime.split(":").map(Number);

    if (hour < 12) {
      return "明天上午到店，适合快洗和基础护理";
    }

    if (hour < 17) {
      return "明天下午余位更稳，适合洗护造型";
    }

    return "明日晚间时段，建议优先电话确认";
  }, [selectedTime]);

  return (
    <aside className="hero-panel" aria-label="明日预约状态">
      <div className="status-row">
        <div>
          <strong>明日余位</strong>
          <p>建议提前 2 小时预约</p>
        </div>
        <span className="open-pill">
          <i className="dot" aria-hidden="true" />
          营业中
        </span>
      </div>

      <div className="quick-arrival" aria-labelledby="quick-arrival-title">
        <div className="quick-arrival-head">
          <strong id="quick-arrival-title">期望到店日期</strong>
          <span>{selectedArrivalLabel} 到店</span>
        </div>
        <div className="arrival-options" role="list" aria-label="选择期望到店日期">
          {arrivalTimes.map((time) => (
            <button
              className="arrival-chip"
              type="button"
              aria-pressed={selectedTime === time}
              key={time}
              onClick={() => setSelectedTime(time)}
            >
              {arrivalDateLabel} {time}
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

      <div className="quick-contact" aria-label="联系人信息">
        <label>
          <span>联系人</span>
          <input
            type="text"
            value={contactName}
            placeholder="怎么称呼"
            autoComplete="name"
            onChange={(event) => setContactName(event.target.value)}
          />
        </label>
        <label>
          <span>联系电话</span>
          <input
            type="tel"
            value={contactPhone}
            placeholder="手机号"
            autoComplete="tel"
            onChange={(event) => setContactPhone(event.target.value)}
          />
        </label>
      </div>

      <a className="panel-booking-btn" href="#booking">
        预约 {selectedArrivalLabel} 到店
      </a>
    </aside>
  );
}
