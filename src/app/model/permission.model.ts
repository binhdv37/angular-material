export interface Permission{
  name: string;
  isCompleted: boolean;
  child?: Permission[];
}
