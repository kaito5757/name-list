export type Users = User[] | undefined;

export type User = {
  id: number;
  main_image_url: string;
  full_name: string;
  full_name_kana: string;
  departments: {
    user_id: number;
    department_id: number;
    assigned_at: Date;
    assigned_by: string;
  }[];
  teams: {
    user_id: number;
    team_id: number;
    assigned_at: Date;
    assigned_by: string;
  }[];
  official_position: string;
  occupation: string;
  mail_address: string;
  slack_name: string;
  created_at: Date;
  updated_at: Date;
};
