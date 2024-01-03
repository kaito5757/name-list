export type Teams = Team[] | undefined;

export type Team = {
  id: number;
  name: string;
  order: number;
  created_at: Date;
  updated_at: Date;
};
