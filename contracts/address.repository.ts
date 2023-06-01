import { Address } from '../entities-models/entities/address.entity';

export abstract class AddressRepository {
  abstract create: (user: Address) => Promise<Address>;  // C
  abstract read: (userId: string) => Promise<Address>;   // R - read
  abstract readAll: () => Promise<Address[]>;            // R - read all
  abstract update: (user: Address) => Promise<Address>;  // U
  abstract delete: (userId: string) => Promise<void>;    // D
}