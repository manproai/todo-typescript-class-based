export interface TodoUseCase<T, M> {
    act (dataSource: T, matchers?: M | undefined): any;
}