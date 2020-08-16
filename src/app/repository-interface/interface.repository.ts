export interface IRepository<T>{

    findOneById(id: string) : Promise<T>;

    findAll() : Promise<Array<T>>;

    add(entity : T): void;
}