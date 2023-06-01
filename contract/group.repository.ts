import { Group } from '../entities/group.entity';

export abstract class GroupRepository {
  abstract create: (user: Group) => Promise<Group>;     // C
  abstract read: (userId: string) => Promise<Group>;    // R - read
  abstract readAll: () => Promise<Group[]>;             // R - read all
  abstract update: (user: Group) => Promise<Group>;     // U
  abstract delete: (userId: string) => Promise<void>;   // D
}