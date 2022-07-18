export default () => ({
  message: null,
  resultList: [],
  formDynamic: {},
  form: {
    location: {
      name: 'Казань',
      val: 'KAZAN'
    },
    objectFloor: false
  },
  dynamicMerged: [],
  dynamicOptions: [],
  dynamicOptionsParams: [
  ],
  defaultOptions:
    {
      alias: 'locations', // alias (id)
      name: 'Регион недвижимости', // отображаемое имя
      rules: 'required', // правило валидации
      default: false, // значение по умолчанию
      limit: 5, // лимит (для селекта)
      sort: 0, // порядок сортировки
      type: 'FeSelect' // тип компонента
    },
  locationOptions: [
    {
      title: 'Набережные Челны',
      alias: 'NABEREZHNYE-CHELNY',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Казань',
      alias: 'KAZAN',
      region_title: 'Республика Татарстан',
      rating: 3
    },
    {
      title: 'Иннополис',
      alias: 'INNOPOLIS',
      region_title: 'Республика Татарстан'
    },
    { title: 'Кукмор', alias: 'KUKMOR', region_title: 'Республика Татарстан' },
    {
      title: 'Нижнекамск',
      alias: 'NIZHNEKAMSK',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Альметьевск',
      alias: 'ALMETEVSK',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Зеленодольск',
      alias: 'ZELENODOLSK',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Бугульма',
      alias: 'BUGULMA',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Елабуга',
      alias: 'ELABUGA',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Лениногорск',
      alias: 'LENINOGORSK',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Чистополь',
      alias: 'CHISTOPOL',
      region_title: 'Республика Татарстан'
    },
    { title: 'Заинск', alias: 'ZAINSK', region_title: 'Республика Татарстан' },
    {
      title: 'Азнакаево',
      alias: 'AZNAKAEVO',
      region_title: 'Республика Татарстан'
    },
    { title: 'Нурлат', alias: 'NURLAT', region_title: 'Республика Татарстан' },
    { title: 'Бавлы', alias: 'BAVLY', region_title: 'Республика Татарстан' },
    {
      title: 'Менделеевск',
      alias: 'MENDELEEVSK',
      region_title: 'Республика Татарстан'
    },
    { title: 'Буинск', alias: 'BUINSK', region_title: 'Республика Татарстан' },
    { title: 'Агрыз', alias: 'AGRYZ', region_title: 'Республика Татарстан' },
    {
      title: 'Мензелинск',
      alias: 'MENZELINSK',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Мамадыш',
      alias: 'MAMADYSH',
      region_title: 'Республика Татарстан'
    },
    {
      title: 'Тетюши',
      alias: 'TETYUSHI',
      region_title: 'Республика Татарстан'
    },
    { title: 'Болгар', alias: 'BOLGAR', region_title: 'Республика Татарстан' },
    {
      title: 'Лаишево',
      alias: 'LAISHEVO',
      region_title: 'Республика Татарстан'
    },
    { title: 'Арск', alias: 'ARSK', region_title: 'Республика Татарстан' },
    {
      title: 'Красноярск',
      alias: 'KRASNOYARSK',
      region_title: 'Красноярский край'
    },
    { title: 'Норильск', alias: 'NORILSK', region_title: 'Красноярский край' },
    { title: 'Ачинск', alias: 'ACHINSK', region_title: 'Красноярский край' },
    {
      title: 'Железногорск',
      alias: 'ZHELEZNOGORSK--KRASNOYARSKIY-KRAY',
      region_title: 'Красноярский край'
    },
    { title: 'Канск', alias: 'KANSK', region_title: 'Красноярский край' },
    {
      title: 'Минусинск',
      alias: 'MINUSINSK',
      region_title: 'Красноярский край'
    },
    {
      title: 'Зеленогорск',
      alias: 'ZELENOGORSK--KRASNOYARSKIY-KRAY',
      region_title: 'Красноярский край'
    },
    {
      title: 'Лесосибирск',
      alias: 'LESOSIBIRSK',
      region_title: 'Красноярский край'
    },
    { title: 'Назарово', alias: 'NAZAROVO', region_title: 'Красноярский край' },
    {
      title: 'Шарыпово',
      alias: 'SHARYPOVO',
      region_title: 'Красноярский край'
    },
    {
      title: 'Сосновоборск',
      alias: 'SOSNOVOBORSK',
      region_title: 'Красноярский край'
    },
    {
      title: 'Дивногорск',
      alias: 'DIVNOGORSK',
      region_title: 'Красноярский край'
    },
    { title: 'Дудинка', alias: 'DUDINKA', region_title: 'Красноярский край' },
    { title: 'Боготол', alias: 'BOGOTOL', region_title: 'Красноярский край' },
    { title: 'Енисейск', alias: 'ENISEYSK', region_title: 'Красноярский край' },
    { title: 'Бородино', alias: 'BORODINO', region_title: 'Красноярский край' },
    { title: 'Иланский', alias: 'ILANSKIY', region_title: 'Красноярский край' },
    { title: 'Ужур', alias: 'UZHUR', region_title: 'Красноярский край' },
    { title: 'Кодинск', alias: 'KODINSK', region_title: 'Красноярский край' },
    { title: 'Уяр', alias: 'UYAR', region_title: 'Красноярский край' },
    {
      title: 'Заозерный',
      alias: 'ZAOZERNYY',
      region_title: 'Красноярский край'
    },
    { title: 'Игарка', alias: 'IGARKA', region_title: 'Красноярский край' },
    {
      title: 'Артёмовск',
      alias: 'ARTEMOVSK',
      region_title: 'Красноярский край'
    },
    {
      title: 'Екатеринбург',
      alias: 'EKATERINBURG',
      region_title: 'Свердловская область'
    },
    {
      title: 'Нижний Тагил',
      alias: 'NIZHNIY-TAGIL',
      region_title: 'Свердловская область'
    },
    {
      title: 'Каменск-Уральский',
      alias: 'KAMENSK-URALSKIY',
      region_title: 'Свердловская область'
    },
    {
      title: 'Первоуральск',
      alias: 'PERVOURALSK',
      region_title: 'Свердловская область'
    },
    { title: 'Серов', alias: 'SEROV', region_title: 'Свердловская область' },
    {
      title: 'Новоуральск',
      alias: 'NOVOURALSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Михайловск',
      alias: 'MIHAYLOVSK--NIZHNESERGINSKIY-RAYON',
      region_title: 'Свердловская область'
    },
    { title: 'Асбест', alias: 'ASBEST', region_title: 'Свердловская область' },
    {
      title: 'Полевской',
      alias: 'POLEVSKOY',
      region_title: 'Свердловская область'
    },
    {
      title: 'Заречный',
      alias: 'ZARECHNYY--SVERDLOVSKAYA-OBLAST',
      region_title: 'Свердловская область'
    },
    { title: 'Ревда', alias: 'REVDA', region_title: 'Свердловская область' },
    {
      title: 'Краснотурьинск',
      alias: 'KRASNOTURINSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Верхняя Пышма',
      alias: 'VERHNYAYA-PYSHMA',
      region_title: 'Свердловская область'
    },
    { title: 'Лесной', alias: 'LESNOY', region_title: 'Свердловская область' },
    {
      title: 'Верхняя Салда',
      alias: 'VERHNYAYA-SALDA',
      region_title: 'Свердловская область'
    },
    {
      title: 'Качканар',
      alias: 'KACHKANAR',
      region_title: 'Свердловская область'
    },
    {
      title: 'Красноуфимск',
      alias: 'KRASNOUFIMSK',
      region_title: 'Свердловская область'
    },
    { title: 'Ирбит', alias: 'IRBIT', region_title: 'Свердловская область' },
    {
      title: 'Алапаевск',
      alias: 'ALAPAEVSK',
      region_title: 'Свердловская область'
    },
    { title: 'Тавда', alias: 'TAVDA', region_title: 'Свердловская область' },
    {
      title: 'Сухой Лог',
      alias: 'SUHOY-LOG',
      region_title: 'Свердловская область'
    },
    { title: 'Кушва', alias: 'KUSHVA', region_title: 'Свердловская область' },
    {
      title: 'Артемовский',
      alias: 'ARTEMOVSKIY',
      region_title: 'Свердловская область'
    },
    {
      title: 'Богданович',
      alias: 'BOGDANOVICH',
      region_title: 'Свердловская область'
    },
    {
      title: 'Североуральск',
      alias: 'SEVEROURALSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Карпинск',
      alias: 'KARPINSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Камышлов',
      alias: 'KAMYSHLOV',
      region_title: 'Свердловская область'
    },
    {
      title: 'Невьянск',
      alias: 'NEVYANSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Красноуральск',
      alias: 'KRASNOURALSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Кировград',
      alias: 'KIROVGRAD',
      region_title: 'Свердловская область'
    },
    {
      title: 'Нижняя Тура',
      alias: 'NIZHNYAYA-TURA',
      region_title: 'Свердловская область'
    },
    { title: 'Сысерть', alias: 'SYSERT', region_title: 'Свердловская область' },
    {
      title: 'Среднеуральск',
      alias: 'SREDNEURALSK',
      region_title: 'Свердловская область'
    },
    { title: 'Талица', alias: 'TALICA', region_title: 'Свердловская область' },
    {
      title: 'Туринск',
      alias: 'TURINSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Нижняя Салда',
      alias: 'NIZHNYAYA-SALDA',
      region_title: 'Свердловская область'
    },
    { title: 'Ивдель', alias: 'IVDEL', region_title: 'Свердловская область' },
    {
      title: 'Дегтярск',
      alias: 'DEGTYARSK',
      region_title: 'Свердловская область'
    },
    { title: 'Арамиль', alias: 'ARAMIL', region_title: 'Свердловская область' },
    {
      title: 'Новая Ляля',
      alias: 'NOVAYA-LYALYA',
      region_title: 'Свердловская область'
    },
    {
      title: 'Верхний Тагил',
      alias: 'VERHNIY-TAGIL',
      region_title: 'Свердловская область'
    },
    {
      title: 'Нижние Серги',
      alias: 'NIZHNIE-SERGI',
      region_title: 'Свердловская область'
    },
    {
      title: 'Волчанск',
      alias: 'VOLCHANSK',
      region_title: 'Свердловская область'
    },
    {
      title: 'Верхняя Тура',
      alias: 'VERHNYAYA-TURA',
      region_title: 'Свердловская область'
    },
    {
      title: 'Верхотурье',
      alias: 'VERHOTURE',
      region_title: 'Свердловская область'
    },
    {
      title: 'Берёзовский',
      alias: 'BEREZOVSKIY--SVERDLOVSKAYA-OBLAST',
      region_title: 'Свердловская область'
    },
    { title: 'Реж', alias: 'REZH', region_title: 'Свердловская область' },
    { title: 'Калуга', alias: 'KALUGA', region_title: 'Калужская область' },
    {
      title: 'Киров',
      alias: 'KIROV--KIROVSKIY-RAYON',
      region_title: 'Калужская область'
    },
    { title: 'Обнинск', alias: 'OBNINSK', region_title: 'Калужская область' },
    {
      title: 'Людиново',
      alias: 'LYUDINOVO',
      region_title: 'Калужская область'
    },
    {
      title: 'Малоярославец',
      alias: 'MALOYAROSLAVEC',
      region_title: 'Калужская область'
    },
    {
      title: 'Балабаново',
      alias: 'BALABANOVO',
      region_title: 'Калужская область'
    },
    { title: 'Козельск', alias: 'KOZELSK', region_title: 'Калужская область' },
    { title: 'Кондрово', alias: 'KONDROVO', region_title: 'Калужская область' },
    {
      title: 'Сухиничи',
      alias: 'SUHINICHI',
      region_title: 'Калужская область'
    },
    {
      title: 'Сосенский',
      alias: 'SOSENSKIY',
      region_title: 'Калужская область'
    },
    { title: 'Боровск', alias: 'BOROVSK', region_title: 'Калужская область' },
    { title: 'Кременки', alias: 'KREMENKI', region_title: 'Калужская область' },
    { title: 'Ермолино', alias: 'ERMOLINO', region_title: 'Калужская область' },
    { title: 'Таруса', alias: 'TARUSA', region_title: 'Калужская область' },
    {
      title: 'Белоусово',
      alias: 'BELOUSOVO',
      region_title: 'Калужская область'
    },
    { title: 'Медынь', alias: 'MEDYN', region_title: 'Калужская область' },
    { title: 'Юхнов', alias: 'YUHNOV', region_title: 'Калужская область' },
    { title: 'Жиздра', alias: 'ZHIZDRA', region_title: 'Калужская область' },
    {
      title: 'Спас-Деменск',
      alias: 'SPAS-DEMENSK',
      region_title: 'Калужская область'
    },
    { title: 'Мосальск', alias: 'MOSALSK', region_title: 'Калужская область' },
    {
      title: 'Мещовск',
      alias: 'MESHCHOVSK',
      region_title: 'Калужская область'
    },
    { title: 'Жуков', alias: 'ZHUKOV', region_title: 'Калужская область' },
    { title: 'Сунжа', alias: 'SUNZHA', region_title: 'Республика Ингушетия' },
    { title: 'Назрань', alias: 'NAZRAN', region_title: 'Республика Ингушетия' },
    {
      title: 'Карабулак',
      alias: 'KARABULAK',
      region_title: 'Республика Ингушетия'
    },
    {
      title: 'Малгобек',
      alias: 'MALGOBEK',
      region_title: 'Республика Ингушетия'
    },
    { title: 'Магас', alias: 'MAGAS', region_title: 'Республика Ингушетия' },
    {
      title: 'Кудрово',
      alias: 'KUDROVO',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Гатчина',
      alias: 'GATCHINA',
      region_title: 'Ленинградская область'
    },
    { title: 'Выборг', alias: 'VYBORG', region_title: 'Ленинградская область' },
    {
      title: 'Сосновый Бор',
      alias: 'SOSNOVYY-BOR',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Всеволожск',
      alias: 'VSEVOLOZHSK',
      region_title: 'Ленинградская область'
    },
    { title: 'Тихвин', alias: 'TIHVIN', region_title: 'Ленинградская область' },
    {
      title: 'Кириши',
      alias: 'KIRISHI',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Кингисепп',
      alias: 'KINGISEPP',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Сертолово',
      alias: 'SERTOLOVO--VSEVOLOZHSKIY-RAYON',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Сертолово',
      alias: 'SERTOLOVO--LENINGRADSKAYA-OBLAST',
      region_title: 'Ленинградская область'
    },
    { title: 'Волхов', alias: 'VOLHOV', region_title: 'Ленинградская область' },
    { title: 'Тосно', alias: 'TOSNO', region_title: 'Ленинградская область' },
    { title: 'Сланцы', alias: 'SLANCY', region_title: 'Ленинградская область' },
    {
      title: 'Кировск',
      alias: 'KIROVSK--KIROVSKIY-RAYON--LENINGRADSKAYA-OBLAST',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Отрадное',
      alias: 'OTRADNOE',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Пикалево',
      alias: 'PIKALEVO',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Лодейное Поле',
      alias: 'LODEYNOE-POLE',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Коммунар',
      alias: 'KOMMUNAR',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Никольское',
      alias: 'NIKOLSKOE',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Приозерск',
      alias: 'PRIOZERSK',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Подпорожье',
      alias: 'PODPOROZHE',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Бокситогорск',
      alias: 'BOKSITOGORSK',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Светогорск',
      alias: 'SVETOGORSK',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Сясьстрой',
      alias: 'SYASSTROY',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Шлиссельбург',
      alias: 'SHLISSELBURG',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Волосово',
      alias: 'VOLOSOVO',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Ивангород',
      alias: 'IVANGOROD',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Новая Ладога',
      alias: 'NOVAYA-LADOGA',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Каменногорск',
      alias: 'KAMENNOGORSK',
      region_title: 'Ленинградская область'
    },
    { title: 'Любань', alias: 'LYUBAN', region_title: 'Ленинградская область' },
    { title: 'Высоцк', alias: 'VYSOCK', region_title: 'Ленинградская область' },
    { title: 'Луга', alias: 'LUGA', region_title: 'Ленинградская область' },
    {
      title: 'Приморск',
      alias: 'PRIMORSK--VYBORGSKIY-RAYON',
      region_title: 'Ленинградская область'
    },
    {
      title: 'Новосибирск',
      alias: 'NOVOSIBIRSK',
      region_title: 'Новосибирская область'
    },
    { title: 'Бердск', alias: 'BERDSK', region_title: 'Новосибирская область' },
    {
      title: 'Искитим',
      alias: 'ISKITIM',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Барабинск',
      alias: 'BARABINSK',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Карасук',
      alias: 'KARASUK',
      region_title: 'Новосибирская область'
    },
    { title: 'Обь', alias: 'OB', region_title: 'Новосибирская область' },
    {
      title: 'Татарск',
      alias: 'TATARSK',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Тогучин',
      alias: 'TOGUCHIN',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Черепаново',
      alias: 'CHEREPANOVO',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Болотное',
      alias: 'BOLOTNOE',
      region_title: 'Новосибирская область'
    },
    { title: 'Купино', alias: 'KUPINO', region_title: 'Новосибирская область' },
    { title: 'Чулым', alias: 'CHULYM', region_title: 'Новосибирская область' },
    { title: 'Каргат', alias: 'KARGAT', region_title: 'Новосибирская область' },
    {
      title: 'Куйбышев',
      alias: 'KUYBYSHEV',
      region_title: 'Новосибирская область'
    },
    {
      title: 'Нижний Новгород',
      alias: 'NIZHNIY-NOVGOROD',
      region_title: 'Нижегородская область',
      rating: 4
    },
    {
      title: 'Дзержинск',
      alias: 'DZERZHINSK',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Арзамас',
      alias: 'ARZAMAS',
      region_title: 'Нижегородская область'
    },
    { title: 'Саров', alias: 'SAROV', region_title: 'Нижегородская область' },
    { title: 'Кстово', alias: 'KSTOVO', region_title: 'Нижегородская область' },
    {
      title: 'Павлово',
      alias: 'PAVLOVO',
      region_title: 'Нижегородская область'
    },
    { title: 'Выкса', alias: 'VYKSA', region_title: 'Нижегородская область' },
    {
      title: 'Балахна',
      alias: 'BALAHNA',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Заволжье',
      alias: 'ZAVOLZHE',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Кулебаки',
      alias: 'KULEBAKI',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Городец',
      alias: 'GORODEC',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Богородск',
      alias: 'BOGORODSK',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Семенов',
      alias: 'SEMENOV',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Лысково',
      alias: 'LYSKOVO',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Сергач',
      alias: 'SERGACH',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Шахунья',
      alias: 'SHAHUNYA',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Навашино',
      alias: 'NAVASHINO',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Лукоянов',
      alias: 'LUKOYANOV',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Первомайск',
      alias: 'PERVOMAYSK',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Чкаловск',
      alias: 'CHKALOVSK',
      region_title: 'Нижегородская область'
    },
    { title: 'Урень', alias: 'UREN', region_title: 'Нижегородская область' },
    { title: 'Ворсма', alias: 'VORSMA', region_title: 'Нижегородская область' },
    {
      title: 'Володарск',
      alias: 'VOLODARSK',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Перевоз',
      alias: 'PEREVOZ',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Ветлуга',
      alias: 'VETLUGA',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Княгинино',
      alias: 'KNYAGININO',
      region_title: 'Нижегородская область'
    },
    {
      title: 'Горбатов',
      alias: 'GORBATOV',
      region_title: 'Нижегородская область'
    },
    { title: 'Бор', alias: 'BOR', region_title: 'Нижегородская область' },
    {
      title: 'Самара',
      alias: 'SAMARA',
      region_title: 'Самарская область',
      rating: 5
    },
    { title: 'Тольятти', alias: 'TOLYATTI', region_title: 'Самарская область' },
    { title: 'Сызрань', alias: 'SYZRAN', region_title: 'Самарская область' },
    {
      title: 'Новокуйбышевск',
      alias: 'NOVOKUYBYSHEVSK',
      region_title: 'Самарская область'
    },
    {
      title: 'Чапаевск',
      alias: 'CHAPAEVSK',
      region_title: 'Самарская область'
    },
    {
      title: 'Жигулевск',
      alias: 'ZHIGULEVSK',
      region_title: 'Самарская область'
    },
    { title: 'Отрадный', alias: 'OTRADNYY', region_title: 'Самарская область' },
    { title: 'Кинель', alias: 'KINEL', region_title: 'Самарская область' },
    {
      title: 'Похвистнево',
      alias: 'POHVISTNEVO',
      region_title: 'Самарская область'
    },
    {
      title: 'Нефтегорск',
      alias: 'NEFTEGORSK',
      region_title: 'Самарская область'
    },
    {
      title: 'Октябрьск',
      alias: 'OKTYABRSK',
      region_title: 'Самарская область'
    },
    { title: 'Омск', alias: 'OMSK', region_title: 'Омская область' },
    { title: 'Исилькуль', alias: 'ISILKUL', region_title: 'Омская область' },
    { title: 'Калачинск', alias: 'KALACHINSK', region_title: 'Омская область' },
    {
      title: 'Называевск',
      alias: 'NAZYVAEVSK',
      region_title: 'Омская область'
    },
    { title: 'Тюкалинск', alias: 'TYUKALINSK', region_title: 'Омская область' },
    { title: 'Тара', alias: 'TARA', region_title: 'Омская область' },
    {
      title: 'Челябинск',
      alias: 'CHELYABINSK',
      region_title: 'Челябинская область'
    },
    {
      title: 'Магнитогорск',
      alias: 'MAGNITOGORSK',
      region_title: 'Челябинская область'
    },
    {
      title: 'Златоуст',
      alias: 'ZLATOUST',
      region_title: 'Челябинская область'
    },
    { title: 'Миасс', alias: 'MIASS', region_title: 'Челябинская область' },
    { title: 'Копейск', alias: 'KOPEYSK', region_title: 'Челябинская область' },
    {
      title: 'Снежинск',
      alias: 'SNEZHINSK',
      region_title: 'Челябинская область'
    },
    { title: 'Сатка', alias: 'SATKA', region_title: 'Челябинская область' },
    {
      title: 'Чебаркуль',
      alias: 'CHEBARKUL',
      region_title: 'Челябинская область'
    },
    { title: 'Коркино', alias: 'KORKINO', region_title: 'Челябинская область' },
    { title: 'Кыштым', alias: 'KYSHTYM', region_title: 'Челябинская область' },
    {
      title: 'Южноуральск',
      alias: 'YUZHNOURALSK',
      region_title: 'Челябинская область'
    },
    { title: 'Аша', alias: 'ASHA', region_title: 'Челябинская область' },
    {
      title: 'Верхний Уфалей',
      alias: 'VERHNIY-UFALEY',
      region_title: 'Челябинская область'
    },
    {
      title: 'Еманжелинск',
      alias: 'EMANZHELINSK',
      region_title: 'Челябинская область'
    },
    { title: 'Карталы', alias: 'KARTALY', region_title: 'Челябинская область' },
    {
      title: 'Усть-Катав',
      alias: 'UST-KATAV',
      region_title: 'Челябинская область'
    },
    { title: 'Бакал', alias: 'BAKAL', region_title: 'Челябинская область' },
    { title: 'Куса', alias: 'KUSA', region_title: 'Челябинская область' },
    {
      title: 'Катав-Ивановск',
      alias: 'KATAV-IVANOVSK',
      region_title: 'Челябинская область'
    },
    { title: 'Пласт', alias: 'PLAST', region_title: 'Челябинская область' },
    { title: 'Касли', alias: 'KASLI', region_title: 'Челябинская область' },
    {
      title: 'Карабаш',
      alias: 'KARABASH',
      region_title: 'Челябинская область'
    },
    {
      title: 'Юрюзань',
      alias: 'YURYUZAN',
      region_title: 'Челябинская область'
    },
    {
      title: 'Нязепетровск',
      alias: 'NYAZEPETROVSK',
      region_title: 'Челябинская область'
    },
    { title: 'Миньяр', alias: 'MINYAR', region_title: 'Челябинская область' },
    {
      title: 'Верхнеуральск',
      alias: 'VERHNEURALSK',
      region_title: 'Челябинская область'
    },
    {
      title: 'Озёрск',
      alias: 'OZERSK--CHELYABINSKAYA-OBLAST',
      region_title: 'Челябинская область'
    },
    {
      title: 'Трёхгорный',
      alias: 'TREHGORNYY',
      region_title: 'Челябинская область'
    },
    {
      title: 'Троицк',
      alias: 'TROICK--CHELYABINSKAYA-OBLAST',
      region_title: 'Челябинская область'
    },
    { title: 'Сим', alias: 'SIM', region_title: 'Челябинская область' },
    {
      title: 'Ростов-на-Дону',
      alias: 'ROSTOV-NA-DONU',
      region_title: 'Ростовская область'
    },
    {
      title: 'Таганрог',
      alias: 'TAGANROG',
      region_title: 'Ростовская область'
    },
    { title: 'Шахты', alias: 'SHAHTY', region_title: 'Ростовская область' },
    {
      title: 'Волгодонск',
      alias: 'VOLGODONSK',
      region_title: 'Ростовская область'
    },
    {
      title: 'Новочеркасск',
      alias: 'NOVOCHERKASSK',
      region_title: 'Ростовская область'
    },
    { title: 'Батайск', alias: 'BATAYSK', region_title: 'Ростовская область' },
    {
      title: 'Новошахтинск',
      alias: 'NOVOSHAHTINSK',
      region_title: 'Ростовская область'
    },
    {
      title: 'Каменск-Шахтинский',
      alias: 'KAMENSK-SHAHTINSKIY',
      region_title: 'Ростовская область'
    },
    { title: 'Гуково', alias: 'GUKOVO', region_title: 'Ростовская область' },
    { title: 'Сальск', alias: 'SALSK', region_title: 'Ростовская область' },
    { title: 'Донецк', alias: 'DONECK', region_title: 'Ростовская область' },
    {
      title: 'Белая Калитва',
      alias: 'BELAYA-KALITVA',
      region_title: 'Ростовская область'
    },
    { title: 'Аксай', alias: 'AKSAY', region_title: 'Ростовская область' },
    {
      title: 'Красный Сулин',
      alias: 'KRASNYY-SULIN',
      region_title: 'Ростовская область'
    },
    {
      title: 'Миллерово',
      alias: 'MILLEROVO',
      region_title: 'Ростовская область'
    },
    {
      title: 'Морозовск',
      alias: 'MOROZOVSK',
      region_title: 'Ростовская область'
    },
    {
      title: 'Зерноград',
      alias: 'ZERNOGRAD',
      region_title: 'Ростовская область'
    },
    {
      title: 'Семикаракорск',
      alias: 'SEMIKARAKORSK',
      region_title: 'Ростовская область'
    },
    { title: 'Зверево', alias: 'ZVEREVO', region_title: 'Ростовская область' },
    {
      title: 'Пролетарск',
      alias: 'PROLETARSK',
      region_title: 'Ростовская область'
    },
    {
      title: 'Константиновск',
      alias: 'KONSTANTINOVSK',
      region_title: 'Ростовская область'
    },
    {
      title: 'Цимлянск',
      alias: 'CIMLYANSK',
      region_title: 'Ростовская область'
    },
    { title: 'Азов', alias: 'AZOV', region_title: 'Ростовская область' },
    { title: 'Уфа', alias: 'UFA', region_title: 'Республика Башкортостан' },
    {
      title: 'Стерлитамак',
      alias: 'STERLITAMAK',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Благовещенск',
      alias: 'BLAGOVESHCHENSK--BLAGOVESHCHENSKIY-RAYON',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Салават',
      alias: 'SALAVAT',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Нефтекамск',
      alias: 'NEFTEKAMSK',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Октябрьский',
      alias: 'OKTYABRSKIY',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Белорецк',
      alias: 'BELORECK',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Туймазы',
      alias: 'TUYMAZY',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Ишимбай',
      alias: 'ISHIMBAY',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Кумертау',
      alias: 'KUMERTAU',
      region_title: 'Республика Башкортостан'
    },
    { title: 'Сибай', alias: 'SIBAY', region_title: 'Республика Башкортостан' },
    {
      title: 'Мелеуз',
      alias: 'MELEUZ',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Белебей',
      alias: 'BELEBEY',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Учалы',
      alias: 'UCHALY',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Дюртюли',
      alias: 'DYURTYULI',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Янаул',
      alias: 'YANAUL',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Давлеканово',
      alias: 'DAVLEKANOVO',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Баймак',
      alias: 'BAYMAK',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Межгорье',
      alias: 'MEZHGORE',
      region_title: 'Республика Башкортостан'
    },
    {
      title: 'Агидель',
      alias: 'AGIDEL',
      region_title: 'Республика Башкортостан'
    },
    { title: 'Бирск', alias: 'BIRSK', region_title: 'Республика Башкортостан' },
    {
      title: 'Волгоград',
      alias: 'VOLGOGRAD',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Волжский',
      alias: 'VOLZHSKIY',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Камышин',
      alias: 'KAMYSHIN',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Михайловка',
      alias: 'MIHAYLOVKA',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Урюпинск',
      alias: 'URYUPINSK',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Фролово',
      alias: 'FROLOVO',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Калач-на-Дону',
      alias: 'KALACH-NA-DONU',
      region_title: 'Волгоградская область'
    },
    { title: 'Котово', alias: 'KOTOVO', region_title: 'Волгоградская область' },
    {
      title: 'Суровикино',
      alias: 'SUROVIKINO',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Котельниково',
      alias: 'KOTELNIKOVO',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Новоаннинский',
      alias: 'NOVOANNINSKIY',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Жирновск',
      alias: 'ZHIRNOVSK',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Краснослободск',
      alias: 'KRASNOSLOBODSK--SREDNEAHTUBINSKIY-RAYON',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Палласовка',
      alias: 'PALLASOVKA',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Дубовка',
      alias: 'DUBOVKA',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Петров Вал',
      alias: 'PETROV-VAL',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Серафимович',
      alias: 'SERAFIMOVICH',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Ленинск',
      alias: 'LENINSK',
      region_title: 'Волгоградская область'
    },
    {
      title: 'Николаевск',
      alias: 'NIKOLAEVSK',
      region_title: 'Волгоградская область'
    },
    { title: 'Пермь', alias: 'PERM', region_title: 'Пермский край' },
    { title: 'Березники', alias: 'BEREZNIKI', region_title: 'Пермский край' },
    { title: 'Соликамск', alias: 'SOLIKAMSK', region_title: 'Пермский край' },
    {
      title: 'Чайковский',
      alias: 'CHAYKOVSKIY',
      region_title: 'Пермский край'
    },
    { title: 'Кунгур', alias: 'KUNGUR', region_title: 'Пермский край' },
    { title: 'Лысьва', alias: 'LYSVA', region_title: 'Пермский край' },
    {
      title: 'Краснокамск',
      alias: 'KRASNOKAMSK',
      region_title: 'Пермский край'
    },
    { title: 'Чусовой', alias: 'CHUSOVOY', region_title: 'Пермский край' },
    { title: 'Добрянка', alias: 'DOBRYANKA', region_title: 'Пермский край' },
    { title: 'Чернушка', alias: 'CHERNUSHKA', region_title: 'Пермский край' },
    { title: 'Кудымкар', alias: 'KUDYMKAR', region_title: 'Пермский край' },
    { title: 'Губаха', alias: 'GUBAHA', region_title: 'Пермский край' },
    {
      title: 'Верещагино',
      alias: 'VERESHCHAGINO',
      region_title: 'Пермский край'
    },
    { title: 'Кизел', alias: 'KIZEL', region_title: 'Пермский край' },
    { title: 'Нытва', alias: 'NYTVA', region_title: 'Пермский край' },
    {
      title: 'Красновишерск',
      alias: 'KRASNOVISHERSK',
      region_title: 'Пермский край'
    },
    {
      title: 'Горнозаводск',
      alias: 'GORNOZAVODSK',
      region_title: 'Пермский край'
    },
    {
      title: 'Гремячинск',
      alias: 'GREMYACHINSK',
      region_title: 'Пермский край'
    },
    { title: 'Оханск', alias: 'OHANSK', region_title: 'Пермский край' },
    { title: 'Чердынь', alias: 'CHERDYN', region_title: 'Пермский край' },
    { title: 'Чермоз', alias: 'CHERMOZ', region_title: 'Пермский край' },
    { title: 'Оса', alias: 'OSA', region_title: 'Пермский край' },
    {
      title: 'Александровск',
      alias: 'ALEKSANDROVSK',
      region_title: 'Пермский край'
    },
    { title: 'Очер', alias: 'OCHER', region_title: 'Пермский край' },
    { title: 'Усолье', alias: 'USOLE', region_title: 'Пермский край' },
    { title: 'Саратов', alias: 'SARATOV', region_title: 'Саратовская область' },
    { title: 'Энгельс', alias: 'ENGELS', region_title: 'Саратовская область' },
    {
      title: 'Балаково',
      alias: 'BALAKOVO',
      region_title: 'Саратовская область'
    },
    {
      title: 'Балашов',
      alias: 'BALASHOV',
      region_title: 'Саратовская область'
    },
    { title: 'Вольск', alias: 'VOLSK', region_title: 'Саратовская область' },
    {
      title: 'Пугачев',
      alias: 'PUGACHEV',
      region_title: 'Саратовская область'
    },
    {
      title: 'Ртищево',
      alias: 'RTISHCHEVO',
      region_title: 'Саратовская область'
    },
    { title: 'Маркс', alias: 'MARKS', region_title: 'Саратовская область' },
    {
      title: 'Петровск',
      alias: 'PETROVSK',
      region_title: 'Саратовская область'
    },
    { title: 'Аткарск', alias: 'ATKARSK', region_title: 'Саратовская область' },
    { title: 'Ершов', alias: 'ERSHOV', region_title: 'Саратовская область' },
    {
      title: 'Новоузенск',
      alias: 'NOVOUZENSK',
      region_title: 'Саратовская область'
    },
    {
      title: 'Калининск',
      alias: 'KALININSK',
      region_title: 'Саратовская область'
    },
    {
      title: 'Красный Кут',
      alias: 'KRASNYY-KUT',
      region_title: 'Саратовская область'
    },
    {
      title: 'Хвалынск',
      alias: 'HVALYNSK',
      region_title: 'Саратовская область'
    },
    { title: 'Аркадак', alias: 'ARKADAK', region_title: 'Саратовская область' },
    { title: 'Шиханы', alias: 'SHIHANY', region_title: 'Саратовская область' },
    {
      title: 'Красноармейск',
      alias: 'KRASNOARMEYSK--SARATOVSKAYA-OBLAST',
      region_title: 'Саратовская область'
    },
    {
      title: 'Краснодар',
      alias: 'KRASNODAR',
      region_title: 'Краснодарский край'
    },
    { title: 'Сочи', alias: 'SOCHI', region_title: 'Краснодарский край' },
    {
      title: 'Новороссийск',
      alias: 'NOVOROSSIYSK',
      region_title: 'Краснодарский край'
    },
    { title: 'Армавир', alias: 'ARMAVIR', region_title: 'Краснодарский край' },
    {
      title: 'Кропоткин',
      alias: 'KROPOTKIN',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Славянск-на-Кубани',
      alias: 'SLAVYANSK-NA-KUBANI',
      region_title: 'Краснодарский край'
    },
    { title: 'Туапсе', alias: 'TUAPSE', region_title: 'Краснодарский край' },
    { title: 'Лабинск', alias: 'LABINSK', region_title: 'Краснодарский край' },
    {
      title: 'Тихорецк',
      alias: 'TIHORECK',
      region_title: 'Краснодарский край'
    },
    { title: 'Крымск', alias: 'KRYMSK', region_title: 'Краснодарский край' },
    {
      title: 'Геленджик',
      alias: 'GELENDZHIK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Тимашевск',
      alias: 'TIMASHEVSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Белореченск',
      alias: 'BELORECHENSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Курганинск',
      alias: 'KURGANINSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Усть-Лабинск',
      alias: 'UST-LABINSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Кореновск',
      alias: 'KORENOVSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Апшеронск',
      alias: 'APSHERONSK',
      region_title: 'Краснодарский край'
    },
    { title: 'Темрюк', alias: 'TEMRYUK', region_title: 'Краснодарский край' },
    {
      title: 'Гулькевичи',
      alias: 'GULKEVICHI',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Новокубанск',
      alias: 'NOVOKUBANSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Приморско-Ахтарск',
      alias: 'PRIMORSKO-AHTARSK',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Горячий Ключ',
      alias: 'GORYACHIY-KLYUCH',
      region_title: 'Краснодарский край'
    },
    {
      title: 'Хадыженск',
      alias: 'HADYZHENSK',
      region_title: 'Краснодарский край'
    },
    { title: 'Ейск', alias: 'EYSK', region_title: 'Краснодарский край' },
    { title: 'Анапа', alias: 'ANAPA', region_title: 'Краснодарский край' },
    { title: 'Абинск', alias: 'ABINSK', region_title: 'Краснодарский край' },
    { title: 'Барнаул', alias: 'BARNAUL', region_title: 'Алтайский край' },
    { title: 'Бийск', alias: 'BIYSK', region_title: 'Алтайский край' },
    { title: 'Рубцовск', alias: 'RUBCOVSK', region_title: 'Алтайский край' },
    {
      title: 'Новоалтайск',
      alias: 'NOVOALTAYSK',
      region_title: 'Алтайский край'
    },
    { title: 'Заринск', alias: 'ZARINSK', region_title: 'Алтайский край' },
    {
      title: 'Камень-на-Оби',
      alias: 'KAMEN-NA-OBI',
      region_title: 'Алтайский край'
    },
    { title: 'Славгород', alias: 'SLAVGOROD', region_title: 'Алтайский край' },
    { title: 'Алейск', alias: 'ALEYSK', region_title: 'Алтайский край' },
    { title: 'Яровое', alias: 'YAROVOE', region_title: 'Алтайский край' },
    {
      title: 'Белокуриха',
      alias: 'BELOKURIHA',
      region_title: 'Алтайский край'
    },
    { title: 'Горняк', alias: 'GORNYAK', region_title: 'Алтайский край' },
    {
      title: 'Змеиногорск',
      alias: 'ZMEINOGORSK',
      region_title: 'Алтайский край'
    },
    {
      title: 'Ижевск',
      alias: 'IZHEVSK',
      region_title: 'Республика Удмуртская'
    },
    {
      title: 'Сарапул',
      alias: 'SARAPUL',
      region_title: 'Республика Удмуртская'
    },
    {
      title: 'Воткинск',
      alias: 'VOTKINSK',
      region_title: 'Республика Удмуртская'
    },
    { title: 'Глазов', alias: 'GLAZOV', region_title: 'Республика Удмуртская' },
    { title: 'Можга', alias: 'MOZHGA', region_title: 'Республика Удмуртская' },
    {
      title: 'Камбарка',
      alias: 'KAMBARKA',
      region_title: 'Республика Удмуртская'
    },
    {
      title: 'Ульяновск',
      alias: 'ULYANOVSK',
      region_title: 'Ульяновская область'
    },
    {
      title: 'Димитровград',
      alias: 'DIMITROVGRAD',
      region_title: 'Ульяновская область'
    },
    { title: 'Инза', alias: 'INZA', region_title: 'Ульяновская область' },
    { title: 'Барыш', alias: 'BARYSH', region_title: 'Ульяновская область' },
    {
      title: 'Новоульяновск',
      alias: 'NOVOULYANOVSK',
      region_title: 'Ульяновская область'
    },
    {
      title: 'Сенгилей',
      alias: 'SENGILEY',
      region_title: 'Ульяновская область'
    },
    {
      title: 'Владивосток',
      alias: 'VLADIVOSTOK',
      region_title: 'Приморский край'
    },
    { title: 'Находка', alias: 'NAHODKA', region_title: 'Приморский край' },
    { title: 'Уссурийск', alias: 'USSURIYSK', region_title: 'Приморский край' },
    { title: 'Арсеньев', alias: 'ARSENEV', region_title: 'Приморский край' },
    {
      title: 'Спасск-Дальний',
      alias: 'SPASSK-DALNIY',
      region_title: 'Приморский край'
    },
    {
      title: 'Большой Камень',
      alias: 'BOLSHOY-KAMEN',
      region_title: 'Приморский край'
    },
    {
      title: 'Партизанск',
      alias: 'PARTIZANSK',
      region_title: 'Приморский край'
    },
    {
      title: 'Дальнегорск',
      alias: 'DALNEGORSK',
      region_title: 'Приморский край'
    },
    {
      title: 'Лесозаводск',
      alias: 'LESOZAVODSK',
      region_title: 'Приморский край'
    },
    {
      title: 'Дальнереченск',
      alias: 'DALNERECHENSK',
      region_title: 'Приморский край'
    },
    {
      title: 'Фокино',
      alias: 'FOKINO--PRIMORSKIY-KRAY',
      region_title: 'Приморский край'
    },
    { title: 'Артём', alias: 'ARTEM', region_title: 'Приморский край' },
    {
      title: 'Ярославль',
      alias: 'YAROSLAVL',
      region_title: 'Ярославская область'
    },
    { title: 'Рыбинск', alias: 'RYBINSK', region_title: 'Ярославская область' },
    {
      title: 'Переславль-Залесский',
      alias: 'PERESLAVL-ZALESSKIY',
      region_title: 'Ярославская область'
    },
    { title: 'Тутаев', alias: 'TUTAEV', region_title: 'Ярославская область' },
    { title: 'Углич', alias: 'UGLICH', region_title: 'Ярославская область' },
    {
      title: 'Гаврилов-Ям',
      alias: 'GAVRILOV-YAM',
      region_title: 'Ярославская область'
    },
    { title: 'Данилов', alias: 'DANILOV', region_title: 'Ярославская область' },
    {
      title: 'Пошехонье',
      alias: 'POSHEHONE',
      region_title: 'Ярославская область'
    },
    { title: 'Мышкин', alias: 'MYSHKIN', region_title: 'Ярославская область' },
    { title: 'Любим', alias: 'LYUBIM', region_title: 'Ярославская область' },
    { title: 'Ростов', alias: 'ROSTOV', region_title: 'Ярославская область' },
    { title: 'Иркутск', alias: 'IRKUTSK', region_title: 'Иркутская область' },
    { title: 'Братск', alias: 'BRATSK', region_title: 'Иркутская область' },
    { title: 'Ангарск', alias: 'ANGARSK', region_title: 'Иркутская область' },
    {
      title: 'Усть-Илимск',
      alias: 'UST-ILIMSK',
      region_title: 'Иркутская область'
    },
    {
      title: 'Усолье-Сибирское',
      alias: 'USOLE-SIBIRSKOE',
      region_title: 'Иркутская область'
    },
    {
      title: 'Черемхово',
      alias: 'CHEREMHOVO',
      region_title: 'Иркутская область'
    },
    { title: 'Шелехов', alias: 'SHELEHOV', region_title: 'Иркутская область' },
    { title: 'Усть-Кут', alias: 'UST-KUT', region_title: 'Иркутская область' },
    { title: 'Тулун', alias: 'TULUN', region_title: 'Иркутская область' },
    { title: 'Саянск', alias: 'SAYANSK', region_title: 'Иркутская область' },
    {
      title: 'Нижнеудинск',
      alias: 'NIZHNEUDINSK',
      region_title: 'Иркутская область'
    },
    { title: 'Тайшет', alias: 'TAYSHET', region_title: 'Иркутская область' },
    { title: 'Зима', alias: 'ZIMA', region_title: 'Иркутская область' },
    {
      title: 'Железногорск-Илимский',
      alias: 'ZHELEZNOGORSK-ILIMSKIY',
      region_title: 'Иркутская область'
    },
    {
      title: 'Вихоревка',
      alias: 'VIHOREVKA',
      region_title: 'Иркутская область'
    },
    {
      title: 'Слюдянка',
      alias: 'SLYUDYANKA',
      region_title: 'Иркутская область'
    },
    { title: 'Бодайбо', alias: 'BODAYBO', region_title: 'Иркутская область' },
    { title: 'Свирск', alias: 'SVIRSK', region_title: 'Иркутская область' },
    { title: 'Киренск', alias: 'KIRENSK', region_title: 'Иркутская область' },
    {
      title: 'Бирюсинск',
      alias: 'BIRYUSINSK',
      region_title: 'Иркутская область'
    },
    { title: 'Алзамай', alias: 'ALZAMAY', region_title: 'Иркутская область' },
    {
      title: 'Байкальск',
      alias: 'BAYKALSK',
      region_title: 'Иркутская область'
    },
    { title: 'Тюмень', alias: 'TYUMEN', region_title: 'Тюменская область' },
    { title: 'Тобольск', alias: 'TOBOLSK', region_title: 'Тюменская область' },
    { title: 'Ишим', alias: 'ISHIM', region_title: 'Тюменская область' },
    {
      title: 'Ялуторовск',
      alias: 'YALUTOROVSK',
      region_title: 'Тюменская область'
    },
    {
      title: 'Заводоуковск',
      alias: 'ZAVODOUKOVSK',
      region_title: 'Тюменская область'
    },
    {
      title: 'Махачкала',
      alias: 'MAHACHKALA',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Хасавюрт',
      alias: 'HASAVYURT',
      region_title: 'Республика Дагестан'
    },
    { title: 'Дербент', alias: 'DERBENT', region_title: 'Республика Дагестан' },
    {
      title: 'Каспийск',
      alias: 'KASPIYSK',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Буйнакск',
      alias: 'BUYNAKSK',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Избербаш',
      alias: 'IZBERBASH',
      region_title: 'Республика Дагестан'
    },
    { title: 'Кизляр', alias: 'KIZLYAR', region_title: 'Республика Дагестан' },
    {
      title: 'Кизилюрт',
      alias: 'KIZILYURT',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Дагестанские Огни',
      alias: 'DAGESTANSKIE-OGNI',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Южно-Сухокумск',
      alias: 'YUZHNO-SUHOKUMSK',
      region_title: 'Республика Дагестан'
    },
    {
      title: 'Хабаровск',
      alias: 'HABAROVSK',
      region_title: 'Хабаровский край'
    },
    {
      title: 'Комсомольск-на-Амуре',
      alias: 'KOMSOMOLSK-NA-AMURE',
      region_title: 'Хабаровский край'
    },
    { title: 'Амурск', alias: 'AMURSK', region_title: 'Хабаровский край' },
    {
      title: 'Советская Гавань',
      alias: 'SOVETSKAYA-GAVAN',
      region_title: 'Хабаровский край'
    },
    {
      title: 'Николаевск-на-Амуре',
      alias: 'NIKOLAEVSK-NA-AMURE',
      region_title: 'Хабаровский край'
    },
    { title: 'Бикин', alias: 'BIKIN', region_title: 'Хабаровский край' },
    {
      title: 'Вяземский',
      alias: 'VYAZEMSKIY',
      region_title: 'Хабаровский край'
    },
    {
      title: 'Оренбург',
      alias: 'ORENBURG',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Новотроицк',
      alias: 'NOVOTROICK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Бузулук',
      alias: 'BUZULUK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Бугуруслан',
      alias: 'BUGURUSLAN',
      region_title: 'Оренбургская область'
    },
    { title: 'Гай', alias: 'GAY', region_title: 'Оренбургская область' },
    {
      title: 'Сорочинск',
      alias: 'SOROCHINSK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Медногорск',
      alias: 'MEDNOGORSK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Соль-Илецк',
      alias: 'SOL-ILECK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Кувандык',
      alias: 'KUVANDYK',
      region_title: 'Оренбургская область'
    },
    {
      title: 'Абдулино',
      alias: 'ABDULINO',
      region_title: 'Оренбургская область'
    },
    { title: 'Ясный', alias: 'YASNYY', region_title: 'Оренбургская область' },
    { title: 'Орск', alias: 'ORSK', region_title: 'Оренбургская область' },
    {
      title: 'Новокузнецк',
      alias: 'NOVOKUZNECK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Кемерово',
      alias: 'KEMEROVO',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Прокопьевск',
      alias: 'PROKOPEVSK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Междуреченск',
      alias: 'MEZHDURECHENSK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Ленинск-Кузнецкий',
      alias: 'LENINSK-KUZNECKIY',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Киселевск',
      alias: 'KISELEVSK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Юрга',
      alias: 'YURGA',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Белово',
      alias: 'BELOVO',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Анжеро-Судженск',
      alias: 'ANZHERO-SUDZHENSK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Осинники',
      alias: 'OSINNIKI',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Мыски',
      alias: 'MYSKI',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Мариинск',
      alias: 'MARIINSK',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Топки',
      alias: 'TOPKI',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Полысаево',
      alias: 'POLYSAEVO',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Тайга',
      alias: 'TAYGA',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Гурьевск',
      alias: 'GUREVSK--GUREVSKIY-RAYON--KEMEROVSKAYA-OBLAST-KUZBASS-OBLAST',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Таштагол',
      alias: 'TASHTAGOL',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Калтан',
      alias: 'KALTAN',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Салаир',
      alias: 'SALAIR',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    {
      title: 'Берёзовский',
      alias: 'BEREZOVSKIY--KEMEROVSKAYA-OBLAST-KUZBASS-OBLAST',
      region_title: 'Кемеровская область - Кузбасс область'
    },
    { title: 'Рязань', alias: 'RYAZAN', region_title: 'Рязанская область' },
    { title: 'Касимов', alias: 'KASIMOV', region_title: 'Рязанская область' },
    { title: 'Скопин', alias: 'SKOPIN', region_title: 'Рязанская область' },
    { title: 'Сасово', alias: 'SASOVO', region_title: 'Рязанская область' },
    { title: 'Ряжск', alias: 'RYAZHSK', region_title: 'Рязанская область' },
    {
      title: 'Новомичуринск',
      alias: 'NOVOMICHURINSK',
      region_title: 'Рязанская область'
    },
    { title: 'Рыбное', alias: 'RYBNOE', region_title: 'Рязанская область' },
    {
      title: 'Кораблино',
      alias: 'KORABLINO',
      region_title: 'Рязанская область'
    },
    {
      title: 'Спасск-Рязанский',
      alias: 'SPASSK-RYAZANSKIY',
      region_title: 'Рязанская область'
    },
    { title: 'Шацк', alias: 'SHACK', region_title: 'Рязанская область' },
    {
      title: 'Спас-Клепики',
      alias: 'SPAS-KLEPIKI',
      region_title: 'Рязанская область'
    },
    { title: 'Михайлов', alias: 'MIHAYLOV', region_title: 'Рязанская область' },
    { title: 'Томск', alias: 'TOMSK', region_title: 'Томская область' },
    { title: 'Северск', alias: 'SEVERSK', region_title: 'Томская область' },
    {
      title: 'Стрежевой',
      alias: 'STREZHEVOY',
      region_title: 'Томская область'
    },
    { title: 'Асино', alias: 'ASINO', region_title: 'Томская область' },
    {
      title: 'Колпашево',
      alias: 'KOLPASHEVO',
      region_title: 'Томская область'
    },
    { title: 'Кедровый', alias: 'KEDROVYY', region_title: 'Томская область' },
    { title: 'Пенза', alias: 'PENZA', region_title: 'Пензенская область' },
    {
      title: 'Заречный',
      alias: 'ZARECHNYY--PENZENSKAYA-OBLAST',
      region_title: 'Пензенская область'
    },
    { title: 'Каменка', alias: 'KAMENKA', region_title: 'Пензенская область' },
    {
      title: 'Сердобск',
      alias: 'SERDOBSK',
      region_title: 'Пензенская область'
    },
    {
      title: 'Нижний Ломов',
      alias: 'NIZHNIY-LOMOV',
      region_title: 'Пензенская область'
    },
    {
      title: 'Никольск',
      alias: 'NIKOLSK--NIKOLSKIY-RAYON--PENZENSKAYA-OBLAST',
      region_title: 'Пензенская область'
    },
    {
      title: 'Белинский',
      alias: 'BELINSKIY',
      region_title: 'Пензенская область'
    },
    {
      title: 'Городище',
      alias: 'GORODISHCHE',
      region_title: 'Пензенская область'
    },
    { title: 'Сурск', alias: 'SURSK', region_title: 'Пензенская область' },
    { title: 'Кузнецк', alias: 'KUZNECK', region_title: 'Пензенская область' },
    { title: 'Спасск', alias: 'SPASSK', region_title: 'Пензенская область' },
    { title: 'Липецк', alias: 'LIPECK', region_title: 'Липецкая область' },
    { title: 'Елец', alias: 'ELEC', region_title: 'Липецкая область' },
    { title: 'Грязи', alias: 'GRYAZI', region_title: 'Липецкая область' },
    { title: 'Данков', alias: 'DANKOV', region_title: 'Липецкая область' },
    { title: 'Лебедянь', alias: 'LEBEDYAN', region_title: 'Липецкая область' },
    { title: 'Усмань', alias: 'USMAN', region_title: 'Липецкая область' },
    { title: 'Чаплыгин', alias: 'CHAPLYGIN', region_title: 'Липецкая область' },
    { title: 'Задонск', alias: 'ZADONSK', region_title: 'Липецкая область' },
    { title: 'Тула', alias: 'TULA', region_title: 'Тульская область' },
    {
      title: 'Новомосковск',
      alias: 'NOVOMOSKOVSK',
      region_title: 'Тульская область'
    },
    { title: 'Донской', alias: 'DONSKOY', region_title: 'Тульская область' },
    { title: 'Алексин', alias: 'ALEKSIN', region_title: 'Тульская область' },
    { title: 'Щекино', alias: 'SHCHEKINO', region_title: 'Тульская область' },
    { title: 'Узловая', alias: 'UZLOVAYA', region_title: 'Тульская область' },
    { title: 'Ефремов', alias: 'EFREMOV', region_title: 'Тульская область' },
    {
      title: 'Советск',
      alias: 'SOVETSK--SHCHEKINSKIY-RAYON',
      region_title: 'Тульская область'
    },
    {
      title: 'Богородицк',
      alias: 'BOGORODICK',
      region_title: 'Тульская область'
    },
    { title: 'Кимовск', alias: 'KIMOVSK', region_title: 'Тульская область' },
    { title: 'Киреевск', alias: 'KIREEVSK', region_title: 'Тульская область' },
    { title: 'Суворов', alias: 'SUVOROV', region_title: 'Тульская область' },
    {
      title: 'Ясногорск',
      alias: 'YASNOGORSK',
      region_title: 'Тульская область'
    },
    { title: 'Плавск', alias: 'PLAVSK', region_title: 'Тульская область' },
    { title: 'Венев', alias: 'VENEV', region_title: 'Тульская область' },
    { title: 'Белев', alias: 'BELEV', region_title: 'Тульская область' },
    { title: 'Болохово', alias: 'BOLOHOVO', region_title: 'Тульская область' },
    { title: 'Липки', alias: 'LIPKI', region_title: 'Тульская область' },
    { title: 'Чекалин', alias: 'CHEKALIN', region_title: 'Тульская область' },
    {
      title: 'Киров',
      alias: 'KIROV--KIROVSKAYA-OBLAST',
      region_title: 'Кировская область'
    },
    {
      title: 'Кирово-Чепецк',
      alias: 'KIROVO-CHEPECK',
      region_title: 'Кировская область'
    },
    {
      title: 'Советск',
      alias: 'SOVETSK--SOVETSKIY-RAYON',
      region_title: 'Кировская область'
    },
    {
      title: 'Вятские Поляны',
      alias: 'VYATSKIE-POLYANY',
      region_title: 'Кировская область'
    },
    {
      title: 'Слободской',
      alias: 'SLOBODSKOY',
      region_title: 'Кировская область'
    },
    {
      title: 'Котельнич',
      alias: 'KOTELNICH',
      region_title: 'Кировская область'
    },
    {
      title: 'Омутнинск',
      alias: 'OMUTNINSK',
      region_title: 'Кировская область'
    },
    { title: 'Яранск', alias: 'YARANSK', region_title: 'Кировская область' },
    { title: 'Сосновка', alias: 'SOSNOVKA', region_title: 'Кировская область' },
    { title: 'Луза', alias: 'LUZA', region_title: 'Кировская область' },
    {
      title: 'Белая Холуница',
      alias: 'BELAYA-HOLUNICA',
      region_title: 'Кировская область'
    },
    { title: 'Зуевка', alias: 'ZUEVKA', region_title: 'Кировская область' },
    { title: 'Уржум', alias: 'URZHUM', region_title: 'Кировская область' },
    { title: 'Нолинск', alias: 'NOLINSK', region_title: 'Кировская область' },
    { title: 'Малмыж', alias: 'MALMYZH', region_title: 'Кировская область' },
    { title: 'Орлов', alias: 'ORLOV', region_title: 'Кировская область' },
    { title: 'Мураши', alias: 'MURASHI', region_title: 'Кировская область' },
    { title: 'Кирс', alias: 'KIRS', region_title: 'Кировская область' },
    {
      title: 'Чебоксары',
      alias: 'CHEBOKSARY',
      region_title: 'Республика Чувашская'
    },
    {
      title: 'Новочебоксарск',
      alias: 'NOVOCHEBOKSARSK',
      region_title: 'Республика Чувашская'
    },
    { title: 'Канаш', alias: 'KANASH', region_title: 'Республика Чувашская' },
    { title: 'Алатырь', alias: 'ALATYR', region_title: 'Республика Чувашская' },
    {
      title: 'Шумерля',
      alias: 'SHUMERLYA',
      region_title: 'Республика Чувашская'
    },
    {
      title: 'Цивильск',
      alias: 'CIVILSK',
      region_title: 'Республика Чувашская'
    },
    {
      title: 'Козловка',
      alias: 'KOZLOVKA',
      region_title: 'Республика Чувашская'
    },
    {
      title: 'Мариинский Посад',
      alias: 'MARIINSKIY-POSAD',
      region_title: 'Республика Чувашская'
    },
    { title: 'Ядрин', alias: 'YADRIN', region_title: 'Республика Чувашская' },
    {
      title: 'Улан-Удэ',
      alias: 'ULAN-UDE',
      region_title: 'Республика Бурятия'
    },
    {
      title: 'Северобайкальск',
      alias: 'SEVEROBAYKALSK',
      region_title: 'Республика Бурятия'
    },
    {
      title: 'Гусиноозерск',
      alias: 'GUSINOOZERSK',
      region_title: 'Республика Бурятия'
    },
    { title: 'Кяхта', alias: 'KYAHTA', region_title: 'Республика Бурятия' },
    {
      title: 'Закаменск',
      alias: 'ZAKAMENSK',
      region_title: 'Республика Бурятия'
    },
    {
      title: 'Бабушкин',
      alias: 'BABUSHKIN',
      region_title: 'Республика Бурятия'
    },
    {
      title: 'Калининград',
      alias: 'KALININGRAD',
      region_title: 'Калининградская область'
    },
    {
      title: 'Советск',
      alias: 'SOVETSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Черняховск',
      alias: 'CHERNYAHOVSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Балтийск',
      alias: 'BALTIYSK',
      region_title: 'Калининградская область'
    },
    { title: 'Гусев', alias: 'GUSEV', region_title: 'Калининградская область' },
    {
      title: 'Гурьевск',
      alias: 'GUREVSK--GUREVSKIY-RAYON--KALININGRADSKAYA-OBLAST',
      region_title: 'Калининградская область'
    },
    {
      title: 'Светлый',
      alias: 'SVETLYY',
      region_title: 'Калининградская область'
    },
    {
      title: 'Гвардейск',
      alias: 'GVARDEYSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Зеленоградск',
      alias: 'ZELENOGRADSK',
      region_title: 'Калининградская область'
    },
    { title: 'Неман', alias: 'NEMAN', region_title: 'Калининградская область' },
    {
      title: 'Пионерский',
      alias: 'PIONERSKIY',
      region_title: 'Калининградская область'
    },
    {
      title: 'Светлогорск',
      alias: 'SVETLOGORSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Мамоново',
      alias: 'MAMONOVO',
      region_title: 'Калининградская область'
    },
    {
      title: 'Полесск',
      alias: 'POLESSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Багратионовск',
      alias: 'BAGRATIONOVSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Славск',
      alias: 'SLAVSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Нестеров',
      alias: 'NESTEROV',
      region_title: 'Калининградская область'
    },
    {
      title: 'Правдинск',
      alias: 'PRAVDINSK',
      region_title: 'Калининградская область'
    },
    {
      title: 'Ладушкин',
      alias: 'LADUSHKIN',
      region_title: 'Калининградская область'
    },
    {
      title: 'Озёрск',
      alias: 'OZERSK--OZERSKIY-RAYON',
      region_title: 'Калининградская область'
    },
    {
      title: 'Краснознаменск',
      alias: 'KRASNOZNAMENSK--KRASNOZNAMENSKIY-RAYON',
      region_title: 'Калининградская область'
    },
    {
      title: 'Приморск',
      alias: 'PRIMORSK--BALTIYSKIY-RAYON',
      region_title: 'Калининградская область'
    },
    { title: 'Брянск', alias: 'BRYANSK', region_title: 'Брянская область' },
    { title: 'Клинцы', alias: 'KLINCY', region_title: 'Брянская область' },
    {
      title: 'Новозыбков',
      alias: 'NOVOZYBKOV',
      region_title: 'Брянская область'
    },
    { title: 'Дятьково', alias: 'DYATKOVO', region_title: 'Брянская область' },
    { title: 'Унеча', alias: 'UNECHA', region_title: 'Брянская область' },
    {
      title: 'Фокино',
      alias: 'FOKINO--BRYANSKAYA-OBLAST',
      region_title: 'Брянская область'
    },
    { title: 'Карачев', alias: 'KARACHEV', region_title: 'Брянская область' },
    { title: 'Стародуб', alias: 'STARODUB', region_title: 'Брянская область' },
    { title: 'Жуковка', alias: 'ZHUKOVKA', region_title: 'Брянская область' },
    { title: 'Почеп', alias: 'POCHEP', region_title: 'Брянская область' },
    { title: 'Сельцо', alias: 'SELCO', region_title: 'Брянская область' },
    {
      title: 'Трубчевск',
      alias: 'TRUBCHEVSK',
      region_title: 'Брянская область'
    },
    { title: 'Сураж', alias: 'SURAZH', region_title: 'Брянская область' },
    { title: 'Мглин', alias: 'MGLIN', region_title: 'Брянская область' },
    { title: 'Севск', alias: 'SEVSK', region_title: 'Брянская область' },
    { title: 'Злынка', alias: 'ZLYNKA', region_title: 'Брянская область' },
    { title: 'Курск', alias: 'KURSK', region_title: 'Курская область' },
    {
      title: 'Железногорск',
      alias: 'ZHELEZNOGORSK--KURSKAYA-OBLAST',
      region_title: 'Курская область'
    },
    { title: 'Курчатов', alias: 'KURCHATOV', region_title: 'Курская область' },
    { title: 'Льгов', alias: 'LGOV', region_title: 'Курская область' },
    { title: 'Щигры', alias: 'SHCHIGRY', region_title: 'Курская область' },
    { title: 'Рыльск', alias: 'RYLSK', region_title: 'Курская область' },
    { title: 'Обоянь', alias: 'OBOYAN', region_title: 'Курская область' },
    { title: 'Дмитриев', alias: 'DMITRIEV', region_title: 'Курская область' },
    { title: 'Суджа', alias: 'SUDZHA', region_title: 'Курская область' },
    { title: 'Фатеж', alias: 'FATEZH', region_title: 'Курская область' },
    { title: 'Иваново', alias: 'IVANOVO', region_title: 'Ивановская область' },
    { title: 'Кинешма', alias: 'KINESHMA', region_title: 'Ивановская область' },
    { title: 'Шуя', alias: 'SHUYA', region_title: 'Ивановская область' },
    { title: 'Вичуга', alias: 'VICHUGA', region_title: 'Ивановская область' },
    {
      title: 'Фурманов',
      alias: 'FURMANOV',
      region_title: 'Ивановская область'
    },
    { title: 'Тейково', alias: 'TEYKOVO', region_title: 'Ивановская область' },
    { title: 'Кохма', alias: 'KOHMA', region_title: 'Ивановская область' },
    { title: 'Родники', alias: 'RODNIKI', region_title: 'Ивановская область' },
    {
      title: 'Приволжск',
      alias: 'PRIVOLZHSK',
      region_title: 'Ивановская область'
    },
    { title: 'Южа', alias: 'YUZHA', region_title: 'Ивановская область' },
    {
      title: 'Заволжск',
      alias: 'ZAVOLZHSK',
      region_title: 'Ивановская область'
    },
    {
      title: 'Наволоки',
      alias: 'NAVOLOKI',
      region_title: 'Ивановская область'
    },
    { title: 'Юрьевец', alias: 'YUREVEC', region_title: 'Ивановская область' },
    { title: 'Пучеж', alias: 'PUCHEZH', region_title: 'Ивановская область' },
    {
      title: 'Гаврилов Посад',
      alias: 'GAVRILOV-POSAD',
      region_title: 'Ивановская область'
    },
    { title: 'Плес', alias: 'PLES', region_title: 'Ивановская область' },
    {
      title: 'Комсомольск',
      alias: 'KOMSOMOLSK',
      region_title: 'Ивановская область'
    },
    { title: 'Тверь', alias: 'TVER', region_title: 'Тверская область' },
    { title: 'Ржев', alias: 'RZHEV', region_title: 'Тверская область' },
    {
      title: 'Вышний Волочек',
      alias: 'VYSHNIY-VOLOCHEK',
      region_title: 'Тверская область'
    },
    { title: 'Кимры', alias: 'KIMRY', region_title: 'Тверская область' },
    { title: 'Торжок', alias: 'TORZHOK', region_title: 'Тверская область' },
    { title: 'Конаково', alias: 'KONAKOVO', region_title: 'Тверская область' },
    { title: 'Удомля', alias: 'UDOMLYA', region_title: 'Тверская область' },
    { title: 'Бежецк', alias: 'BEZHECK', region_title: 'Тверская область' },
    { title: 'Бологое', alias: 'BOLOGOE', region_title: 'Тверская область' },
    { title: 'Нелидово', alias: 'NELIDOVO', region_title: 'Тверская область' },
    { title: 'Осташков', alias: 'OSTASHKOV', region_title: 'Тверская область' },
    { title: 'Кашин', alias: 'KASHIN', region_title: 'Тверская область' },
    { title: 'Калязин', alias: 'KALYAZIN', region_title: 'Тверская область' },
    { title: 'Торопец', alias: 'TOROPEC', region_title: 'Тверская область' },
    {
      title: 'Лихославль',
      alias: 'LIHOSLAVL',
      region_title: 'Тверская область'
    },
    {
      title: 'Кувшиново',
      alias: 'KUVSHINOVO',
      region_title: 'Тверская область'
    },
    {
      title: 'Западная Двина',
      alias: 'ZAPADNAYA-DVINA',
      region_title: 'Тверская область'
    },
    { title: 'Старица', alias: 'STARICA', region_title: 'Тверская область' },
    {
      title: 'Андреаполь',
      alias: 'ANDREAPOL',
      region_title: 'Тверская область'
    },
    {
      title: 'Весьегонск',
      alias: 'VESEGONSK',
      region_title: 'Тверская область'
    },
    { title: 'Зубцов', alias: 'ZUBCOV', region_title: 'Тверская область' },
    {
      title: 'Красный Холм',
      alias: 'KRASNYY-HOLM',
      region_title: 'Тверская область'
    },
    { title: 'Белый', alias: 'BELYY', region_title: 'Тверская область' },
    {
      title: 'Ставрополь',
      alias: 'STAVROPOL',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Пятигорск',
      alias: 'PYATIGORSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Кисловодск',
      alias: 'KISLOVODSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Невинномысск',
      alias: 'NEVINNOMYSSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Ессентуки',
      alias: 'ESSENTUKI',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Минеральные Воды',
      alias: 'MINERALNYE-VODY',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Георгиевск',
      alias: 'GEORGIEVSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Михайловск',
      alias: 'MIHAYLOVSK--SHPAKOVSKIY-RAYON',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Буденновск',
      alias: 'BUDENNOVSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Изобильный',
      alias: 'IZOBILNYY',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Светлоград',
      alias: 'SVETLOGRAD',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Зеленокумск',
      alias: 'ZELENOKUMSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Благодарный',
      alias: 'BLAGODARNYY',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Нефтекумск',
      alias: 'NEFTEKUMSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Новоалександровск',
      alias: 'NOVOALEKSANDROVSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Новопавловск',
      alias: 'NOVOPAVLOVSK',
      region_title: 'Ставропольский край'
    },
    { title: 'Ипатово', alias: 'IPATOVO', region_title: 'Ставропольский край' },
    {
      title: 'Железноводск',
      alias: 'ZHELEZNOVODSK',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Лермонтов',
      alias: 'LERMONTOV',
      region_title: 'Ставропольский край'
    },
    {
      title: 'Белгород',
      alias: 'BELGOROD',
      region_title: 'Белгородская область'
    },
    {
      title: 'Старый Оскол',
      alias: 'STARYY-OSKOL',
      region_title: 'Белгородская область'
    },
    { title: 'Губкин', alias: 'GUBKIN', region_title: 'Белгородская область' },
    {
      title: 'Шебекино',
      alias: 'SHEBEKINO',
      region_title: 'Белгородская область'
    },
    {
      title: 'Алексеевка',
      alias: 'ALEKSEEVKA',
      region_title: 'Белгородская область'
    },
    {
      title: 'Валуйки',
      alias: 'VALUYKI',
      region_title: 'Белгородская область'
    },
    {
      title: 'Строитель',
      alias: 'STROITEL',
      region_title: 'Белгородская область'
    },
    {
      title: 'Новый Оскол',
      alias: 'NOVYY-OSKOL',
      region_title: 'Белгородская область'
    },
    { title: 'Бирюч', alias: 'BIRYUCH', region_title: 'Белгородская область' },
    {
      title: 'Грайворон',
      alias: 'GRAYVORON',
      region_title: 'Белгородская область'
    },
    { title: 'Короча', alias: 'KOROCHA', region_title: 'Белгородская область' },
    {
      title: 'Архангельск',
      alias: 'ARHANGELSK',
      region_title: 'Архангельская область'
    },
    {
      title: 'Северодвинск',
      alias: 'SEVERODVINSK',
      region_title: 'Архангельская область'
    },
    { title: 'Котлас', alias: 'KOTLAS', region_title: 'Архангельская область' },
    {
      title: 'Новодвинск',
      alias: 'NOVODVINSK',
      region_title: 'Архангельская область'
    },
    {
      title: 'Коряжма',
      alias: 'KORYAZHMA',
      region_title: 'Архангельская область'
    },
    {
      title: 'Мирный',
      alias: 'MIRNYY--ARHANGELSKAYA-OBLAST',
      region_title: 'Архангельская область'
    },
    { title: 'Вельск', alias: 'VELSK', region_title: 'Архангельская область' },
    {
      title: 'Няндома',
      alias: 'NYANDOMA',
      region_title: 'Архангельская область'
    },
    { title: 'Онега', alias: 'ONEGA', region_title: 'Архангельская область' },
    {
      title: 'Каргополь',
      alias: 'KARGOPOL',
      region_title: 'Архангельская область'
    },
    {
      title: 'Шенкурск',
      alias: 'SHENKURSK',
      region_title: 'Архангельская область'
    },
    { title: 'Мезень', alias: 'MEZEN', region_title: 'Архангельская область' },
    {
      title: 'Сольвычегодск',
      alias: 'SOLVYCHEGODSK',
      region_title: 'Архангельская область'
    },
    {
      title: 'Владимир',
      alias: 'VLADIMIR',
      region_title: 'Владимирская область'
    },
    { title: 'Ковров', alias: 'KOVROV', region_title: 'Владимирская область' },
    { title: 'Муром', alias: 'MUROM', region_title: 'Владимирская область' },
    {
      title: 'Александров',
      alias: 'ALEKSANDROV',
      region_title: 'Владимирская область'
    },
    {
      title: 'Гусь-Хрустальный',
      alias: 'GUS-HRUSTALNYY',
      region_title: 'Владимирская область'
    },
    {
      title: 'Кольчугино',
      alias: 'KOLCHUGINO',
      region_title: 'Владимирская область'
    },
    {
      title: 'Радужный',
      alias: 'RADUZHNYY--VLADIMIRSKAYA-OBLAST',
      region_title: 'Владимирская область'
    },
    {
      title: 'Вязники',
      alias: 'VYAZNIKI',
      region_title: 'Владимирская область'
    },
    {
      title: 'Киржач',
      alias: 'KIRZHACH',
      region_title: 'Владимирская область'
    },
    {
      title: 'Юрьев-Польский',
      alias: 'YUREV-POLSKIY',
      region_title: 'Владимирская область'
    },
    {
      title: 'Собинка',
      alias: 'SOBINKA',
      region_title: 'Владимирская область'
    },
    { title: 'Покров', alias: 'POKROV', region_title: 'Владимирская область' },
    {
      title: 'Лакинск',
      alias: 'LAKINSK',
      region_title: 'Владимирская область'
    },
    {
      title: 'Меленки',
      alias: 'MELENKI',
      region_title: 'Владимирская область'
    },
    {
      title: 'Петушки',
      alias: 'PETUSHKI',
      region_title: 'Владимирская область'
    },
    {
      title: 'Карабаново',
      alias: 'KARABANOVO',
      region_title: 'Владимирская область'
    },
    {
      title: 'Струнино',
      alias: 'STRUNINO',
      region_title: 'Владимирская область'
    },
    {
      title: 'Гороховец',
      alias: 'GOROHOVEC',
      region_title: 'Владимирская область'
    },
    {
      title: 'Камешково',
      alias: 'KAMESHKOVO',
      region_title: 'Владимирская область'
    },
    {
      title: 'Судогда',
      alias: 'SUDOGDA',
      region_title: 'Владимирская область'
    },
    { title: 'Суздаль', alias: 'SUZDAL', region_title: 'Владимирская область' },
    {
      title: 'Костерево',
      alias: 'KOSTEREVO',
      region_title: 'Владимирская область'
    },
    {
      title: 'Курлово',
      alias: 'KURLOVO',
      region_title: 'Владимирская область'
    },
    { title: 'Курган', alias: 'KURGAN', region_title: 'Курганская область' },
    {
      title: 'Шадринск',
      alias: 'SHADRINSK',
      region_title: 'Курганская область'
    },
    { title: 'Шумиха', alias: 'SHUMIHA', region_title: 'Курганская область' },
    {
      title: 'Куртамыш',
      alias: 'KURTAMYSH',
      region_title: 'Курганская область'
    },
    { title: 'Катайск', alias: 'KATAYSK', region_title: 'Курганская область' },
    {
      title: 'Далматово',
      alias: 'DALMATOVO',
      region_title: 'Курганская область'
    },
    {
      title: 'Петухово',
      alias: 'PETUHOVO',
      region_title: 'Курганская область'
    },
    { title: 'Щучье', alias: 'SHCHUCHE', region_title: 'Курганская область' },
    {
      title: 'Макушино',
      alias: 'MAKUSHINO',
      region_title: 'Курганская область'
    },
    {
      title: 'Симферополь',
      alias: 'SIMFEROPOL',
      region_title: 'Республика Крым'
    },
    { title: 'Керчь', alias: 'KERCH', region_title: 'Республика Крым' },
    {
      title: 'Евпатория',
      alias: 'EVPATORIYA',
      region_title: 'Республика Крым'
    },
    { title: 'Ялта', alias: 'YALTA', region_title: 'Республика Крым' },
    { title: 'Феодосия', alias: 'FEODOSIYA', region_title: 'Республика Крым' },
    {
      title: 'Белогорск',
      alias: 'BELOGORSK--BELOGORSKIY-RAYON',
      region_title: 'Республика Крым'
    },
    { title: 'Джанкой', alias: 'DZHANKOY', region_title: 'Республика Крым' },
    { title: 'Алушта', alias: 'ALUSHTA', region_title: 'Республика Крым' },
    {
      title: 'Бахчисарай',
      alias: 'BAHCHISARAY',
      region_title: 'Республика Крым'
    },
    {
      title: 'Красноперекопск',
      alias: 'KRASNOPEREKOPSK',
      region_title: 'Республика Крым'
    },
    { title: 'Саки', alias: 'SAKI', region_title: 'Республика Крым' },
    { title: 'Армянск', alias: 'ARMYANSK', region_title: 'Республика Крым' },
    { title: 'Судак', alias: 'SUDAK', region_title: 'Республика Крым' },
    { title: 'Щелкино', alias: 'SHCHELKINO', region_title: 'Республика Крым' },
    {
      title: 'Старый Крым',
      alias: 'STARYY-KRYM',
      region_title: 'Республика Крым'
    },
    {
      title: 'Смоленск',
      alias: 'SMOLENSK',
      region_title: 'Смоленская область'
    },
    { title: 'Вязьма', alias: 'VYAZMA', region_title: 'Смоленская область' },
    { title: 'Ярцево', alias: 'YARCEVO', region_title: 'Смоленская область' },
    {
      title: 'Сафоново',
      alias: 'SAFONOVO',
      region_title: 'Смоленская область'
    },
    { title: 'Гагарин', alias: 'GAGARIN', region_title: 'Смоленская область' },
    {
      title: 'Десногорск',
      alias: 'DESNOGORSK',
      region_title: 'Смоленская область'
    },
    {
      title: 'Дорогобуж',
      alias: 'DOROGOBUZH',
      region_title: 'Смоленская область'
    },
    { title: 'Ельня', alias: 'ELNYA', region_title: 'Смоленская область' },
    { title: 'Рудня', alias: 'RUDNYA', region_title: 'Смоленская область' },
    { title: 'Починок', alias: 'POCHINOK', region_title: 'Смоленская область' },
    { title: 'Сычевка', alias: 'SYCHEVKA', region_title: 'Смоленская область' },
    { title: 'Велиж', alias: 'VELIZH', region_title: 'Смоленская область' },
    { title: 'Демидов', alias: 'DEMIDOV', region_title: 'Смоленская область' },
    {
      title: 'Духовщина',
      alias: 'DUHOVSHCHINA',
      region_title: 'Смоленская область'
    },
    { title: 'Рославль', alias: 'ROSLAVL', region_title: 'Смоленская область' },
    { title: 'Чита', alias: 'CHITA', region_title: 'Забайкальский край' },
    {
      title: 'Краснокаменск',
      alias: 'KRASNOKAMENSK',
      region_title: 'Забайкальский край'
    },
    { title: 'Борзя', alias: 'BORZYA', region_title: 'Забайкальский край' },
    {
      title: 'Петровск-Забайкальский',
      alias: 'PETROVSK-ZABAYKALSKIY',
      region_title: 'Забайкальский край'
    },
    {
      title: 'Нерчинск',
      alias: 'NERCHINSK',
      region_title: 'Забайкальский край'
    },
    { title: 'Шилка', alias: 'SHILKA', region_title: 'Забайкальский край' },
    { title: 'Могоча', alias: 'MOGOCHA', region_title: 'Забайкальский край' },
    { title: 'Балей', alias: 'BALEY', region_title: 'Забайкальский край' },
    { title: 'Хилок', alias: 'HILOK', region_title: 'Забайкальский край' },
    {
      title: 'Сретенск',
      alias: 'SRETENSK',
      region_title: 'Забайкальский край'
    },
    { title: 'Саранск', alias: 'SARANSK', region_title: 'Республика Мордовия' },
    {
      title: 'Рузаевка',
      alias: 'RUZAEVKA',
      region_title: 'Республика Мордовия'
    },
    {
      title: 'Ковылкино',
      alias: 'KOVYLKINO',
      region_title: 'Республика Мордовия'
    },
    {
      title: 'Краснослободск',
      alias: 'KRASNOSLOBODSK--KRASNOSLOBODSKIY-RAYON',
      region_title: 'Республика Мордовия'
    },
    { title: 'Ардатов', alias: 'ARDATOV', region_title: 'Республика Мордовия' },
    { title: 'Инсар', alias: 'INSAR', region_title: 'Республика Мордовия' },
    {
      title: 'Темников',
      alias: 'TEMNIKOV',
      region_title: 'Республика Мордовия'
    },
    { title: 'Орёл', alias: 'OREL', region_title: 'Орловская область' },
    { title: 'Ливны', alias: 'LIVNY', region_title: 'Орловская область' },
    { title: 'Мценск', alias: 'MCENSK', region_title: 'Орловская область' },
    { title: 'Болхов', alias: 'BOLHOV', region_title: 'Орловская область' },
    {
      title: 'Дмитровск',
      alias: 'DMITROVSK',
      region_title: 'Орловская область'
    },
    {
      title: 'Малоархангельск',
      alias: 'MALOARHANGELSK',
      region_title: 'Орловская область'
    },
    { title: 'Новосиль', alias: 'NOVOSIL', region_title: 'Орловская область' },
    {
      title: 'Череповец',
      alias: 'CHEREPOVEC',
      region_title: 'Вологодская область'
    },
    { title: 'Вологда', alias: 'VOLOGDA', region_title: 'Вологодская область' },
    { title: 'Сокол', alias: 'SOKOL', region_title: 'Вологодская область' },
    {
      title: 'Великий Устюг',
      alias: 'VELIKIY-USTYUG',
      region_title: 'Вологодская область'
    },
    {
      title: 'Никольск',
      alias: 'NIKOLSK--NIKOLSKIY-RAYON--VOLOGODSKAYA-OBLAST',
      region_title: 'Вологодская область'
    },
    {
      title: 'Грязовец',
      alias: 'GRYAZOVEC',
      region_title: 'Вологодская область'
    },
    { title: 'Бабаево', alias: 'BABAEVO', region_title: 'Вологодская область' },
    { title: 'Вытегра', alias: 'VYTEGRA', region_title: 'Вологодская область' },
    { title: 'Харовск', alias: 'HAROVSK', region_title: 'Вологодская область' },
    { title: 'Тотьма', alias: 'TOTMA', region_title: 'Вологодская область' },
    {
      title: 'Белозерск',
      alias: 'BELOZERSK',
      region_title: 'Вологодская область'
    },
    {
      title: 'Устюжна',
      alias: 'USTYUZHNA',
      region_title: 'Вологодская область'
    },
    {
      title: 'Кириллов',
      alias: 'KIRILLOV',
      region_title: 'Вологодская область'
    },
    {
      title: 'Красавино',
      alias: 'KRASAVINO',
      region_title: 'Вологодская область'
    },
    {
      title: 'Кадников',
      alias: 'KADNIKOV',
      region_title: 'Вологодская область'
    },
    {
      title: 'Владикавказ',
      alias: 'VLADIKAVKAZ',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Моздок',
      alias: 'MOZDOK',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Беслан',
      alias: 'BESLAN',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Алагир',
      alias: 'ALAGIR',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Ардон',
      alias: 'ARDON',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Дигора',
      alias: 'DIGORA',
      region_title: 'Республика Северная Осетия - Алания'
    },
    {
      title: 'Мурманск',
      alias: 'MURMANSK',
      region_title: 'Мурманская область'
    },
    { title: 'Апатиты', alias: 'APATITY', region_title: 'Мурманская область' },
    {
      title: 'Североморск',
      alias: 'SEVEROMORSK',
      region_title: 'Мурманская область'
    },
    {
      title: 'Мончегорск',
      alias: 'MONCHEGORSK',
      region_title: 'Мурманская область'
    },
    {
      title: 'Кандалакша',
      alias: 'KANDALAKSHA',
      region_title: 'Мурманская область'
    },
    {
      title: 'Кировск',
      alias: 'KIROVSK--MURMANSKAYA-OBLAST',
      region_title: 'Мурманская область'
    },
    {
      title: 'Оленегорск',
      alias: 'OLENEGORSK',
      region_title: 'Мурманская область'
    },
    { title: 'Ковдор', alias: 'KOVDOR', region_title: 'Мурманская область' },
    {
      title: 'Полярный',
      alias: 'POLYARNYY',
      region_title: 'Мурманская область'
    },
    {
      title: 'Заполярный',
      alias: 'ZAPOLYARNYY',
      region_title: 'Мурманская область'
    },
    {
      title: 'Полярные Зори',
      alias: 'POLYARNYE-ZORI',
      region_title: 'Мурманская область'
    },
    {
      title: 'Снежногорск',
      alias: 'SNEZHNOGORSK',
      region_title: 'Мурманская область'
    },
    {
      title: 'Заозерск',
      alias: 'ZAOZERSK',
      region_title: 'Мурманская область'
    },
    {
      title: 'Гаджиево',
      alias: 'GADZHIEVO',
      region_title: 'Мурманская область'
    },
    {
      title: 'Островной',
      alias: 'OSTROVNOY',
      region_title: 'Мурманская область'
    },
    { title: 'Кола', alias: 'KOLA', region_title: 'Мурманская область' },
    {
      title: 'Сургут',
      alias: 'SURGUT',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Нижневартовск',
      alias: 'NIZHNEVARTOVSK',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Нефтеюганск',
      alias: 'NEFTEYUGANSK',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Ханты-Мансийск',
      alias: 'HANTY-MANSIYSK',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Когалым',
      alias: 'KOGALYM',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Нягань',
      alias: 'NYAGAN',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Мегион',
      alias: 'MEGION',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Радужный',
      alias:
        'RADUZHNYY--HANTY-MANSIYSKIY-AVTONOMNYY-OKRUG-YUGRA-AVTONOMNYY-OKRUG',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Лангепас',
      alias: 'LANGEPAS',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Пыть-Ях',
      alias: 'PYT-YAH',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Урай',
      alias: 'URAY',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Лянтор',
      alias: 'LYANTOR',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Югорск',
      alias: 'YUGORSK',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Советский',
      alias: 'SOVETSKIY',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Белоярский',
      alias: 'BELOYARSKIY',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    {
      title: 'Покачи',
      alias: 'POKACHI',
      region_title: 'Ханты-Мансийский Автономный округ - Югра автономный округ'
    },
    { title: 'Тамбов', alias: 'TAMBOV', region_title: 'Тамбовская область' },
    {
      title: 'Мичуринск',
      alias: 'MICHURINSK',
      region_title: 'Тамбовская область'
    },
    {
      title: 'Рассказово',
      alias: 'RASSKAZOVO',
      region_title: 'Тамбовская область'
    },
    {
      title: 'Моршанск',
      alias: 'MORSHANSK',
      region_title: 'Тамбовская область'
    },
    { title: 'Котовск', alias: 'KOTOVSK', region_title: 'Тамбовская область' },
    { title: 'Уварово', alias: 'UVAROVO', region_title: 'Тамбовская область' },
    {
      title: 'Кирсанов',
      alias: 'KIRSANOV',
      region_title: 'Тамбовская область'
    },
    {
      title: 'Жердевка',
      alias: 'ZHERDEVKA',
      region_title: 'Тамбовская область'
    },
    {
      title: 'Грозный',
      alias: 'GROZNYY',
      region_title: 'Республика Чеченская'
    },
    { title: 'Шали', alias: 'SHALI', region_title: 'Республика Чеченская' },
    {
      title: 'Гудермес',
      alias: 'GUDERMES',
      region_title: 'Республика Чеченская'
    },
    { title: 'Аргун', alias: 'ARGUN', region_title: 'Республика Чеченская' },
    {
      title: 'Курчалой',
      alias: 'KURCHALOY',
      region_title: 'Республика Чеченская'
    },
    {
      title: 'Якутск',
      alias: 'YAKUTSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Нерюнгри',
      alias: 'NERYUNGRI',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Мирный',
      alias: 'MIRNYY--MIRNINSKIY-ULUS',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Алдан',
      alias: 'ALDAN',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Удачный',
      alias: 'UDACHNYY',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Вилюйск',
      alias: 'VILYUYSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Нюрба',
      alias: 'NYURBA',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Покровск',
      alias: 'POKROVSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Олекминск',
      alias: 'OLEKMINSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Томмот',
      alias: 'TOMMOT',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Среднеколымск',
      alias: 'SREDNEKOLYMSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Верхоянск',
      alias: 'VERHOYANSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Ленск',
      alias: 'LENSK',
      region_title: 'Республика Саха /Якутия/'
    },
    {
      title: 'Кострома',
      alias: 'KOSTROMA',
      region_title: 'Костромская область'
    },
    { title: 'Шарья', alias: 'SHARYA', region_title: 'Костромская область' },
    { title: 'Нерехта', alias: 'NEREHTA', region_title: 'Костромская область' },
    {
      title: 'Мантурово',
      alias: 'MANTUROVO',
      region_title: 'Костромская область'
    },
    { title: 'Галич', alias: 'GALICH', region_title: 'Костромская область' },
    {
      title: 'Волгореченск',
      alias: 'VOLGORECHENSK',
      region_title: 'Костромская область'
    },
    { title: 'Нея', alias: 'NEYA', region_title: 'Костромская область' },
    {
      title: 'Макарьев',
      alias: 'MAKAREV',
      region_title: 'Костромская область'
    },
    {
      title: 'Солигалич',
      alias: 'SOLIGALICH',
      region_title: 'Костромская область'
    },
    {
      title: 'Чухлома',
      alias: 'CHUHLOMA',
      region_title: 'Костромская область'
    },
    {
      title: 'Кологрив',
      alias: 'KOLOGRIV',
      region_title: 'Костромская область'
    },
    { title: 'Буй', alias: 'BUY', region_title: 'Костромская область' },
    {
      title: 'Петрозаводск',
      alias: 'PETROZAVODSK',
      region_title: 'Республика Карелия'
    },
    {
      title: 'Кондопога',
      alias: 'KONDOPOGA',
      region_title: 'Республика Карелия'
    },
    { title: 'Сегежа', alias: 'SEGEZHA', region_title: 'Республика Карелия' },
    {
      title: 'Костомукша',
      alias: 'KOSTOMUKSHA',
      region_title: 'Республика Карелия'
    },
    {
      title: 'Сортавала',
      alias: 'SORTAVALA',
      region_title: 'Республика Карелия'
    },
    {
      title: 'Медвежьегорск',
      alias: 'MEDVEZHEGORSK',
      region_title: 'Республика Карелия'
    },
    { title: 'Кемь', alias: 'KEM', region_title: 'Республика Карелия' },
    {
      title: 'Питкяранта',
      alias: 'PITKYARANTA',
      region_title: 'Республика Карелия'
    },
    {
      title: 'Беломорск',
      alias: 'BELOMORSK',
      region_title: 'Республика Карелия'
    },
    { title: 'Суоярви', alias: 'SUOYARVI', region_title: 'Республика Карелия' },
    { title: 'Пудож', alias: 'PUDOZH', region_title: 'Республика Карелия' },
    { title: 'Олонец', alias: 'OLONEC', region_title: 'Республика Карелия' },
    {
      title: 'Лахденпохья',
      alias: 'LAHDENPOHYA',
      region_title: 'Республика Карелия'
    },
    {
      title: 'Йошкар-Ола',
      alias: 'YOSHKAR-OLA',
      region_title: 'Республика Марий Эл'
    },
    {
      title: 'Козьмодемьянск',
      alias: 'KOZMODEMYANSK',
      region_title: 'Республика Марий Эл'
    },
    {
      title: 'Звенигово',
      alias: 'ZVENIGOVO',
      region_title: 'Республика Марий Эл'
    },
    { title: 'Волжск', alias: 'VOLZHSK', region_title: 'Республика Марий Эл' },
    {
      title: 'Нальчик',
      alias: 'NALCHIK',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Прохладный',
      alias: 'PROHLADNYY',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Баксан',
      alias: 'BAKSAN',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Нарткала',
      alias: 'NARTKALA',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Майский',
      alias: 'MAYSKIY',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Тырныауз',
      alias: 'TYRNYAUZ',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Терек',
      alias: 'TEREK',
      region_title: 'Республика Кабардино-Балкарская'
    },
    {
      title: 'Чегем',
      alias: 'CHEGEM',
      region_title: 'Республика Кабардино-Балкарская'
    },
    { title: 'Сыктывкар', alias: 'SYKTYVKAR', region_title: 'Республика Коми' },
    { title: 'Ухта', alias: 'UHTA', region_title: 'Республика Коми' },
    { title: 'Воркута', alias: 'VORKUTA', region_title: 'Республика Коми' },
    { title: 'Печора', alias: 'PECHORA', region_title: 'Республика Коми' },
    { title: 'Инта', alias: 'INTA', region_title: 'Республика Коми' },
    {
      title: 'Сосногорск',
      alias: 'SOSNOGORSK',
      region_title: 'Республика Коми'
    },
    { title: 'Емва', alias: 'EMVA', region_title: 'Республика Коми' },
    { title: 'Вуктыл', alias: 'VUKTYL', region_title: 'Республика Коми' },
    { title: 'Микунь', alias: 'MIKUN', region_title: 'Республика Коми' },
    { title: 'Усинск', alias: 'USINSK', region_title: 'Республика Коми' },
    {
      title: 'Великий Новгород',
      alias: 'VELIKIY-NOVGOROD',
      region_title: 'Новгородская область'
    },
    {
      title: 'Боровичи',
      alias: 'BOROVICHI',
      region_title: 'Новгородская область'
    },
    {
      title: 'Старая Русса',
      alias: 'STARAYA-RUSSA',
      region_title: 'Новгородская область'
    },
    { title: 'Чудово', alias: 'CHUDOVO', region_title: 'Новгородская область' },
    { title: 'Валдай', alias: 'VALDAY', region_title: 'Новгородская область' },
    {
      title: 'Пестово',
      alias: 'PESTOVO',
      region_title: 'Новгородская область'
    },
    {
      title: 'Окуловка',
      alias: 'OKULOVKA',
      region_title: 'Новгородская область'
    },
    {
      title: 'Малая Вишера',
      alias: 'MALAYA-VISHERA',
      region_title: 'Новгородская область'
    },
    { title: 'Сольцы', alias: 'SOLCY', region_title: 'Новгородская область' },
    { title: 'Холм', alias: 'HOLM', region_title: 'Новгородская область' },
    {
      title: 'Благовещенск',
      alias: 'BLAGOVESHCHENSK--AMURSKAYA-OBLAST',
      region_title: 'Амурская область'
    },
    {
      title: 'Белогорск',
      alias: 'BELOGORSK--AMURSKAYA-OBLAST',
      region_title: 'Амурская область'
    },
    {
      title: 'Свободный',
      alias: 'SVOBODNYY',
      region_title: 'Амурская область'
    },
    { title: 'Тында', alias: 'TYNDA', region_title: 'Амурская область' },
    { title: 'Зея', alias: 'ZEYA', region_title: 'Амурская область' },
    {
      title: 'Райчихинск',
      alias: 'RAYCHIHINSK',
      region_title: 'Амурская область'
    },
    {
      title: 'Шимановск',
      alias: 'SHIMANOVSK',
      region_title: 'Амурская область'
    },
    {
      title: 'Завитинск',
      alias: 'ZAVITINSK',
      region_title: 'Амурская область'
    },
    {
      title: 'Сковородино',
      alias: 'SKOVORODINO',
      region_title: 'Амурская область'
    },
    {
      title: 'Циолковский',
      alias: 'CIOLKOVSKIY',
      region_title: 'Амурская область'
    },
    { title: 'Псков', alias: 'PSKOV', region_title: 'Псковская область' },
    {
      title: 'Великие Луки',
      alias: 'VELIKIE-LUKI',
      region_title: 'Псковская область'
    },
    { title: 'Остров', alias: 'OSTROV', region_title: 'Псковская область' },
    { title: 'Невель', alias: 'NEVEL', region_title: 'Псковская область' },
    { title: 'Печоры', alias: 'PECHORY', region_title: 'Псковская область' },
    { title: 'Опочка', alias: 'OPOCHKA', region_title: 'Псковская область' },
    { title: 'Порхов', alias: 'PORHOV', region_title: 'Псковская область' },
    {
      title: 'Новосокольники',
      alias: 'NOVOSOKOLNIKI',
      region_title: 'Псковская область'
    },
    { title: 'Себеж', alias: 'SEBEZH', region_title: 'Псковская область' },
    { title: 'Пыталово', alias: 'PYTALOVO', region_title: 'Псковская область' },
    {
      title: 'Пустошка',
      alias: 'PUSTOSHKA',
      region_title: 'Псковская область'
    },
    { title: 'Гдов', alias: 'GDOV', region_title: 'Псковская область' },
    {
      title: 'Новоржев',
      alias: 'NOVORZHEV',
      region_title: 'Псковская область'
    },
    { title: 'Дно', alias: 'DNO', region_title: 'Псковская область' },
    {
      title: 'Южно-Сахалинск',
      alias: 'YUZHNO-SAHALINSK',
      region_title: 'Сахалинская область'
    },
    {
      title: 'Корсаков',
      alias: 'KORSAKOV',
      region_title: 'Сахалинская область'
    },
    { title: 'Холмск', alias: 'HOLMSK', region_title: 'Сахалинская область' },
    { title: 'Оха', alias: 'OHA', region_title: 'Сахалинская область' },
    {
      title: 'Поронайск',
      alias: 'PORONAYSK',
      region_title: 'Сахалинская область'
    },
    { title: 'Долинск', alias: 'DOLINSK', region_title: 'Сахалинская область' },
    {
      title: 'Углегорск',
      alias: 'UGLEGORSK',
      region_title: 'Сахалинская область'
    },
    {
      title: 'Невельск',
      alias: 'NEVELSK',
      region_title: 'Сахалинская область'
    },
    {
      title: 'Александровск-Сахалинский',
      alias: 'ALEKSANDROVSK-SAHALINSKIY',
      region_title: 'Сахалинская область'
    },
    { title: 'Анива', alias: 'ANIVA', region_title: 'Сахалинская область' },
    { title: 'Макаров', alias: 'MAKAROV', region_title: 'Сахалинская область' },
    { title: 'Томари', alias: 'TOMARI', region_title: 'Сахалинская область' },
    {
      title: 'Северо-Курильск',
      alias: 'SEVERO-KURILSK',
      region_title: 'Сахалинская область'
    },
    {
      title: 'Курильск',
      alias: 'KURILSK',
      region_title: 'Сахалинская область'
    },
    {
      title: 'Петропавловск-Камчатский',
      alias: 'PETROPAVLOVSK-KAMCHATSKIY',
      region_title: 'Камчатский край'
    },
    { title: 'Елизово', alias: 'ELIZOVO', region_title: 'Камчатский край' },
    {
      title: 'Вилючинск',
      alias: 'VILYUCHINSK',
      region_title: 'Камчатский край'
    },
    { title: 'Абакан', alias: 'ABAKAN', region_title: 'Республика Хакасия' },
    {
      title: 'Черногорск',
      alias: 'CHERNOGORSK',
      region_title: 'Республика Хакасия'
    },
    {
      title: 'Саяногорск',
      alias: 'SAYANOGORSK',
      region_title: 'Республика Хакасия'
    },
    { title: 'Абаза', alias: 'ABAZA', region_title: 'Республика Хакасия' },
    { title: 'Сорск', alias: 'SORSK', region_title: 'Республика Хакасия' },
    { title: 'Майкоп', alias: 'MAYKOP', region_title: 'Республика Адыгея' },
    { title: 'Адыгейск', alias: 'ADYGEYSK', region_title: 'Республика Адыгея' },
    {
      title: 'Черкесск',
      alias: 'CHERKESSK',
      region_title: 'Республика Карачаево-Черкесская'
    },
    {
      title: 'Усть-Джегута',
      alias: 'UST-DZHEGUTA',
      region_title: 'Республика Карачаево-Черкесская'
    },
    {
      title: 'Карачаевск',
      alias: 'KARACHAEVSK',
      region_title: 'Республика Карачаево-Черкесская'
    },
    {
      title: 'Теберда',
      alias: 'TEBERDA',
      region_title: 'Республика Карачаево-Черкесская'
    },
    {
      title: 'Ноябрьск',
      alias: 'NOYABRSK',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Новый Уренгой',
      alias: 'NOVYY-URENGOY',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Надым',
      alias: 'NADYM',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Салехард',
      alias: 'SALEHARD',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Муравленко',
      alias: 'MURAVLENKO',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Лабытнанги',
      alias: 'LABYTNANGI',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Губкинский',
      alias: 'GUBKINSKIY',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    {
      title: 'Тарко-Сале',
      alias: 'TARKO-SALE',
      region_title: 'Ямало-Ненецкий автономный округ'
    },
    { title: 'Кызыл', alias: 'KYZYL', region_title: 'Республика Тыва' },
    {
      title: 'Ак-Довурак',
      alias: 'AK-DOVURAK',
      region_title: 'Республика Тыва'
    },
    { title: 'Шагонар', alias: 'SHAGONAR', region_title: 'Республика Тыва' },
    { title: 'Чадан', alias: 'CHADAN', region_title: 'Республика Тыва' },
    { title: 'Туран', alias: 'TURAN', region_title: 'Республика Тыва' },
    { title: 'Элиста', alias: 'ELISTA', region_title: 'Республика Калмыкия' },
    { title: 'Лагань', alias: 'LAGAN', region_title: 'Республика Калмыкия' },
    {
      title: 'Городовиковск',
      alias: 'GORODOVIKOVSK',
      region_title: 'Республика Калмыкия'
    },
    { title: 'Магадан', alias: 'MAGADAN', region_title: 'Магаданская область' },
    { title: 'Сусуман', alias: 'SUSUMAN', region_title: 'Магаданская область' },
    {
      title: 'Биробиджан',
      alias: 'BIROBIDZHAN',
      region_title: 'Еврейская автономная область'
    },
    {
      title: 'Облучье',
      alias: 'OBLUCHE',
      region_title: 'Еврейская автономная область'
    },
    {
      title: 'Борисоглебск',
      alias: 'BORISOGLEBSK',
      region_title: 'Воронежская область'
    },
    { title: 'Россошь', alias: 'ROSSOSH', region_title: 'Воронежская область' },
    { title: 'Лиски', alias: 'LISKI', region_title: 'Воронежская область' },
    {
      title: 'Острогожск',
      alias: 'OSTROGOZHSK',
      region_title: 'Воронежская область'
    },
    {
      title: 'Нововоронеж',
      alias: 'NOVOVORONEZH',
      region_title: 'Воронежская область'
    },
    {
      title: 'Бутурлиновка',
      alias: 'BUTURLINOVKA',
      region_title: 'Воронежская область'
    },
    {
      title: 'Семилуки',
      alias: 'SEMILUKI',
      region_title: 'Воронежская область'
    },
    { title: 'Бобров', alias: 'BOBROV', region_title: 'Воронежская область' },
    {
      title: 'Поворино',
      alias: 'POVORINO',
      region_title: 'Воронежская область'
    },
    {
      title: 'Богучар',
      alias: 'BOGUCHAR',
      region_title: 'Воронежская область'
    },
    { title: 'Эртиль', alias: 'ERTIL', region_title: 'Воронежская область' },
    {
      title: 'Новохоперск',
      alias: 'NOVOHOPERSK',
      region_title: 'Воронежская область'
    },
    {
      title: 'Воронеж',
      alias: 'VORONEZH',
      region_title: 'Воронежская область'
    },
    {
      title: 'Павловск',
      alias: 'PAVLOVSK--PAVLOVSKIY-RAYON--VORONEZHSKAYA-OBLAST',
      region_title: 'Воронежская область'
    },
    { title: 'Калач', alias: 'KALACH', region_title: 'Воронежская область' },
    {
      title: 'Горно-Алтайск',
      alias: 'GORNO-ALTAYSK',
      region_title: 'Республика Алтай'
    },
    {
      title: 'Ахтубинск',
      alias: 'AHTUBINSK',
      region_title: 'Астраханская область'
    },
    {
      title: 'Харабали',
      alias: 'HARABALI',
      region_title: 'Астраханская область'
    },
    {
      title: 'Камызяк',
      alias: 'KAMYZYAK',
      region_title: 'Астраханская область'
    },
    {
      title: 'Нариманов',
      alias: 'NARIMANOV',
      region_title: 'Астраханская область'
    },
    {
      title: 'Астрахань',
      alias: 'ASTRAHAN',
      region_title: 'Астраханская область'
    },
    {
      title: 'Знаменск',
      alias: 'ZNAMENSK',
      region_title: 'Астраханская область'
    },
    {
      title: 'Нарьян-Мар',
      alias: 'NARYAN-MAR',
      region_title: 'Ненецкий автономный округ'
    },
    {
      title: 'Анадырь',
      alias: 'ANADYR',
      region_title: 'Чукотский автономный округ'
    },
    {
      title: 'Билибино',
      alias: 'BILIBINO',
      region_title: 'Чукотский автономный округ'
    },
    {
      title: 'Певек',
      alias: 'PEVEK',
      region_title: 'Чукотский автономный округ'
    },
    {
      title: 'Балашиха',
      alias: 'BALASHIHA',
      region_title: 'Московская область'
    },
    { title: 'Химки', alias: 'HIMKI', region_title: 'Московская область' },
    { title: 'Подольск', alias: 'PODOLSK', region_title: 'Московская область' },
    { title: 'Королев', alias: 'KOROLEV', region_title: 'Московская область' },
    { title: 'Мытищи', alias: 'MYTISHCHI', region_title: 'Московская область' },
    { title: 'Люберцы', alias: 'LYUBERCY', region_title: 'Московская область' },
    {
      title: 'Электросталь',
      alias: 'ELEKTROSTAL',
      region_title: 'Московская область'
    },
    { title: 'Коломна', alias: 'KOLOMNA', region_title: 'Московская область' },
    {
      title: 'Серпухов',
      alias: 'SERPUHOV',
      region_title: 'Московская область'
    },
    {
      title: 'Красногорск',
      alias: 'KRASNOGORSK',
      region_title: 'Московская область'
    },
    {
      title: 'Щёлково',
      alias: 'SHCHELKOVO',
      region_title: 'Московская область'
    },
    { title: 'Пушкино', alias: 'PUSHKINO', region_title: 'Московская область' },
    {
      title: 'Жуковский',
      alias: 'ZHUKOVSKIY',
      region_title: 'Московская область'
    },
    {
      title: 'Раменское',
      alias: 'RAMENSKOE',
      region_title: 'Московская область'
    },
    {
      title: 'Домодедово',
      alias: 'DOMODEDOVO',
      region_title: 'Московская область'
    },
    {
      title: 'Долгопрудный',
      alias: 'DOLGOPRUDNYY',
      region_title: 'Московская область'
    },
    { title: 'Реутов', alias: 'REUTOV', region_title: 'Московская область' },
    { title: 'Лобня', alias: 'LOBNYA', region_title: 'Московская область' },
    { title: 'Дубна', alias: 'DUBNA', region_title: 'Московская область' },
    {
      title: 'Егорьевск',
      alias: 'EGOREVSK',
      region_title: 'Московская область'
    },
    { title: 'Ступино', alias: 'STUPINO', region_title: 'Московская область' },
    {
      title: 'Павловский Посад',
      alias: 'PAVLOVSKIY-POSAD',
      region_title: 'Московская область'
    },
    { title: 'Чехов', alias: 'CHEHOV', region_title: 'Московская область' },
    {
      title: 'Ивантеевка',
      alias: 'IVANTEEVKA',
      region_title: 'Московская область'
    },
    { title: 'Видное', alias: 'VIDNOE', region_title: 'Московская область' },
    { title: 'Фрязино', alias: 'FRYAZINO', region_title: 'Московская область' },
    {
      title: 'Лыткарино',
      alias: 'LYTKARINO',
      region_title: 'Московская область'
    },
    {
      title: 'Солнечногорск',
      alias: 'SOLNECHNOGORSK',
      region_title: 'Московская область'
    },
    {
      title: 'Дзержинский',
      alias: 'DZERZHINSKIY',
      region_title: 'Московская область'
    },
    { title: 'Кашира', alias: 'KASHIRA', region_title: 'Московская область' },
    {
      title: 'Протвино',
      alias: 'PROTVINO',
      region_title: 'Московская область'
    },
    {
      title: 'Краснознаменск',
      alias: 'KRASNOZNAMENSK--MOSKOVSKAYA-OBLAST',
      region_title: 'Московская область'
    },
    { title: 'Шатура', alias: 'SHATURA', region_title: 'Московская область' },
    {
      title: 'Котельники',
      alias: 'KOTELNIKI',
      region_title: 'Московская область'
    },
    { title: 'Можайск', alias: 'MOZHAYSK', region_title: 'Московская область' },
    {
      title: 'Ликино-Дулёво',
      alias: 'LIKINO-DULEVO',
      region_title: 'Московская область'
    },
    {
      title: 'Луховицы',
      alias: 'LUHOVICY',
      region_title: 'Московская область'
    },
    { title: 'Дедовск', alias: 'DEDOVSK', region_title: 'Московская область' },
    {
      title: 'Красноармейск',
      alias: 'KRASNOARMEYSK--MOSKOVSKAYA-OBLAST',
      region_title: 'Московская область'
    },
    { title: 'Озеры', alias: 'OZERY', region_title: 'Московская область' },
    { title: 'Зарайск', alias: 'ZARAYSK', region_title: 'Московская область' },
    {
      title: 'Волоколамск',
      alias: 'VOLOKOLAMSK',
      region_title: 'Московская область'
    },
    { title: 'Кубинка', alias: 'KUBINKA', region_title: 'Московская область' },
    {
      title: 'Лосино-Петровский',
      alias: 'LOSINO-PETROVSKIY',
      region_title: 'Московская область'
    },
    {
      title: 'Электрогорск',
      alias: 'ELEKTROGORSK',
      region_title: 'Московская область'
    },
    {
      title: 'Старая Купавна',
      alias: 'STARAYA-KUPAVNA',
      region_title: 'Московская область'
    },
    {
      title: 'Куровское',
      alias: 'KUROVSKOE',
      region_title: 'Московская область'
    },
    { title: 'Хотьково', alias: 'HOTKOVO', region_title: 'Московская область' },
    { title: 'Рошаль', alias: 'ROSHAL', region_title: 'Московская область' },
    {
      title: 'Бронницы',
      alias: 'BRONNICY',
      region_title: 'Московская область'
    },
    {
      title: 'Черноголовка',
      alias: 'CHERNOGOLOVKA',
      region_title: 'Московская область'
    },
    { title: 'Пущино', alias: 'PUSHCHINO', region_title: 'Московская область' },
    {
      title: 'Электроугли',
      alias: 'ELEKTROUGLI',
      region_title: 'Московская область'
    },
    {
      title: 'Апрелевка',
      alias: 'APRELEVKA',
      region_title: 'Московская область'
    },
    {
      title: 'Голицыно',
      alias: 'GOLICYNO',
      region_title: 'Московская область'
    },
    {
      title: 'Звенигород',
      alias: 'ZVENIGOROD',
      region_title: 'Московская область'
    },
    {
      title: 'Пересвет',
      alias: 'PERESVET',
      region_title: 'Московская область'
    },
    { title: 'Талдом', alias: 'TALDOM', region_title: 'Московская область' },
    { title: 'Руза', alias: 'RUZA', region_title: 'Московская область' },
    {
      title: 'Краснозаводск',
      alias: 'KRASNOZAVODSK',
      region_title: 'Московская область'
    },
    { title: 'Яхрома', alias: 'YAHROMA', region_title: 'Московская область' },
    { title: 'Дрезна', alias: 'DREZNA', region_title: 'Московская область' },
    {
      title: 'Высоковск',
      alias: 'VYSOKOVSK',
      region_title: 'Московская область'
    },
    { title: 'Верея', alias: 'VEREYA', region_title: 'Московская область' },
    {
      title: 'Санкт-Петербург',
      alias: 'SANKT-PETERBURG',
      region_title: 'Санкт-Петербург',
      rating: 2
    },
    {
      title: 'Зеленогорск',
      alias: 'ZELENOGORSK--SANKT-PETERBURG',
      region_title: 'Санкт-Петербург'
    },
    {
      title: 'Павловск',
      alias: 'PAVLOVSK--SANKT-PETERBURG',
      region_title: 'Санкт-Петербург'
    },
    { title: 'Москва', alias: 'MOSKVA', region_title: 'Москва', rating: 1 },
    { title: 'Троицк', alias: 'TROICK--MOSKVA', region_title: 'Москва' },
    { title: 'Байконур', alias: 'BAYKONUR', region_title: 'Байканур' }
  ]

})
