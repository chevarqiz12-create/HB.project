
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL не задан в .env.local");

export class ApiError extends Error {
  constructor(public status: number, public body?: unknown) {
    super(`API error ${status}`);
  }
}

export async function api<T>(
  path: string,
  { body, ...init }: Omit<RequestInit, "body"> & { body?: unknown; next?: { revalidate?: number } } = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new ApiError(res.status, await res.json().catch(() => null));
  return res.json();
}