// // TODO: implement generic repository for all repositories
// interface Filter<T> {
//   [key: string]: T[keyof T];
// }

// interface IRepository<T> {
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
