//Логотип
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("LogoBtn");
    const body = document.body;
    let isBackground1 = true;
    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/image1.png')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function () {
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img');
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Это - я';
            pl.innerHTML = 'Создание собственного сайта – захватывающий процесс, требующий творчества, терпения и технических навыков. В этой статье я поделюсь своим опытом создания собственного веб-ресурса, начиная от идеи и заканчивая запуском.<br><br>Все начинается с идеи. Прежде чем приступить к созданию сайта, я задумался о его назначении и целях. Это может быть блог, интернет-магазин, портфолио или что-то еще. Я определил тематику, которая мне интересна, и которую я хотел бы делиться с другими.'
            il.src = 'images/валерчик_ред (2).jpg'; 
            ij.src = 'images/verstkasait.jpg';
            pj.innerHTML = 'Прежде чем броситься в разработку, я провел исследование в выбранной нише. Это помогло мне лучше понять конкуренцию, целевую аудиторию и особенности успешных сайтов в данной области. Затем я создал план, включающий в себя структуру сайта, функциональные требования и дизайн. <br><br> Выбор подходящего домена – важный шаг в создании сайта. Я выбрал краткое, легко запоминающееся имя, соответствующее тематике моего проекта. После этого я выбрал хостинг – платформу, на которой будет размещен мой сайт.'
        }, 200)
    });
});

//ФГП
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("FGBBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function(){
        body.style.backgroundImage = "url('images/ФГП.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function () {
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img');
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');
            
            el.innerHTML = 'Физико-географическое положение';
            pl.innerHTML = 'Южная Америка – уникальный континент, обладающий богатым физико-географическим положением, которое оказывает значительное влияние на климат, природные ресурсы и общую обстановку в регионе. Расположенная между Тихим и Атлантическим океанами, эта часть света впечатляет своим разнообразием ландшафтов и природных явлений. <br><br> Южная Америка ограничена на севере Панамой, которая соединяет ее с Северной Америкой. На западе континент омывается Тихим океаном, а на востоке — Атлантическим. Континент также включает в себя ряд прибрежных островов и архипелагов. Географические координаты Южной Америки простираются от 12° с.ш. на севере до 56° ю.ш. на юге, а долгота варьируется от 35° восточной долготы до 81° западной.'
            il.src = 'images/Страны.png'; 
            ij.src = 'images/ФГП-иннер1.jpg';
            pj.innerHTML = 'Рельеф Южной Америки разнообразен: от высокогорных хребтов в Андах до обширных долин и равнин в районах Бразилии и Аргентины. Горные цепи, водопады, пустыни, леса и равнины создают уникальный мозаичный облик континента.<br><br>Физико-географическое положение Южной Америки влияет на разнообразие климатических зон. Субэкваториальный климат в Амазонии сменяется умеренным на юге Чили и Аргентины. Анды, простирающиеся через континент, создают различия в климате на востоке и западе.'
        }, 200)
    })
});


//Климат
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("ClimateBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/Climate.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function () {
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');
            
            el.innerHTML = 'Климат';
            pl.innerHTML = 'Климатические особенности Южной Америки являются ключевым фактором, формирующим уникальную природу и биосистемы этого континента. От экваториальных лесов Амазонии до холодных ветров на юге Тьерра дель Фуэго, разнообразие климатических зон делает этот регион многогранным и захватывающим для исследования. <br><br>Северная часть Южной Америки, особенно бассейн Амазонки, находится в зоне субэкваториального климата. Здесь тепло и влажно в течение большей части года, с высокими температурами и постоянными осадками. Этот регион служит домом для самого большого дождевого леса на планете.'
            ij.src = 'images/Климат2.jpg';
            il.src = 'images/Климат1.jpg'; 
            pj.innerHTML = 'Анды, простирающиеся вдоль западного побережья Южной Америки, создают разнообразие климатических условий. С западной стороны гор характерен влажный климат, а с восточной – более сухой. В зависимости от высоты, температурные диапазоны могут значительно различаться, что влияет на растительность и виды, обитающие в этих регионах.<br><br>Северные части Южной Америки, такие как пустыня Атакама и саванны Венесуэлы, испытывают воздействие сухого климата. Эти регионы отличаются низкими осадками и высокими температурами, что создает условия для формирования уникальной флоры и фауны, приспособленных к жизни в экстремальных условиях.'
        }, 200)
    })
});


