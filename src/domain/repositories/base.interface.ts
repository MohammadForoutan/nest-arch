import type { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export interface IBaseRepository<T> {
  createOne: (data: DeepPartial<T>) => T;
  createMany: (data: DeepPartial<T>[]) => T[];
  save: (data: DeepPartial<T>) => Promise<T>;
  saveMany: (data: DeepPartial<T>[]) => Promise<T[]>;
  findOneById: (id: number) => Promise<T | null>;
  findOne: (filterOption: FindOneOptions<T>) => Promise<T | null>;
  findMany: (filterOption?: FindManyOptions<T>) => Promise<T[]>;
  findWithRelations: (relations: FindManyOptions<T>) => Promise<T[]>;
  remove: (data: T) => Promise<T>;
  preload: (entityLike: DeepPartial<T>) => Promise<T | undefined>;
}
// export interface IBaseRepository<T> {
//   findMany: ({ filter }: { filter?: Filter<T> }) => Promise<T[]>;
//   findOne: ({ filter }: { filter?: Filter<T> }) => Promise<T[]>;
//   createOne: ({ dto }: { dto: any }) => Promise<T>; // FIXME: add createDto type
//   updateOne: ({ filter, dto }: { filter: Filter<T>; dto: any }) => Promise<T>; // FIXME: add updateDto type
//   updateMany: ({
//     filter,
//     dto,
//   }: {
//     filter: Filter<T>;
//     dto: any;
//   }) => Promise<T[]>;
//   deleteOne: ({ filter }: { filter: Filter<T> }) => Promise<T>;
//   deleteMany: ({ filter }: { filter: Filter<T> }) => Promise<T>;
// }
// export class Repository implements IRepository<T> {
//   findMany: ({ filter }: { filter?: Filter<T> }) => Promise<T[]>;
//   findOne: ({ filter }: { filter?: Filter<T> }) => Promise<T[]>;
//   createOne: ({ dto }: { dto: any }) => Promise<T>;
//   updateOne: ({ filter, dto }: { filter: Filter<T>; dto: any }) => Promise<T>;
//   updateMany: ({
//     filter,
//     dto,
//   }: {
//     filter: Filter<T>;
//     dto: any;
//   }) => Promise<T[]>;
//   deleteOne: ({ filter }: { filter: Filter<T> }) => Promise<T>;
//   deleteMany: ({ filter }: { filter: Filter<T> }) => Promise<T>;
// }
