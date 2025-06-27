'use client';

import { toast as sonnerToast } from 'sonner';

type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  type?: ToastType;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  duration?: number;
}

export function toast({
  type = 'default',
  title,
  description,
  actionLabel,
  onAction,
  duration,
}: ToastOptions) {
  return sonnerToast(title, {
    description,
    duration,
    action: actionLabel && onAction ? {
      label: actionLabel,
      onClick: onAction,
    } : undefined,
    ...(type === 'success' && { icon: '✅' }),
    ...(type === 'error' && { icon: '❌' }),
    ...(type === 'info' && { icon: 'ℹ️' }),
    ...(type === 'warning' && { icon: '⚠️' }),
  });
}
