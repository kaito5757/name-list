export type Departments = Department[] | undefined;

export type Department = {
  id: number;
  name: string;
  order: number;
  created_at: Date;
  updated_at: Date;
};
