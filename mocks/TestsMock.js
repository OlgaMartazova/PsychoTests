export const testsMock = [
    {
        id: 0,
        name: 'Шкала депрессии Бека',
        description: 'Шкала содержит 21 категорию симптомов и жалоб из числа наиболее частовстречающихся у пациентов с депрессией. Каждая категория состоит из 4-5 утверждений,соответствующих специфическим признакам депрессии. Утверждения распределены сучетом повышения значимости вклада определяемых показателей в общую степеньтяжести депрессии',
        // questions: { type: 'list', objectType: 'Question' },
        // results: { type: 'list', objectType: 'Result' },
        questions: [
            {
                id: 0, text: 'Как Вы чувствовали себя на этой неделе и сегодня?',
                answers: [
                    { id: 0, text: 'Я не чувствую себя расстроенным, печальным', score: 0 },
                    { id: 1, text: 'Я расстроен', score: 1 },
                    { id: 2, text: 'Я все время расстроен и не могу от этого отключиться', score: 2 },
                    { id: 3, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать', score: 3 },
                ],
            },
            {
                id: 1, text: 'Интерес к другим людям падает',
                answers: [
                    { id: 4, text: 'Я не чувствую себя расстроенным, печальным', score: 0 },
                    { id: 5, text: 'Я расстроен', score: 1 },
                    { id: 6, text: 'Я все время расстроен и не могу от этого отключиться', score: 2 },
                    { id: 7, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать', score: 3 },
                ],
            },
        ],
        results: [
            { id: 0, title: 'Легкая депрессия', min_score: 0, max_score: 9, description: 'Люди с легкой депрессией могут испытывать чувство печали, усталости, потери интереса к удовольствиям, изменения в аппетите или сна, но эти симптомы могут быть менее интенсивными и могут меняться со временем. Важно обратиться к специалисту для оценки и поддержки при любых симптомах депрессии, включая легкую' },
            { id: 1, title: 'Средняя депрессия', min_score: 10, max_score: 19, description: 'Описание средней депрессии' },
        ],
        profiles: { type: 'list', objectType: 'Profile' },
    },
    {
        id: 1,
        name: 'Шкала самоуважения Розенберга',
        description: 'Описание теста',
        questions: [
            {
                id: 2, text: 'Как Вы чувствовали себя на этой неделе и сегодня?',
                answers: [
                    { id: 8, text: 'Я не чувствую себя расстроенным, печальным', score: 0 },
                    { id: 9, text: 'Я расстроен', score: 1 },
                    { id: 10, text: 'Я все время расстроен и не могу от этого отключиться', score: 2 },
                    { id: 11, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать', score: 3 },
                ],
            },
            {
                id: 3, text: 'Интерес к другим людям падает',
                answers: [
                    { id: 12, text: 'Я не чувствую себя расстроенным, печальным', score: 0 },
                    { id: 13, text: 'Я расстроен', score: 1 },
                    { id: 14, text: 'Я все время расстроен и не могу от этого отключиться', score: 2 },
                    { id: 15, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать', score: 3 },
                ],
            },
        ],
        results: [
            { id: 2, title: 'Легкая депрессия', min_score: 0, max_score: 9, description: 'Люди с легкой депрессией могут испытывать чувство печали, усталости, потери интереса к удовольствиям, изменения в аппетите или сна, но эти симптомы могут быть менее интенсивными и могут меняться со временем. Важно обратиться к специалисту для оценки и поддержки при любых симптомах депрессии, включая легкую' },
            { id: 3, title: 'Средняя депрессия', min_score: 10, max_score: 19, description: 'Описание средней депрессии' },
        ],
        profiles: { type: 'list', objectType: 'Profile' },
    },
];
