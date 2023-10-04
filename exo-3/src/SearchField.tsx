import React, { PropsWithChildren, useState } from "react";
import { MyTypeahead, SearchableItem } from "./my-typeahead";
import { SearchFunction } from "./my-typeahead/hooks/useSearchResults";

type SearchFieldProps = Readonly<{
  search: SearchFunction;
}>;

export const SearchField: React.FC<PropsWithChildren<SearchFieldProps>> = ({
  search,
  children,
}) => {
  const [selected, setSelected] = useState<SearchableItem | null>(null);
  return (
    <div className="card">
      <div className="card-header">
        <p className="lead mb-4">{children}</p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <MyTypeahead onSelected={setSelected} search={search} />
          </div>
          {selected !== null && (
            <div className="col-6">
              <label htmlFor="SelectedValue">Selected value:</label>
              <label id="SelectedValue" className="ms-3">
                <strong title="Id">{selected?.id}</strong>
                <span className="mx-1">/</span>
                <em title="label">{selected?.label}</em>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
