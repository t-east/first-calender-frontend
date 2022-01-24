export interface EventDate {
  fromDate: Date;
  toDate: Date;
  hasRange: boolean;
  isAllday: boolean;
}

export interface EventTag {
  id: number;
  label: string;
}

export interface Event {
  title: string;
  date: EventDate
  tags: EventTag[];
  url: string;
  detail: string;
}
  