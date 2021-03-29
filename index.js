const fs=require('fs');
const carbone =require('carbone');

carbone.set({
    lang:'ru',
    timezone:'Europe/Moscow'
});

const data={
    contractNumber:12,
    date:'2021-03-26',
    actDate:'2021-03-27',
    person:{
        name:'Иванов',
        secondName:'Денис',
        patronymic:'Семенович',
        dateOfBorn:'1987-06-22',
        passport:'ТП УФМС России по УР',
        dateOfIssue:'2012-06-14',
        INN:'123456789012',
        BIK:'043999999',
        acct:'40817810024325532124',
        ks:'30101810200234535355',
        registered:'2021-02-11',
        taxInspectorate:'Межрайонаая инспекция федеральной налоговой службы №111 по УР',
        mailAddress:'Россия, УР, г. Ижевск, ул. Пушкинская д.38',
        phoneNumber:'88888888888',
        email:'user@domain.com',
        initials:'Иванов Д.С.'
    },
    contractDetails:{
        duty:'генератора документа по шаблону',
        require1:'Список заявок на разработку ПО',
        require2:'Форма ввода заявки на разработку ПО',
        require3:'Генератор договора возмездного оказания услуг по шаблону',
        require4:'Генератор акта сдачи-приемки оказанных услуг по шаблону',
        dateOfStart:'2021-02-11',
        dateOfEnd:'2021-03-13',
    },
    accomplished:{
        service1:'реализация сервиса хранения данных',
        service2:'реализация сервиса добавления данных',
    },
    price:{
        number:'10639',
        secondNumber:'00',
        text:'десять тысяч шестьсот тридцать девять рублей',
    },
    customer:{
        email:'devpartners@bystrobank.ru'
    },
    payment:{
        number:'30',
        text:'тридцати',
    },
    renouncement:{
        number:'3',
        text:'три',
    }
}

carbone.render('./templates/contract_onetime.odt', data, function(err, result){
    if(err){
        return console.log(err);
    }
    fs.writeFileSync('result.odt', result);
});