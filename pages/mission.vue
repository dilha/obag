<template>
    <div>
        <app-intro bg-img="assets/images/intro/history-intro.jpg"> 
          <h3 class="intro__title">
              Социальная миссия O bag
          </h3>
        </app-intro>
        <div class="mission">
            <div class="container">
                <div class="mission__content">
                    <h3 class="mission__title page__title">
                        Социальная миссия
                    </h3>
                    <p class="mission__text">
                        В 2017 году компания начала экологичную инициативу “CLOSE THE CIRCLE”, которая заключается в сборе, переработке и правильной утилизации корпусов O bag в XL Extralight Material®. Таким образом, компания еще раз подтверждает свою заботу об окружающей среде.
                    </p>
                    <p class="mission__text">
                        Инициатива “CLOSE THE CIRCLE” является частью более масштабной программы устойчивого развития, начатой O bag в 2018 году. В настоящее время проект действует в итальянских магазинах O bag, а долгосрочная цель заключается в распространении инициативы во всех странах, где представлен бренд.
                    </p>
                </div>
                <div class="mission__content">
                    <h3 class="mission__title page__title">
                        Fur free    
                    </h3>
                    <p class="mission__text">
                        Начиная с коллекции FW 2016-17, O bag продвигает не только инновационную, но и экологичную моду, полностью исключив из своих коллекций мех животных. Это важное решение привело к отказу от натурального меха в пользу высококачественного искусственного меха. В сотрудничестве с LAV (Лига Анти-Вивисекции) компания подписалась на программу Fur Free Retailer, разработанную Fur Free Alliance, международной коалицией из более чем 40 организаций, работающих над тем, чтобы остановить разведение животных для меха. Для получения дополнительной информации о программе Fur Free Retailer посетите www.furfreeretailer.com 
                    </p>
                    <img class="mission__img" src="@/assets/images/mission/mission-1.png" alt="">
                </div>
                <div class="mission__content">
                    <h3 class="mission__title page__title">
                        Экоупаковка для обуви  
                    </h3>
                    <p class="mission__text">
                        В 2019 году компания O bag сделала еще один шаг в своем стремлении стать eco-friendly company, разработав «зеленую» упаковку для O shoes и O slippers. Новая сумка содержит 60% GREEN PE, что в конечном итоге снижает выбросы вредных парниковых газов. Для производства упаковки не используется сырая нефть, которая была заменена на сахарный тростник и на 100% подлежит вторичной переработке.
                    </p>
                    <img class="mission__img" src="@/assets/images/mission/mission-2.jpg" alt="">
                </div>
                <div class="mission__content">
                    <h3 class="mission__title page__title">
                        Pink is good.
                        Пришло время помочь!   
                    </h3>
                    <p class="mission__text">
                        Ежегодно, начиная с 2014 года, компания поддерживает проект Fondazione Umberto Veronesi «Pink is Good», который финансирует исследования по борьбе с раком молочной железы. Компания O bag создала и представила эксклюзивные продукты с деталями, которые символизируют проект, доходы от которого полностью передаются исследовательскому фонду Fondazione Umberto Veronesi.
                    </p>
                    <img class="mission__img" src="@/assets/images/mission/mission-3.jpg" alt="">
                </div>
                <div class="mission__content">
                    <h3 class="mission__title page__title">
                        Украинские инициативы
                    </h3>
                    <p class="mission__text">
                        Украинский офис компании O bag всецело разделяет и внедряет инициативы главного офиса Компании. Помимо этого, в рамках различных проектов, поддерживает такие фонды, как “Кото-Ярмарок” и “Таблеточки”. Мы разделяем стремление бизнеса быть причастными к социальным инициативам и открыты к предложениям, которые вы можете направлять нам на email marketing.obag@gmail.ua
                    </p>
                    <img class="mission__img" src="@/assets/images/mission/mission-4.png" alt="">
                </div>
            </div>
        </div>
        <app-news />
    </div>
</template>

<script>
import AppIntro from "~/components/intro/AppIntro.vue";
import AppNews from "~/components/news/AppNews.vue";


export default {
  name: 'MissionPage',
  components: {
    AppIntro,
    AppNews,
  },
}
</script>
