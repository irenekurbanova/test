export type SelectProps = {
  value: string;
  options: string[] | undefined;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
