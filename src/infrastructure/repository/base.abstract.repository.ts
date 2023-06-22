import type { IBaseRepository } from '@domain';
import type {
        DeepPartial,
        FindManyOptions,
        FindOneOptions,
        FindOptionsWhere,
        Repository,
} from 'typeorm';

interface HasId {
        id: number;
}

export abstract class BaseRepository<T extends HasId>
        implements IBaseRepository<T>
{
        constructor(private entity: Repository<T>) {
                this.entity = entity;
        }

        public save(data: DeepPartial<T>): Promise<T> {
                return this.entity.save(data);
        }

        public saveMany(data: DeepPartial<T>[]): Promise<T[]> {
                return this.entity.save(data);
        }

        public createOne(data: DeepPartial<T>): T {
                return this.entity.create(data);
        }

        public createMany(data: DeepPartial<T[]>): T[] {
                return this.entity.create(data);
        }

        public findOneById(id: number): Promise<T | null> {
                const options: FindOptionsWhere<T extends HasId> = { id };

                return this.entity.findOneBy(options);
        }

        public findOne(filterOption: FindOneOptions<T>): Promise<T | null> {
                return this.entity.findOne(filterOption);
        }

        public findMany(filterOption: FindManyOptions<T> = {}): Promise<T[]> {
                return this.entity.find(filterOption);
        }

        public findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
                return this.entity.find(relations);
        }

        public remove(data: T): Promise<T> {
                return this.entity.remove(data);
        }

        public preload(entityLike: DeepPartial<T>): Promise<T | undefined> {
                return this.entity.preload(entityLike);
        }
}
