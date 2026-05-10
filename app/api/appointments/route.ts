import { NextResponse } from "next/server";
import { getPostgresPool } from "@/lib/postgres";

export const runtime = "nodejs";

type AppointmentRequest = {
  contactName?: unknown;
  contactPhone?: unknown;
  desiredArrivalAt?: unknown;
  serviceName?: unknown;
  petName?: unknown;
  petType?: unknown;
  note?: unknown;
};

function cleanRequiredString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanOptionalString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
}

export async function POST(request: Request) {
  let body: AppointmentRequest;

  try {
    body = (await request.json()) as AppointmentRequest;
  } catch {
    return NextResponse.json({ message: "预约信息格式不正确。" }, { status: 400 });
  }

  const contactName = cleanRequiredString(body.contactName);
  const contactPhone = cleanRequiredString(body.contactPhone);
  const desiredArrivalAt = cleanRequiredString(body.desiredArrivalAt);
  const serviceName = cleanOptionalString(body.serviceName, 80);
  const petName = cleanOptionalString(body.petName, 50);
  const petType = cleanOptionalString(body.petType, 30);
  const note = cleanOptionalString(body.note, 500);
  const arrivalDate = new Date(desiredArrivalAt);

  if (!contactName || contactName.length > 50) {
    return NextResponse.json({ message: "请填写 50 字以内的联系人。" }, { status: 400 });
  }

  if (!contactPhone || contactPhone.length > 30) {
    return NextResponse.json({ message: "请填写有效联系电话。" }, { status: 400 });
  }

  if (Number.isNaN(arrivalDate.getTime())) {
    return NextResponse.json({ message: "请选择期望到店时间。" }, { status: 400 });
  }

  try {
    const pool = getPostgresPool();
    const result = await pool.query<{ id: string; created_at: string }>(
      `insert into public.appointments (
        contact_name,
        contact_phone,
        desired_arrival_at,
        service_name,
        pet_name,
        pet_type,
        note
      )
      values ($1, $2, $3, $4, $5, $6, $7)
      returning id, created_at`,
      [contactName, contactPhone, arrivalDate.toISOString(), serviceName, petName, petType, note]
    );

    return NextResponse.json(
      {
        appointmentId: result.rows[0].id,
        createdAt: result.rows[0].created_at
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create appointment", error);

    return NextResponse.json(
      { message: "预约暂时提交失败，请稍后再试或电话联系门店。" },
      { status: 500 }
    );
  }
}
