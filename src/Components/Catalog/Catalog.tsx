import styles from "./Catalog.module.scss";
import CatalogCard from "../CatalogCard/CatalogCard";
import { ICatalogItem } from "../../types/ICatalogItem";

interface ICatalog {
  CatalogData: ICatalogItem[];
}

const Catalog = ({ CatalogData }: ICatalog) => {
  return (
    <div className={styles.catalog}>
      {CatalogData.map((catalogItem) => (
        <CatalogCard key={catalogItem.id} {...catalogItem} />
      ))}
    </div>
  );
};

export default Catalog;
