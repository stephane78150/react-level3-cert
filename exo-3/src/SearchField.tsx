import { PropsWithChildren, useState } from "react";
import { MyTypeahead } from "./my-typeahead";

type SearchFieldProps<T> = Readonly<{
  data: T[];
  idProperty: keyof T;
  labelProperty: keyof T;
}>;

export const SearchField = <T extends object>({
  data,
  idProperty,
  labelProperty,
  children,
}: PropsWithChildren<SearchFieldProps<T>>) => {
  const [selected, setSelected] = useState<T | null>(null);
  return (
    <div className="card">
      <div className="card-header">
        <p className="lead mb-4">{children}</p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <MyTypeahead<T>
              valueChange={setSelected}
              data={data}
              idProperty={idProperty}
              labelProperty={labelProperty}
            />
          </div>
          {selected !== null && (
            <div className="col-6">
              <label htmlFor="SelectedValue">Selected value:</label>
              <label id="SelectedValue" className="ms-3">
                <strong title="Id">{`${selected?.[idProperty]}`}</strong>
                <span className="mx-1">/</span>
                <em title="label">{`${selected?.[labelProperty]}`}</em>
              </label>
              <div>
                <small className="text-muted">{JSON.stringify(selected)}</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
