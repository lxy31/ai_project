"use client";

import { useState } from "react";

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

function getDefaultArrivalValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 30, 0, 0);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T09:30`;
}

function formatArrivalLabel(value: string) {
  if (!value) {
    return "待填写";
  }

  const [date = "", time = ""] = value.split("T");
  const [, month = "", day = ""] = date.split("-");

  return `${month}月${day}日 ${time}`;
}

export default function HeroAvailabilityPanel() {
  const [arrivalValue, setArrivalValue] = useState(getDefaultArrivalValue);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const selectedArrivalLabel = formatArrivalLabel(arrivalValue);

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

      <div className="quick-arrival" aria-labelledby="quick-arrival-title">
        <div className="quick-arrival-head">
          <strong id="quick-arrival-title">期望到店日期</strong>
          <span>{selectedArrivalLabel} 到店</span>
        </div>
        <label className="arrival-field">
          <span>到店时间</span>
          <input
            type="datetime-local"
            value={arrivalValue}
            onChange={(event) => setArrivalValue(event.target.value)}
          />
        </label>
        <p>可直接填写或选择日期与时间，店员会按此时间联系确认。</p>
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
        预约 {selectedArrivalLabel} 到店
      </a>
    </aside>
  );
}
