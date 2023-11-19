import { beforeEach, describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNotificationsStore } from './notifications.store';

describe('useNotificationsStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useNotificationsStore());
    act(() => result.current.empty());
  });

  it('should initialize notifications array', () => {
    const { result } = renderHook(() => useNotificationsStore());

    expect(result.current.notifications).toEqual([]);
  });

  it('should add a notification', () => {
    const { result } = renderHook(() => useNotificationsStore());
    act(() => result.current.add({ type: 'info', body: 'Notification body' }));

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].type).toBe('info');
    expect(result.current.notifications[0].body).toBe('Notification body');
  });

  it('should remove a notification', () => {
    const { result } = renderHook(() => useNotificationsStore());
    act(() => result.current.add({ type: 'info', body: 'Notification body' }));

    const notificationToRemove = result.current.notifications[0];
    act(() => result.current.remove(notificationToRemove));

    expect(result.current.notifications).toHaveLength(0);
  });

  it('should empty the notifications array', () => {
    const { result } = renderHook(() => useNotificationsStore());
    act(() => result.current.add({ type: 'info', body: 'Notification body' }));
    act(() => result.current.empty());

    expect(result.current.notifications).toEqual([]);
  });
});