//Рельеф
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("MountainBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/Mountain.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Рельеф';
            pl.innerHTML = 'Рельеф Южной Америки представляет собой захватывающую картину разнообразия форм местности, от могучих гор Анд до бескрайних равнин в Бразилии. Этот континент обладает уникальным рельефом, который играет важную роль в формировании климата, водных систем и разнообразия биосферы.<br><br> Главным элементом рельефа Южной Америки являются высокогорные хребты Анд, протягивающиеся вдоль всего западного побережья. Эта горная система охватывает множество климатических зон, начиная от субтропиков в северной части до альпийских условий в южных регионах.'
            il.src = 'images/Рельеф.jpg'; 
            ij.src = 'images/Рельеф1.jpg';
            pj.innerHTML = 'Восточная часть Южной Америки, преимущественно в Бразилии, представляет собой обширные низменные равнины, включая Амазонскую бассейновую низменность. Здесь находится дождевой лес, который является одним из самых богатых биологических регионов на планете. Рельеф в этой области характеризуется небольшими возвышенностями и реками.<br><br>На западе континента выделяется пустыня Атакама, которая считается одной из самых сухих пустынь в мире. Вблизи Анд расположен Альтиплано – высокогорное плато, расположенное на высоте более 3 000 метров над уровнем моря. Этот регион характеризуется аридным климатом и впечатляющими геологическими формами.'
        }, 200)
    });
});


//Внутренние воды
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("RiverBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/River.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Внутренние воды';
            pl.innerHTML = 'Южная Америка славится своими разнообразными внутренними водами, которые играют важную роль в жизни региона. От величественных рек до кристально чистых озер, внутренние воды Южной Америки формируют уникальные экосистемы и предоставляют важные ресурсы для человечества.<br><br>Амазонка, являющаяся самой длинной рекой в мире, протекает через несколько стран, включая Бразилию, Перу и Колумбию. Она формирует обширную систему притоков и дренажных бассейнов, обеспечивая богатство биоразнообразия и важные водные ресурсы. Ориноко и Парана также являются крупными реками, оказывая влияние на климат и природу в своих регионах.'
            il.src = 'images/Внутренние1.jpg'; 
            ij.src = 'images/Внутренние2.jpg';
            pj.innerHTML = 'Озера и лагуны Южной Америки добавляют разнообразие в её внутренние воды. Титикака, расположенное в Андах, является самым высокогорным крупным озером в мире. Его чистые воды и уникальная флора и фауна делают его значимым экосистемным объектом. Марачалл в Венесуэле и Сан-Альберто в Аргентине – примеры красивых лагун и водохранилищ.<br><br>Южная Америка также славится своими великолепными водопадами. Анхель в Венесуэле считается самым высоким водопадом в мире. Река Игуасу, формирующая границу между Бразилией и Аргентиной, поражает своей мощью и красотой.'
        }, 200)
    });
});


//Флора и фауна 
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("AlpakasBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/альпака.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });
        
        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Флора и фауна';
            pl.innerHTML = 'Южная Америка поражает своим богатством флоры и фауны, создавая уникальные экосистемы, которые отражают разнообразие климатических и рельефных условий континента. От непроходимых девственных лесов до заснеженных высокогорных вершин, Южная Америка предлагает дом разнообразным и удивительным видам живых существ.<br><br>Амазонский дождевой лес, который занимает значительную часть Бразилии, Перу и Колумбии, представляет собой один из самых богатых и разнообразных регионов в мире. Здесь обитает непередаваемое количество видов растений, птиц, млекопитающих, насекомых и рептилий. Этот лес также служит домом для многих уникальных видов обезьян, таких как капуцины и тамарины.'
            il.src = 'images/Флора1.jpg'; 
            ij.src = 'images/Флора2.jpg';
            pj.innerHTML = 'На высокогорных плато Анд и Альпийских лугах обитают уникальные виды флоры и фауны, приспособленные к жизни в условиях высокой альпийской зоны. Эти регионы являются домом для викуньи, кондоров и многих других видов, которые успешно выживают в экстремальных климатических условиях.<br><br>Пустыни, такие как Атакама и Амазонская саванна, предоставляют свой собственный набор уникальной флоры и фауны, приспособленных к жизни в аридных условиях. Кактусы, ящерицы и анаконды – все они процветают в разнообразии климатических и рельефных зон.'
        }, 200)
    });
});


