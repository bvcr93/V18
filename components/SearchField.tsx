import React from "react";
import SearchIcon from "@mui/icons-material/Search";
type Props = {
  className: string;
  SearchIcon?: React.ComponentType<any>;
};

const SearchField = ({ className, SearchIcon = undefined }: Props) => {
  return (
    <div className={className}>
      {SearchIcon && <SearchIcon className="text-gray-500" />}
      <input type="text" placeholder="Search..." className="outline-none" />
    </div>
  );
};
export default SearchField;
