import type * as Base from 'history';

export interface Location extends Base.Location {
  state: any;
}

export interface Update extends Base.Update {
  location: Location;
}

export type Listener = (update: Base.Update | Update) => void;
