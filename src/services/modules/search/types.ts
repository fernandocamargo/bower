export interface Service {
  (payload: Payload): Promise<Array<any>>;
}

export interface Payload {
  deep: boolean;
  keywords: string;
  order: string;
  page: number;
  perPage: number;
  sort: string;
}

export default Service;
