export interface EventDate {
  from_date: Date;
  to_date: Date;
  isAllday: boolean;
}

export interface EventTag {
  id: number;
  label: string;
}

export interface Event {
  title: string;
  // tags: EventTag[];
  // url: string;
  from_date: Date;
  to_date: Date;
  is_all_day: boolean;
  description_text: string;
}

export interface Events {
  events: Event[];
  total: number;
}
  