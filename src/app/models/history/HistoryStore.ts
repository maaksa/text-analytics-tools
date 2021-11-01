import {RequestHistory} from "./RequestHistory";

const requestHistory: RequestHistory[] = [];

export class HistoryStore {
  public static addRequestToStore(request: RequestHistory) {
    // @ts-ignore
    requestHistory.push(request)
  }

  public static getRequestHistoryStore(): RequestHistory[] {
    return requestHistory
  }
}
