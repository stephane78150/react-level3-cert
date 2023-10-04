import React, { FC, useCallback, useState } from "react";
import classNames from "classnames";

export type SearchInputProps = Readonly<{
  onSearching: (value: string) => void;
  selected: string | null;
}>;

export const SearchInput: FC<SearchInputProps> = ({
  onSearching,
  selected,
}) => {
  const [current, setCurrent] = useState("");
  const onChange = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const val = e.target.value;
      onSearching(val);
      setCurrent(val);
    },
    [onSearching],
  );

  return (
    <>
      <input
        type="text"
        className={classNames({ "bg-primary text-white": selected !== null })}
        onChange={onChange}
        value={selected ?? current}
      />
    </>
  );
};
