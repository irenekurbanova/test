export type SelectProps = {
  value: string;
  options: string[] | undefined;
  name: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
