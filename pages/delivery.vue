<template>
  <div>
    <app-intro-arrow>
      <h3 class="intro__title intro__title-arrow">Доставка и оплата</h3>
    </app-intro-arrow>
    <div class="delivery">
      <div class="container">
        <p class="delivery__text">
          Осуществить покупку в интернет-магазине obag.ua можно из любой точки
          Украины. Доступны несколько вариантов получения заказа:
        </p>
        <div class="delivery__block">
          <h3 class="delivery__title page__title">УПАКОВКА</h3>
          <p class="delivery__text">
            Теперь получать и дарить O bag стало еще удобнее и приятнее! Мы
            выпустили новые стильные экокоробки из крафт-картона. И уже
            отправляем заказы именно в них.
          </p>
          <p class="delivery__text">Наши коробки - четырех размеров:</p>
          <ul class="delivery__list">
            <li class="delivery__list-item">42 см х 34 см х 13 см</li>
            <li class="delivery__list-item">36 см х 30 см х 12 см</li>
            <li class="delivery__list-item">З4,5 см х 25 см х 7 см</li>
            <li class="delivery__list-item">25 см х 20,8 см х 8,3 см</li>
          </ul>
          <p class="delivery__text">
            Все они разработаны под различные форматы корпусов. Внутри каждой
            есть QR-код с инструкцией по уходу за изделием. И личное послание от
            руководительницы бренда O bag в Украине.
          </p>
          <p class="delivery__text">
            Теперь вы можете обратиться к Ксении с пожеланиями и обратной
            связью!
          </p>
          <div class="delivery__inner">
            <img
              class="delivery__img"
              src="@/assets/images/delivery/delivery-1.jpg"
              alt=""
            />
            <img
              class="delivery__img"
              src="@/assets/images/delivery/delivery-2.jpg"
              alt=""
            />
            <img
              class="delivery__img"
              src="@/assets/images/delivery/delivery-3.jpg"
              alt=""
            />
            <img
              class="delivery__img"
              src="@/assets/images/delivery/delivery-4.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="delivery__block">
          <h3 class="delivery__title page__title">
            ОТПРАВКА КОМПАНИЕЙ «НОВАЯ ПОЧТА»
          </h3>
          <p class="delivery__text">
            Доставка по Украине осуществляется компанией «Новая Почта» и
            занимает 1-3 дня. На время и стоимость доставки влияют удаленность
            населенного пункта от Киева и частично может влиять загруженность
            склада.
          </p>
          <p class="delivery__text">
            Оплата заказов, доставляемых в регионы, возможна двумя способами:
            банковской картой при помощи платежной системы wayforpay, а также
            при получении товара в отделении «Новая Почта» - услуга «Наложенный
            платеж».
          </p>
          <p class="delivery__text">
            Оплата за адресную доставку, а также оплата стоимости наложенного
            платежа, в случае доставки курьером компании «Новая Почта»,
            осуществляется по безналичному расчету.
          </p>
          <p class="delivery__text">
            При условии оформления заказа на товары, которые находятся в магазинах и требуют перемещения, доставка заказа может занять от 2 до 6 дней.
          </p>
          <p class="delivery__text">
            Стоимость доставки зависит от веса посылки, согласно тарифам перевозчика.
          </p>
          <p class="delivery__text">
            <span class="delivery__red">ВАЖНО!</span>
             Все расходы по доставке товара и денежных средств обратно оплачивает заказчик. Более детальную информацию об условиях доставки перевозчика «Новая Почта» Вы можете найти на официальном сайте компании.
          </p>
        </div>
        <div class="delivery__block">
          <h3 class="delivery__title page__title">
            ОПЛАТА ТОВАРА
          </h3>
          <p class="delivery__text">
            Оплатить заказ в интернет-магазине O bag можно двумя способами:
          </p>
          <h4 class="delivery__subtitle">
            1. Безналичный расчет
          </h4>
          <p class="delivery__text">
            Оплата без комиссии через платежную систему wayforpay картами Visa или MasterCard (услуга возможна при оформлении заказа через Корзину). Также, Вы можете запросить счет на оплату товара у менеджера интернет-магазина.
          </p>
          <p class="delivery__text">
            <span>ВАЖНО!</span>
            Убедитесь, что Ваша платежная карта открыта для платежей в Интернет. Любые данные, запрашиваемые на странице оплаты, являются конфиденциальными и не попадают в магазин или третьим лицам.
          </p>
          <h4 class="delivery__subtitle">
            2. Наложенный платеж
          </h4>
          <p class="delivery__text">
            Услуга «Наложенный платеж» предполагает оплату комиссии в размере 2% от суммы заказа за обратное перемещение денежных средств по платежной системе FORPOST («Новая Почта»).
          </p>
          <div class="delivery__phone">
            <p class="delivery__text">За дополнительной информацией обращайтесь по телефону: </p>
            <strong class="delivery__tel">
              +38 (044) 333 43 42
            </strong>
          </div>
        </div>
      </div>
    </div>
    <app-news />
  </div>
</template>

<script>
import AppIntroArrow from '~/components/intro/AppIntroArrow.vue'
import AppNews from '~/components/news/AppNews.vue'

export default {
  name: 'DeliveryPage',
  components: {
    AppIntroArrow,
    AppNews,
  },
}
</script>
