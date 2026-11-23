
"use server";

import { api, ApiError } from "@/shared/api/client";
import { SendRequestState } from "../model/type";

export async function sendRequest(
  _prev: SendRequestState,
  formData: FormData
): Promise<SendRequestState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const name = get("name");
  const phone = get("phone");
  const email = get("email");
  const message = get("message");

  if (!name || !phone) {
    return { status: "error", message: "Заполните имя и номер телефона" };
  }

  try {
    await api("/requests/", {
      method: "POST",
      body: {
        name,
        phone,
        ...(email && { email }),
        ...(message && { message }),
      },
    });
    return { status: "ok" };
  } catch (e) {
    console.error("sendRequest failed:", e instanceof ApiError ? e.body : e);

    // DRF при 400 возвращает { поле: ["текст ошибки"] }
    if (e instanceof ApiError && e.status === 400 && e.body && typeof e.body === "object") {
      const first = Object.values(e.body as Record<string, unknown>)[0];
      const text = Array.isArray(first) ? String(first[0]) : null;
      if (text) return { status: "error", message: text };
    }

    return { status: "error", message: "Не удалось отправить, попробуйте ещё раз" };
  }
}