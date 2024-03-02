import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Contact } from '../types/contact.types';
import { useContactsStore } from './contacts.store';

describe('useContactsStore', () => {
  let mockContact: Contact;

  beforeEach(() => {
    const { result } = renderHook(() => useContactsStore());
    act(() => result.current.deselect());

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
        },
      ],
      isFavourite: 1,
      createdAt: '2022-01-01',
      updatedAt: '2022-01-01',
    };
  });

  it('should initialy be null', () => {
    const { result } = renderHook(() => useContactsStore());

    expect(result.current.selectedId).toBeUndefined();
  });

  describe('setSelected()', () => {
    it('should set a selection', () => {
      const { result } = renderHook(() => useContactsStore());
      act(() => result.current.setSelectedId(mockContact.id));

      expect(result.current.selectedId).toBe(mockContact.id);
      expect(result.current.selectedId).toBe(123);
    });
  });

  describe('deselect()', () => {
    it('should unset the selection', () => {
      const { result } = renderHook(() => useContactsStore());

      act(() => result.current.setSelectedId(mockContact.id));
      expect(result.current.selectedId).toBe(mockContact.id);

      act(() => result.current.deselect());
      expect(result.current.selectedId).toBeUndefined();
    });
  });
});
