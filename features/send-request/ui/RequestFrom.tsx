
"use client";

import { useActionState } from "react";
import { sendRequest } from "../api/SendRequest";
import { SendRequestState } from "../model/type";
import { Button } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/cn";

const initial: SendRequestState = { status: "idle" };

const field =
  "w-full bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:bg-white/15";

export function RequestForm({ className }: { className?: string }) {
  const [state, action, pending] = useActionState(sendRequest, initial);

  return (
    <form action={action} className={cn("flex flex-col gap-4", className)}>
      <input name="name" required placeholder="Имя" autoComplete="name" className={field} />
      <input
        name="phone"
        type="tel"
        required
        placeholder="Номер телефона"
        autoComplete="tel"
        className={field}
      />

      <Button type="submit" disabled={pending} className="disabled:opacity-60">
        {pending ? "Отправка…" : "Отправить заявку"}
      </Button>

      {state.status === "ok" && (
        <p className="text-green-400">Заявка отправлена! Мы скоро свяжемся с вами.</p>
      )}
      {state.status === "error" && <p className="text-red-400">{state.message}</p>}
    </form>
  );
}