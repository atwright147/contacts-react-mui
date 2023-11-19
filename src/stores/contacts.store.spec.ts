import { beforeEach, describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContactsStore } from './contacts.store';
import { Contact } from '../types/contact.types';

describe('useContactsStore', () => {
  let mockContact: Contact;

  beforeEach(() => {
    const { result } = renderHook(() => useContactsStore());
    act(() => result.current.empty());

    mockContact = {
      id: 123,
      uuid: 'uuid1',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      jobTitle: 'Software Engineer',
      bio: 'Lorem ipsum',
      emails: [
        {
          id: 1,
          contactId: 1,
          email: 'email@example.com',
          isPrimary: 1,
          createdAt: '2022-01-01',
          updatedAt: '2022-01-01',
        },
      ],
      addresses: [
        {
          contactId: 1,
          address1: 'address1',
          address2: 'address2',
          address3: 'address3',
          city: 'city',
          county: 'county',
          postCode: 'postCode',
          isPrimary: 1,
        },
      ],
      comments: [
        {
          id: 1,
          contactId: 1,
          comment: 'Lorem ipsum dolor sit amet',
          createdAt: '2022-01-01',
          updatedAt: '2022-01-01',
        }
      ],
      isFavourite: 1,
      createdAt: '2022-01-01',
      updatedAt: '2022-01-01',
    }
  });

  it('should initialy be null', () => {
    const { result } = renderHook(() => useContactsStore());

    expect(result.current.selected).toBe(null);
  });

  describe('setSelected()', () => {
    it('should set a selection', () => {
      const { result } = renderHook(() => useContactsStore());
      act(() => result.current.setSelected(mockContact));

      expect(result.current.selected).toMatchObject(mockContact);
      expect(result.current.selected?.id).toBe(123);
    });
  });

  describe('empty()', () => {
    it('should empty the selection', () => {
      const { result } = renderHook(() => useContactsStore());

      act(() => result.current.setSelected(mockContact));
      expect(result.current.selected).toMatchObject(mockContact);

      act(() => result.current.empty());
      expect(result.current.selected).toBe(null);
    });
  })
});
