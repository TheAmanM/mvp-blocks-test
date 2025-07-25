import { customAlphabet } from "nanoid";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}