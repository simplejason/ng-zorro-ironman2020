export interface IMenu {
  level: number;
  title: string;
  icon: string;
  open: boolean;
  children: IMenu[];
}
