import useContacts from "../../hooks/UseContacts";
import { Input } from "../input/Input";

export function Search() {
  const { search, onChangeSearch } = useContacts();

  return (
    <Input
      onChange={onChangeSearch}
      value={search}
      placeholder="Search for contact..."
    />
  );
}
