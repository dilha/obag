<template>
    <section class="account">
        <div class="container">
            <h3 class="page__title">
                Моя учетная запись
            </h3>
            <div class="account__inner">
                <ul class="account__sidebar">
                    <li>
                        <p class="account__title">
                            Мои заказы
                        </p>
                    </li>
                    <li>
                        <a class="account__link" href="#?">
                            Личный кабинет
                        </a>
                    </li>
                    <li>
                        <a class="account__link" href="#?">
                            История заказа
                        </a>
                    </li>
                    <li>
                        <a class="account__link" href="#?">
                            Бонусные баллы
                        </a>
                    </li>
                    <li>
                        <a class="account__link" href="#?">
                            Рассылка    
                        </a>
                    </li>
                </ul>
                <div class="account__info">
                    <div class="account__info-name">
                        <p class="account__title">
                            Имя Фамилия:
                        </p>
                        <p class="account__text">
                            Полина Полина
                        </p>
                    </div>
                    <div class="account__info-email">
                        <p class="account__title">
                            Email:
                        </p>
                        <p class="account__text">
                            info@a-lux.kz
                        </p>
                    </div>
                    <div class="account__info-phone">
                        <p class="account__title">
                            Телефон:
                        </p>
                        <p class="account__text">
                            +38(000)000-00-00
                        </p>
                    </div>
                    <div class="account__info-date">
                        <p class="account__title">
                            Дата рождения:
                        </p>
                        <p class="account__text">
                            27.05.1998
                        </p>
                    </div>
                    <div class="account__info-address">
                        <p class="account__title">
                            Адрес
                        </p>
                        <p class="account__text">
                            Шевченок 165Б, Алматы, Казахстан
                        </p>
                    </div>
                    <div class="account__info-link">
                        <a class="account__link" href="#?">
                            Редактировать данные
                        </a>
                        <a class="account__link" href="#?">
                            Изменить свой пароль
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AccountPage",
}
</script>