//Народы
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("PeopleBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/Ацтеки.jpg')";
        isBackground1 = !isBackground1;
        
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });
        
        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Народы';
            pl.innerHTML = 'Южная Америка — мозаика культур, традиций и народов, каждый из которых придает этому континенту уникальный колорит и характер. Соединение разнообразных этнических групп, языков и обычаев создает богатство культурного наследия, отражающего богатую историю и современность этого региона.<br><br>Индейцы, или коренные народы, составляют значительную часть населения Южной Америки. Они включают в себя разнообразные группы, такие как Кечуа в Андах, Аимара в Боливии и различные племена в Амазонии. Эти народы сохранили свои традиционные образы жизни, верования и ремесла, внося значительный вклад в культурное наследие региона.'
            il.src = 'images/Народы.jpeg'; 
            ij.src = 'images/Народы1.jpg';
            pj.innerHTML = 'Латиноамериканцы, являющиеся потомками европейцев и местного населения, представляют собой большую часть населения многих стран Южной Америки. Их культура отражает влияние испанского и португальского наследия, а также смешение различных традиций. Танго в Аргентине, самба в Бразилии и многочисленные фестивали являются выразителями этого разнообразия.<br><br>Присутствие афро-населения в Южной Америке коренится в периоде работорговли. Бразилия, Колумбия и Венесуэла являются примерами стран, где афро-диаспора существенно влияет на культуру, музыку и кулинарию. Здесь местные традиции сочетаются с африканскими элементами, создавая уникальный культурный синтез.'
        }, 200)
    });
});


//Страны
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("CountriesBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/Рио.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Страны';
            pl.innerHTML = 'Южная Америка представляет собой континент с разнообразными странами, каждая из которых обладает уникальной историей, культурой и экономикой. От крупнейших экономик региона до стран, богатых природными ресурсами, Южная Америка предлагает широкий спектр экономических моделей и вызовов.<br><br>Бразилия — самая крупная страна Южной Америки, обладающая разносторонней и динамичной экономикой. Бразильская экономика базируется на сельском хозяйстве, добыче природных ресурсов и индустриальном секторе. Страна также известна своим сельскими угодьями и крупнейшим в мире производством сахара и кофе.'
            il.src = 'images/Страны.jpg'; 
            ij.src = 'images/Страны2.jpg';
            pj.innerHTML = 'Аргентина занимает важное положение в экономической структуре Южной Америки. Её экономика основана на сельском хозяйстве, добыче полезных ископаемых, а также разнообразной промышленности. Страна является крупным экспортером сельскохозяйственной продукции, такой как соя и говядина.<br><br>Чили, расположенное на узкой полосе вдоль Тихого океана, имеет одну из самых стабильных экономик в регионе. Страна специализируется в добыче меди и других полезных ископаемых, а также в виноделии. Экономическая структура Чили также включает туризм и высокотехнологичные отрасли.'
        }, 200)
    });
});


//Словарь
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("BooksBtn");
    const body = document.body;
    let isBackground1 = true;

    button.addEventListener("click", function () {
        body.style.backgroundImage = "url('images/книжки.jpg')";
        isBackground1 = !isBackground1;

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию
        });

        setTimeout(function (){
            let el = document.getElementById('header-inner');
            let pl = document.getElementById('First-p');
            let il = document.getElementById('First-img')
            let ij = document.getElementById('Second-img');
            let pj = document.getElementById('Second-p');

            el.innerHTML = 'Словарь';
            pl.innerHTML = 'Амазонка (Amazon): Самая крупная река в мире, протекающая через Южную Америку. Бассейн Амазонки является домом для разнообразных видов растений и животных. <br><br> Анды (Andes): Самая длинная горная система в мире, протягивающаяся через семь стран Южной Америки. Они играют важную роль в климате и географии региона. <br><br>Форталеза (Fortaleza): Крупный город в северо-восточной Бразилии, популярный курорт с красивыми пляжами и культурными достопримечательностями.'
            il.src = 'images/Knigi555.jpg'; 
            ij.src = 'images/Книгидерево.jpg';
            pj.innerHTML = 'Инковская империя (Inca Empire): Древняя цивилизация, процветавшая в районе Анд до прихода испанских завоевателей в XVI веке. <br><br>Мачу-Пикчу (Machu Picchu): Древний инковский город, расположенный в горах Анд, считается одним из величайших архитектурных и археологических памятников мира. <br><br>Танго (Tango): Традиционный музыкальный и танцевальный стиль, зародившийся в Аргентине и Уругвае. <br><br>Ла-Плата (La Plata): Одна из крупнейших рек в Южной Америке, протекающая через Аргентину, Бразилию, Парагвай и Уругвай.'
        }, 200)
    });
});

