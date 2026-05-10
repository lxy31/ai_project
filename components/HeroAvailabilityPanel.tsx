"use client";

import { type FormEvent, useState } from "react";

const petTypes = ["小型犬", "中大型犬", "猫咪"];
const serviceOptions = ["基础洗护", "精致护理洗", "洗护造型套"];

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
  const [petType, setPetType] = useState(petTypes[0]);
  const [serviceName, setServiceName] = useState(serviceOptions[0]);
  const [note, setNote] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const selectedArrivalLabel = formatArrivalLabel(arrivalValue);
  const isSubmitting = submitState === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = contactName.trim();
    const trimmedPhone = contactPhone.trim();

    if (!trimmedName || !trimmedPhone || !arrivalValue) {
      setSubmitState("error");
      setSubmitMessage("请先填写联系人、联系电话和到店时间。");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contactName: trimmedName,
          contactPhone: trimmedPhone,
          desiredArrivalAt: new Date(arrivalValue).toISOString(),
          serviceName,
          petType,
          note
        })
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message ?? "预约暂时提交失败，请稍后再试。");
      }

      setSubmitState("success");
      setSubmitMessage("预约已提交，店员会尽快联系你确认。");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "预约暂时提交失败，请稍后再试。");
    }
  }

  return (
    <form className="hero-panel" aria-label="快速预约" onSubmit={handleSubmit}>
      <div className="status-row">
        <div>
          <strong>快速预约</strong>
          <p>填写后店员会尽快确认</p>
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
            required
            maxLength={50}
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
            required
            maxLength={30}
            onChange={(event) => setContactPhone(event.target.value)}
          />
        </label>
      </div>

      <div className="quick-contact single" aria-label="到店时间">
        <label>
          <span>到店时间</span>
          <input
            type="datetime-local"
            value={arrivalValue}
            required
            onChange={(event) => setArrivalValue(event.target.value)}
          />
        </label>
      </div>

      <div className="choice-group" aria-label="宠物类型">
        <span>宠物类型</span>
        <div className="choice-options">
          {petTypes.map((type) => (
            <button
              className="choice-chip"
              type="button"
              aria-pressed={petType === type}
              key={type}
              onClick={() => setPetType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="choice-group" aria-label="服务项目">
        <span>服务项目</span>
        <div className="choice-options">
          {serviceOptions.map((option) => (
            <button
              className="choice-chip"
              type="button"
              aria-pressed={serviceName === option}
              key={option}
              onClick={() => setServiceName(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <label className="note-field">
        <span>备注</span>
        <textarea
          value={note}
          placeholder="宠物名字、体型、接送需求或特别注意"
          maxLength={500}
          rows={3}
          onChange={(event) => setNote(event.target.value)}
        />
      </label>

      <button className="panel-booking-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "正在提交..." : `预约 ${selectedArrivalLabel} 到店`}
      </button>
      {submitMessage ? (
        <p className={`submit-message ${submitState === "success" ? "success" : "error"}`} role="status">
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
