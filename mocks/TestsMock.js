export const testsMock = [
    {
        id: 0,
        name: 'Шкала депрессии Бека',
        description: 'Шкала содержит 21 категорию симптомов и жалоб из числа наиболее частовстречающихся у пациентов с депрессией. Каждая категория состоит из 4-5 утверждений,соответствующих специфическим признакам депрессии. Утверждения распределены сучетом повышения значимости вклада определяемых показателей в общую степеньтяжести депрессии',
        // questions: { type: 'list', objectType: 'Question' },
        // results: { type: 'list', objectType: 'Result' },
        questions: [
            {
                id: 0, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 0, text: 'Я не чувствую себя расстроенным, печальным.', score: 0 },
                    { id: 1, text: 'Я расстроен.', score: 1 },
                    { id: 2, text: 'Я все время расстроен и не могу от этого отключиться.', score: 2 },
                    { id: 3, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать.', score: 3 },
                ],
            },
            {
                id: 1, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 4, text: 'Думая о будущем, я не чувствую себя особенно разочарованным.', score: 0 },
                    { id: 5, text: 'Думая о будущем, я чувствую себя особенно разочарованным.', score: 1 },
                    { id: 6, text: 'Я чувствую, что мне нечего ждать в будущем.', score: 2 },
                    { id: 7, text: 'Я чувствую, что будущее безнадежно и ничто не изменится к лучшему.', score: 3 },
                ],
            },
            {
                id: 2, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 8, text: 'Я не чувствую себя неудачником.', score: 0 },
                    { id: 9, text: 'Я чувствую, что у меня было больше неудач, чем у большинства других людей.', score: 1 },
                    { id: 10, text: 'Когда я оглядываюсь на прожитую жизнь, все, что я вижу, это череда неудач.', score: 2 },
                    { id: 11, text: 'Я чувствую себя полным неудачником.', score: 3 },
                ],
            },
            {
                id: 3, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 12, text: 'Я не чувствую себя особо виноватым.', score: 0 },
                    { id: 13, text: 'Довольно часто я чувствую себя виноватым.', score: 1 },
                    { id: 14, text: 'Почти всегда я чувствую себя виноватым.', score: 2 },
                    { id: 15, text: 'Я чувствую себя виноватым все время.', score: 3 },
                ],
            },
            {
                id: 4, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 16, text: 'Я не испытываю разочарования в себе.', score: 0 },
                    { id: 17, text: 'Я разочарован в себе.', score: 1 },
                    { id: 18, text: 'Я внушаю себе отвращение.', score: 2 },
                    { id: 19, text: 'Я ненавижу себя.', score: 3 },
                ],
            },
            {
                id: 5, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 20, text: 'У меня нет чувства, что я хуже других.', score: 0 },
                    { id: 21, text: 'Я самокритичен и признаюсвои слабости и ошибки.', score: 1 },
                    { id: 22, text: 'Я все время виню себя за свои ошибки.', score: 2 },
                    { id: 23, text: 'Я виню себя за все плохое, что происходит.', score: 3 },
                ],
            },
            {
                id: 6, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 24, text: 'Я плачу больше, чем обычно.', score: 0 },
                    { id: 25, text: 'Сейчас я плачу больше обычного.', score: 1 },
                    { id: 26, text: 'Я все время плачу.', score: 2 },
                    { id: 27, text: 'Раньше я еще мог плакать, но теперь не смогу, даже если захочу.', score: 3 },
                ],
            },
            {
                id: 7, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 28, text: 'Сейчас я не более раздражен, чем обычно.', score: 0 },
                    { id: 29, text: 'Я раздражаюсь легче, чем раньше, даже по пустякам.', score: 1 },
                    { id: 30, text: 'Сейчас я все время раздражен', score: 2 },
                    { id: 31, text: 'Меня уже ничто не раздражает, потому что все стало безразлично.', score: 3 },
                ],
            },
            {
                id: 8, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 32, text: 'Я не потерял интереса к другим людям.', score: 0 },
                    { id: 33, text: 'У меня меньше интереса к другим людям, чем раньше.', score: 1 },
                    { id: 34, text: 'Я почти утратил интерес к другим людям.', score: 2 },
                    { id: 35, text: 'Я потерял всякий интерес к другим людям.', score: 3 },
                ],
            },
            {
                id: 9, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 36, text: 'Я способен принимать решения так же, как всегда.', score: 0 },
                    { id: 37, text: 'Я откладываю принятие решений чаще, чем обычно.', score: 1 },
                    { id: 38, text: 'Я испытываю больше трудностей в принятии решений, чем прежде.', score: 2 },
                    { id: 39, text: 'Я больше не могу принимать каких-либо решений.', score: 3 },
                ],
            },
            {
                id: 10, text: 'Что лучше описывает ваше состояние за прошедшую неделю и сегодня?',
                answers: [
                    { id: 40, text: 'Я не чувствую, что я выгляжу хуже, чем обычно. ', score: 0 },
                    { id: 41, text: 'Я обеспокоен тем, что выгляжу непривлекательным.', score: 1 },
                    { id: 42, text: 'Я чувствую, что изменения, происшедшие в моей внешности, сделали меня непривлекательным.', score: 2 },
                    { id: 43, text: 'Я уверен, что выгляжу безобразно.', score: 3 },
                ],
            },
        ],
        results: [
            { id: 0, title: 'Отсутствие депрессивных симптомов.', min_score: 0, max_score: 8, description: 'Вы не проявляет признаков депрессии, настроение стабильное, нет утраты интереса к жизни или удовлетворения.' },
            { id: 1, title: 'Субдепрессия, умеренная депрессия.', min_score: 9, max_score: 17, description: 'Легкая форма депрессии, характеризующаяся периодическими эпизодами грусти, пессимизма, усталости, но с сохранением способности к выполнению обычных ежедневных задач.' },
            { id: 2, title: 'Выраженная депрессия средней тяжести.', min_score: 18, max_score: 25, description: 'Симптомы депрессии более ярко выражены, возможно значительное снижение способности к работе и общению, трудности с концентрацией, возможны мысли о смерти или самоповреждении.' },
            { id: 3, title: 'Тяжелая депрессия', min_score: 26, max_score: 33, description: 'Самая серьезная форма депрессии, характеризующаяся глубокой грустью, апатией, потерей интереса к жизни, значительными нарушениями сна и аппетита, мыслями о смерти или самоповреждении, возможно потеря способности к нормальной жизнедеятельности. Требуется профессиональная помощь и поддержка.' },
        ],
        profiles: { type: 'list', objectType: 'Profile' },
    },
    {
        id: 1,
        name: 'Шкала самоуважения Розенберга',
        description: 'Шкала самооценки Розенберга является инструментом, который помогает измерить уровень самоуважения у человека. Результаты шкалы могут помочь определить, насколько человек имеет позитивное или негативное отношение к себе и оценить его уровень самооценки.',
        questions: [
            {
                id: 11, text: 'В целом я доволен собой',
                answers: [
                    { id: 44, text: 'Полностью не согласен.', score: 0 },
                    { id: 45, text: 'Не согласен.', score: 1 },
                    { id: 46, text: 'Согласен.', score: 2 },
                    { id: 47, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 12, text: 'Мне кажется, что я хорош во многих вещах',
                answers: [
                    { id: 48, text: 'Полностью не согласен.', score: 0 },
                    { id: 49, text: 'Не согласен.', score: 1 },
                    { id: 50, text: 'Согласен.', score: 2 },
                    { id: 51, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 13, text: 'Думаю у меня есть ряд достоинств.',
                answers: [
                    { id: 52, text: 'Полностью не согласен.', score: 0 },
                    { id: 53, text: 'Не согласен.', score: 1 },
                    { id: 54, text: 'Согласен.', score: 2 },
                    { id: 55, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 14, text: 'Многие вещи я способен делать не хуже большиснтва других людей.',
                answers: [
                    { id: 56, text: 'Полностью не согласен.', score: 0 },
                    { id: 57, text: 'Не согласен.', score: 1 },
                    { id: 58, text: 'Согласен.', score: 2 },
                    { id: 59, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 15, text: 'Мне кажется, что мне есть чем гордиться.',
                answers: [
                    { id: 60, text: 'Полностью не согласен.', score: 0 },
                    { id: 61, text: 'Не согласен.', score: 1 },
                    { id: 62, text: 'Согласен.', score: 2 },
                    { id: 63, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 16, text: 'Иногда я чувствую себя бесполезным.',
                answers: [
                    { id: 64, text: 'Полностью не согласен.', score: 0 },
                    { id: 65, text: 'Не согласен.', score: 1 },
                    { id: 66, text: 'Согласен.', score: 2 },
                    { id: 67, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 17, text: 'Я считаю себя достойным и равным другим людям человеком.',
                answers: [
                    { id: 68, text: 'Полностью не согласен.', score: 0 },
                    { id: 69, text: 'Не согласен.', score: 1 },
                    { id: 70, text: 'Согласен.', score: 2 },
                    { id: 71, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 18, text: 'Я считаю себя достойным и равным другим людям человеком.',
                answers: [
                    { id: 72, text: 'Полностью не согласен.', score: 0 },
                    { id: 73, text: 'Не согласен.', score: 1 },
                    { id: 74, text: 'Согласен.', score: 2 },
                    { id: 75, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 20, text: 'Мне бы хотелось больше уважать себя.',
                answers: [
                    { id: 76, text: 'Полностью не согласен.', score: 0 },
                    { id: 77, text: 'Не согласен.', score: 1 },
                    { id: 78, text: 'Согласен.', score: 2 },
                    { id: 79, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 21, text: 'Я довольно удачливый человек.',
                answers: [
                    { id: 80, text: 'Полностью не согласен.', score: 0 },
                    { id: 81, text: 'Не согласен.', score: 1 },
                    { id: 82, text: 'Согласен.', score: 2 },
                    { id: 83, text: 'Полностью согласен.', score: 3 },
                ],
            },
            {
                id: 22, text: 'Я хорошо отношусь к себе',
                answers: [
                    { id: 84, text: 'Полностью не согласен.', score: 0 },
                    { id: 85, text: 'Не согласен.', score: 1 },
                    { id: 86, text: 'Согласен.', score: 2 },
                    { id: 87, text: 'Полностью согласен.', score: 3 },
                ],
            },
        ],
        results: [
            { id: 4, title: 'Низкий уровен', min_score: 0, max_score: 15, description: 'Личность с низким уровнем самоуважения склонна к сомнениям в своих способностях, часто ощущает себя неполноценным, неуверенным, может испытывать чувство стыда и вины. Такие люди могут зависеть от мнения окружающих, страдать от перфекционизма и часто сравнивать себя с другими.' },
            { id: 5, title: 'Средний уровень', min_score: 16, max_score: 25, description: 'Личность с средним уровнем самоуважения имеет баланс между уверенностью в себе и здоровой самокритикой. Она может адекватно оценивать свои достоинства и недостатки, не зависит от постоянного одобрения окружающих, способна принимать критику и стремится к личностному росту.' },
            { id: 6, title: 'Высокий уровень', min_score: 26, max_score: 33, description: 'Личность с высоким уровнем самоуважения обладает уверенностью в себе, позитивным отношением к себе и своим способностям. Она не нуждается в постоянном одобрении других, способна принимать решения независимо от мнения окружающих, чувствует себя ценной и достойной любви и уважения.' },
        ],
        profiles: { type: 'list', objectType: 'Profile' },
    },
];
