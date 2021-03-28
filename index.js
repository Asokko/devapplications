const fs=require('fs');
const carbone =require('carbone');

const data={
    contractNumber:12,
    date:{
        day:'26',
        mounth:'03',
        yearLastNumber:'1'
    },
    actDate:{
        day:'27',
        mounth:'03',
        yearLastNumber:'1'
    },
    person:{
        name:'Иванов',
        secondName:'Денис',
        patronymic:'Семенович',
        dateOfBorn:'22.06.1987',
        passport:'Паспорт ТП УФМС России по УР',
        dateOfIssue:'14.06.2012',
        INN:'123456789012',
        BIK:'043999999',
        acct:'40817810024325532124',
        ks:'30101810200234535355',
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
        require3:'Генератор договора возмездного оказания услуг по шаблону ',
        require4:'Генератор акта сдачи-приемки оказанных услуг по шаблону',
        dateOfStart:'11.02.2021',
        dataOfEnd:'13.03.2021',
        dayStart:'11',
        mounthStart:'февраля',
        dayEnd:'13',
        mounthEnd:'марта',
        yearLastNumber:'1',
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