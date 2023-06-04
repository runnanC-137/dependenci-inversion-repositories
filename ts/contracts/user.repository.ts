import { User } from '../../entities-models/entities-ts/user.entity'

export abstract class UserRepository {
  abstract create: (user: User) => Promise<User>;           // C
  abstract read: (userId: string) => Promise<User>;         // R - read
  abstract readAll: () => Promise<User[]>;                  // R - read all
  abstract readByEmail: (email: string) => Promise<User>;   // R - read by public key
  abstract update: (user: User) => Promise<User>;           // U
  abstract delete: (userId: string) => Promise<void>;       // U
}