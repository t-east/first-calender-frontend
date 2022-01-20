export interface Event {
  name: string;
  year: number;
  month: number;
  date: number;
  tags: EventTag[];
}

export interface EventTag {
  id: number;
  label: string;
}
  