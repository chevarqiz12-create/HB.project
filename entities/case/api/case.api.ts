
import { api } from "@/shared/api/client";
import type { Paginated } from "@/shared/api/types";
import type { Case } from "../model/types";

export const getCases = () =>
  api<Paginated<Case>>("/cases/", { next: { revalidate: 60 } });

export const getCase = (id: number | string) =>
  api<Case>(`/cases/${id}/`, { next: { revalidate: 60 } });