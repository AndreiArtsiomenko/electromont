import { Fragment } from 'react';
import PageHero from '../../ui/PageHero/PageHero';
import contactsHeroImage from '../../../assets/images/pricing-hero.webp';
import Container from '../../ui/Container/Container';
import styles from './Pricing.module.css';

const pricingCategories = [
  {
    id: 'grooving',
    title: 'Штробление/сверление',
    items: [
      { title: 'Устройство штробы до 20x20 мм в бетоне', price: 'от 10 руб/пог.м' },
      { title: 'Устройство штробы до 20x20 мм в пенобл./кирп.', price: 'от 10 руб/пог.м' },
      { title: 'Высверливание чаши под подрозетник в бетоне', price: 'от 14 руб/шт' },
      { title: 'Высверливание чаши под подрозетник в пенобл./кирп.', price: 'от 11 руб/шт' },
      { title: 'Сквозное сверление стен', price: 'от 5 руб/шт' },
    ],
  },
  {
    id: 'mounting',
    title: 'Установочные элементы',
    items: [
      { title: 'Установка подрозетника до 60 мм', price: 'от 5 руб/пог.м' },
      { title: 'Установка электрощита со штроблением', price: 'от 6 руб/модуль' },
      { title: 'Установка распределительной коробки накладной', price: 'от 10 руб/шт' },
      { title: 'Расключение кабелей в распред. коробке (гильза)', price: 'от 14 руб/шт' },
      { title: 'Расключение кабелей в подрозетнике (гильза/клемма)', price: 'от 14 руб/шт' },
    ],
  },
  {
    id: 'cabling',
    title: 'Прокладка кабеля',
    items: [
      { title: 'Прокладка кабеля (без гофры) в стене до 3x4 мм²', price: 'от 2 руб/пог.м' },
      { title: 'Прокладка кабеля (в гофре) в стене до 3x4 мм²', price: 'от 3 руб/пог.м' },
      { title: 'Прокладка кабеля без гофры по потолку до 3x4 мм²', price: 'от 3,3 руб/пог.м' },
      { title: 'Прокладка кабеля в гофре по потолку до 3x4 мм²', price: 'от 2,7 руб/пог.м' },
    ],
  },
  {
    id: 'installations',
    title: 'Установочные изделия',
    items: [
      { title: 'Сборка электрического щита', price: 'от 11 руб/модуль' },
      { title: 'Установка механизма конечного (выкл-ль, розетка 220в)', price: 'от 9 руб/шт' },
      { title: 'Установка информационной розетки (IN, TEL, TV)', price: 'от 13 руб/шт' },
      { title: 'Установка терморегулятора', price: 'от 18 руб/шт' },
    ],
  },
  {
    id: 'lighting',
    title: 'Осветительные элементы',
    items: [
      { title: 'Установка люстры (без сборки)', price: 'от 35 руб/шт' },
      { title: 'Сборка люстры', price: 'от 30 руб/шт' },
      { title: 'Монтаж точечного светильника в готовое отверстие', price: 'от 11,5 руб/шт' },
      { title: 'Монтаж светильника подвесного', price: 'от 36 руб/шт' },
      { title: 'Монтаж светильника накладного', price: 'от 32 руб/шт' },
      { title: 'Монтаж светодиодной ленты', price: 'от 6 руб/пог.м' },
      {
        title: 'Монтаж накладного алюминиевого профиля для светодиодной ленты',
        price: 'от 7 руб/пог.м',
      },
      { title: 'Монтаж блока питания для светодиодной ленты', price: 'от 13 руб/шт' },
      { title: 'Установка димера/контроллера для светодиодной ленты', price: 'от 17 руб/шт' },
    ],
  },
  {
    id: 'equipment',
    title: 'Техника и оборудование',
    items: [
      { title: 'Прямое подключение электроплиты/варочной панели', price: 'от 39 руб/шт' },
      { title: 'Прямое подключение духового шкафа', price: 'от 24,5 руб/шт' },
      { title: 'Подключение зашиты от протечек', price: 'от 53 руб/компл' },
      { title: 'Подключение проточного водонагревателя к сети', price: 'от 39,5 руб/шт' },
      { title: 'Подключение подсветки зеркала, шкафа и т.д.', price: 'от 13,5 руб/шт' },
      {
        title: 'Установка полотенцесушителя электрического с прямым подключением',
        price: 'от 36,5 руб/шт',
      },
      { title: 'Монтаж нагревательного кабеля для теплого пола', price: 'от 30 руб/кв.м' },
      { title: 'Укладка нагревательного мата для теплого пола', price: 'от 15 руб/кв.м' },
    ],
  },
];

export default function Pricing() {
  return (
    <div className={styles.page}>
      <PageHero
        title="Цены"
        description="Актуальный прайс на электромонтажные работы. Итоговая стоимость зависит от объёма, сложности и особенностей объекта."
        image={contactsHeroImage}
        imageAlt="Цены"
      />

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.priceTable}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Наименование работ</th>
                  <th scope="col">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {pricingCategories.map((category) => (
                  <Fragment key={category.id}>
                    <tr className={styles.categoryRow}>
                      <th colSpan={2} scope="rowgroup">
                        {category.title}
                      </th>
                    </tr>
                    {category.items.map((item) => (
                      <tr key={item.title}>
                        <td>{item.title}</td>
                        <td className={styles.priceCell}>{item.price}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.notice}>
            <h2>Как формируется итоговая цена</h2>
            <p>
              Стоимость зависит от объёма работ, состояния объекта, способа прокладки кабеля,
              количества точек и выбранных материалов. Перед началом работ согласуем смету и
              фиксируем понятный состав задач.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
