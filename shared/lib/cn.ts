// src/shared/lib/cn.ts
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));