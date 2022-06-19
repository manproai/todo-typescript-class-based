interface DatabaseInterface {
    connect(): Promise<void> | void;
    connection?();
}
 export { DatabaseInterface }