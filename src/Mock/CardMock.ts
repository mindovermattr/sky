import { ICatalogItem } from "../types/ICatalogItem";
import TATRAN from "../assets/images/CatalogCardsImages/catalog-image-TATRAN.webp";
import LUNA from "../assets/images/CatalogCardsImages/catalog-image-LUNA.webp";
import MENU from "../assets/images/CatalogCardsImages/catalog-image-MENU.webp";
import NASTAN from "../assets/images/CatalogCardsImages/catalog-image-NASTAN.webp";
import ASKETA from "../assets/images/CatalogCardsImages/catalog-image-ASKETA.webp";
import VILORA from "../assets/images/CatalogCardsImages/catalog-image-VILORA.webp";

const mockData: ICatalogItem[] = [
  {
    id: 1,
    title: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    image: TATRAN,
    quantity: 0,
  },
  {
    id: 2,
    title: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    price: 21000,
    image: VILORA,
    quantity: 0,
  },
  {
    id: 3,
    title: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
    image: MENU,
    quantity: 0,
  },
  {
    id: 4,
    title: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
    image: ASKETA,
    quantity: 0,
  },
  {
    id: 5,
    title: "Кресло LUNA",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
    image: LUNA,
    quantity: 0,
  },
  {
    id: 6,
    title: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки",
    price: 80000,
    image: NASTAN,
    quantity: 0,
  },
];

export default mockData;
