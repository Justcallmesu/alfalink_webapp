export default interface RouteGuard<T> {
  url: string;
  OutletContext?: T;
}
