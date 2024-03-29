import { ChangeEvent, useState } from "react";
import Catalog from "../../Components/Catalog/Catalog.tsx";
import Select from "../../Components/UI/Select/Select.tsx";
import CatalogData from "../../mock/CardMock.ts";
import styles from "./App.module.scss";
import { CatalogSelectOptions } from "../../types/enums/CatalogSelectOptions.ts";
import { ICatalogItem } from "../../types/ICatalogItem.ts";

const App = () => {
  const [catalogData, setCatalogData] = useState<ICatalogItem[]>(CatalogData);

  const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.currentTarget.value) {
      case CatalogSelectOptions.newer:
        setCatalogData(CatalogData);
        break;
      case CatalogSelectOptions.cheaper:
        setCatalogData([...CatalogData].sort((a, b) => a.price - b.price));
        break;
      case CatalogSelectOptions.expansive:
        setCatalogData([...CatalogData].sort((a, b) => b.price - a.price));
        break;
      default:
        setCatalogData(CatalogData);
        break;
    }
  };

  return (
    <>
      <Select
        onChange={onChangeSelectHandler}
        className={styles["select__wrapper"]}
      >
        <option value={CatalogSelectOptions.newer}>
          Порядок: сперва новые
        </option>
        <option value={CatalogSelectOptions.cheaper}>
          Порядок: сперва дешевле
        </option>
        <option value={CatalogSelectOptions.expansive}>
          Порядок: сперва дороже
        </option>
      </Select>
      <Catalog CatalogData={catalogData} />
    </>
  );
};

export default App;
