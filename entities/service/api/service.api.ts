
import { api } from "@/shared/api/client";
import type { Paginated } from "@/shared/api/types";
import type { Service } from "../model/types";

export const getServices = () =>
    api<Paginated<Service>>("/services/", { next: { revalidate: 60 } });

export const getService = (id: number | string) =>
    api<Service>(`/services/${id}/`, { next: { revalidate: 60 } });