import ClassRoom from './0-classroom';

/**
 * Creating an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
