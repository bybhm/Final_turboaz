const All_Label_Buttons = document.querySelectorAll('.radio__label');
const Form = document.getElementById('forms');
const notifContainer = document.querySelector('.notifContainer');
const reserbtn = document.querySelector('.reset');
const navbtn = document.querySelector('.menuicon');
const DataBase = [
    {
        Make: 'Toyota',
        Model: 'Prius',
        Category: 'Kreditdədir',
        Price: '11,000 AZN',
        Year: 2006,
        Engine: '1.5 L',
        Mileage: '240,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 11:02',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F08%2F18%2F06%2F49%2F7b78b116-f0bd-4599-b864-3ebee8a14f87%2F88086_FTJ6nh9AoWti1ypAi84ArQ.jpg',
    },
    {
        Make: 'Porsche',
        Model: 'Panamera 4',
        Category: 'Barter mümkündür',
        Price: '$23,800',
        Year: 2010,
        Engine: '3.6 L',
        Mileage: '148,000 km',
        Location: 'Bakı',
        Date_Posted: '22.09.2023 14:37',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F22%2F14%2F21%2F09%2F39450ce3-2b7a-41d3-864b-26bafa1c9b92%2F91812_7N2uaEsCdCReqT59-7YN9w.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'GLC 220',
        Category: 'VIN',
        Price: '$33,900',
        Year: 2016,
        Engine: '2.2 L',
        Mileage: '135,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 11:30',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F05%2F09%2F21%2F00%2F133946df-f988-459f-92ae-c5d21a1922bc%2F88088_J9crWgl9_nhIEOaojUvY6g.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'ML 350',
        Price: '$29,000',
        Year: 2012,
        Engine: '3.5 L',
        Mileage: '75,000 km',
        Location: 'Bakı',
        Date_Posted: '30.09.2023 21:40',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F14%2F23%2F09%2F56%2F7b85e677-f35b-43b1-963f-ccce7c466c75%2F3637_4bvop1VXLoJXDAlG2WGlqg.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'E 220',
        Price: '$33,000',
        Year: 2016,
        Engine: '1.9 L',
        Mileage: '175,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 00:01',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F08%2F17%2F13%2F32%2F06c13d69-63e8-478e-bfe3-6948f00e7090%2F3626_x69rUnbhOHrQ92JJpQEkKQ.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'AMG GT S',
        Category: 'Kreditdədir',
        Price: '$153,000',
        Year: 2015,
        Engine: '4.0 L',
        Mileage: '42,000 km',
        Location: 'Bakı',
        Date_Posted: '17.09.2023 05:18',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F19%2F17%2F46%2F28%2F6d613547-5cae-4aa7-83e6-f5cfc7f516e4%2F35492_j2cExzr9EMxd-6S8hDbWAg.jpg',
    },
    {
        Make: 'Toyota',
        Model: 'Corolla',
        Price: '23,500 AZN',
        Year: 2014,
        Engine: '1.5 L',
        Mileage: '62,000 km',
        Location: 'Bakı',
        Date_Posted: 'dünən 09:39',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F30%2F17%2F23%2F24%2Ff6f1e571-f859-41ae-a861-617ea5d26326%2F91800_37qzti0VrdH_ioYCZjUJNA.jpg',
    },
    {
        Make: 'BMW',
        Model: '330',
        Category: 'Barter mümkündür',
        Price: '$24,400',
        Year: 2017,
        Engine: '2.0 L',
        Mileage: '77,400 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 14:00',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F25%2F16%2F56%2F53%2F38fb09cc-f43e-4465-8330-0526fab73efb%2F91825_AxGbkyABBa5i83YmfQFs5w.jpg',
    },
    {
        Make: 'BMW',
        Model: '530e',
        Category: 'Barter mümkündür',
        Price: '$43,400',
        Year: 2018,
        Engine: '2.0 L',
        Mileage: '59,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F09%2F14%2F14%2F47%2F2852e96f-4f52-4ce1-8a99-587cb7c725e1%2F91815_3PAa-TAvgrPGVlAHQ24Yyg.jpg',
    },
    {
        Make: 'Lexus',
        Model: 'ES 300h',
        Price: '$48,900',
        Year: 2022,
        Engine: '2.5 L',
        Mileage: '1,100 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F12%2F11%2F23%2F40%2Fe18c04fa-986c-4a25-945f-24af347ecdf9%2F88110_bAup4yzXwGhUKznLcWJiRw.jpg',
    },
    {
        Make: 'BMW',
        Model: 'X5',
        Category: 'Salon',
        Price: '$74,900',
        Year: 2021,
        Engine: '2.0 L',
        Mileage: '31,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F05%2F13%2F01%2F38%2Ffaa0dd18-69a6-4ab0-991e-d5f63a0a9b65%2F88066_AW-lg-ReBluDb_IalhTFtw.jpg',
    },
    {
        Make: 'Chevrolet',
        Model: 'Spark',
        Category: 'Barter mümkündür',
        Price: '19,500 AZN',
        Year: 2022,
        Engine: '1.3 L',
        Mileage: '12,100 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F11%2F59%2F04a36278-422f-4a65-ab6d-86581e8b4815%2F88109_pFVDAGaExuz4WzrUsaogbg.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'G 63 AMG',
        Price: '$71,500',
        Year: 2014,
        Engine: '5.5 L',
        Mileage: '102,500 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F09%2F12%2F04%2F39%2F6da5159c-37e7-411c-8304-d3018027db68%2F91826_9ckGsnjiwwr9vCxtqbrofA.jpg',
    },
    {
        Make: 'Kia',
        Model: 'Rio',
        Price: '11,000 AZN',
        Year: 2006,
        Engine: '1.4 L',
        Mileage: '205,125 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F06%2F21%2Fea6906dc-3be0-469f-a6b9-92a3a8b2a235%2F3636_7Kt19qHU9s6GyflECU90iA.jpg',
    },
    {
        Make: 'Ford',
        Model: 'Transit',
        Price: '21,000 AZN',
        Year: 2007,
        Engine: '2.2 L',
        Mileage: '123,900 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F10%2F17%2F40%2F04%2Fe5034a07-1936-4897-b660-e000f2d7d075%2F91795_97EHtxvzjKrAFm79J2bOVg.jpg',
    },
    {
        Make: 'LADA (VAZ)',
        Model: 'Niva',
        Price: '10,800 AZN',
        Year: 2015,
        Engine: '1.7 L',
        Mileage: '174,000 km',
        Location: 'İsmayıllı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F26%2F13%2F58%2F19%2Fb1434b22-747f-49dc-941b-f871e6affe11%2F88114_QLR2o-axSQkS3uDBbiaumg.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'E 300',
        Price: '$26,950',
        Year: 2013,
        Engine: '3.5 L',
        Mileage: '146,980 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:28',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F05%2F15%2F23%2F31%2F8892958d-9bf2-44b1-ade3-44de1980e48d%2F91824_G29lSC9TZ4nDMQ8I8Ln60A.jpg',
    },
    {
        Make: 'Ford',
        Model: 'Fusion',
        Category: 'Kreditdədir',
        Price: '26,300 AZN',
        Year: 2020,
        Engine: '1.5 L',
        Mileage: '56,327 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F06%2F11%2F44%2F13%2F445b7a29-f16f-4fbd-b5a1-205028fdea57%2F3610_ScnaB5nJdZzODfRce9XEJw.jpg',
    },
    {
        Make: 'UAZ',
        Model: 'Patriot',
        Price: '22,500 AZN',
        Year: 2003,
        Engine: '2.2 L',
        Mileage: '165,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F21%2F12%2F31%2F40%2Fc7dc66b3-5500-4c8c-9419-bb16eeaa3327%2F60324_lTx6bdruiSVs33K0IMh7eQ.jpg',
    },
    {
        Make: 'BMW',
        Model: '528',
        Price: '44,900 AZN',
        Year: 2011,
        Engine: '2.0 L',
        Mileage: '91,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F12%2F13%2F17%2F35%2Fe2430bac-9401-4d53-bb56-026d73f1e9bd%2F3649_0vTXHrQm2SMugDLFWkXDMg.jpg',
    },
    {
        Make: 'BMW',
        Model: '328',
        Price: '$19,000',
        Year: 2013,
        Engine: '2.0 L',
        Mileage: '109,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F27%2F14%2F17%2F33%2F69815a68-6792-4134-8a18-084ec0a0ef00%2F3634_u4Uk_4XgKwUr0c4IMEF55Q.jpg',
    },
    {
        Make: 'Land Rover',
        Model: 'Discovery',
        Category: 'Barter mümkündür',
        Price: '$64,000',
        Year: 2021,
        Engine: '2.0 L',
        Mileage: '58,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F12%2F15%2F03%2F01%2Fa0e385ed-3d64-4a96-a613-fb8bbccf4a6f%2F91788_GEuEGPISWzf9DVqRDU-ltw.jpg',
    },
    {
        Make: 'Honda',
        Model: 'CR-V',
        Price: '7,350 AZN',
        Year: 1999,
        Engine: '2.0 L',
        Mileage: '131,000 km',
        Location: 'Sumqayıt',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F14%2F48%2Fa4cc990a-7801-4eb3-aef5-d60129cae1e7%2F3630_xjE-Omp1Ve0Yv-OtU4bH9Q.jpg',
    },
    {
        Make: 'Mitsubishi',
        Model: 'Pajero Sport',
        Price: '$31,500',
        Year: 2018,
        Engine: '3.0 L',
        Mileage: '22,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:27',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F20%2F11%2Fd59f3619-2682-44b3-9683-ec616d322bfe%2F88086_IiLUhcEQ2_xmIhctzmOrRQ.jpg',
    },
    {
        Make: 'BMW',
        Model: '530',
        Category: 'Barter mümkündür',
        Price: '18,000 AZN',
        Year: 2005,
        Engine: '3.0 L',
        Mileage: '419,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:26',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F20%2F03%2Fb62016cd-f91f-45de-a66c-0aecc2985999%2F3638_EV05Ef36RDCkvQr34Yb16w.jpg',
    },
    {
        Make: 'Mercedes',
        Model: 'C 180',
        Price: '12,000 AZN',
        Year: 2000,
        Engine: '1.8 L',
        Mileage: '305,056 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:26',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F14%2F35%2F10%2F606430c2-ab77-484b-aa17-7905aaf532ba%2F88087_AFrdNKOb5BFYUvVRk8RH8w.jpg',
    },
    {
        Make: 'MG',
        Model: 'One',
        Category: 'Barter mümkündür',
        Price: '46,500 AZN',
        Year: 2023,
        Engine: '1.5 L',
        Mileage: '0 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:26',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F17%2F14%2F16%2F06%2F38c2f565-455b-4e17-bdcf-c26c2584838e%2F40053_YTPdArnrR1kluJmKIroS7Q.jpg',
    },
    {
        Make: 'MG',
        Model: '4 EV',
        Category: 'Barter mümkündür',
        Price: '50,500 AZN',
        Year: 2023,
        Engine: '0.0 L',
        Mileage: '0 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:26',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F21%2F18%2F49%2F58%2F944756b3-ce06-48cb-bf75-1352c5bbfaf8%2F91817_8_kuBxsmiTjVipkCQ7WynQ.jpg',
    },
    {
        Make: 'Opel',
        Model: 'Astra',
        Category: 'Kreditdədir',
        Price: '12,600 AZN',
        Year: 2006,
        Engine: '1.4 L',
        Mileage: '206,112 km',
        Location: 'Sumqayıt',
        Date_Posted: 'bugün 15:25',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F13%2F15%2F20%2F01%2F1c0c5b42-1c00-4551-b888-ac47d300a45d%2F3645_68PvS5uNYcCsXPTKmpCHAA.jpg',
    },
    {
        Make: 'BMW',
        Model: '535',
        Category: 'Barter mümkündür',
        Price: '$24,400',
        Year: 2013,
        Engine: '3.0 L',
        Mileage: '77,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:25',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F06%2F15%2F03%2F16%2Fc634c78d-a6fa-431f-ae6d-3a702a5b4240%2F3605_PNZmRrbL3sZARHKR9zQJzA.jpg',
    },

    {
        Make: 'Mercedes',
        Model: 'Vito',
        Price: '17,500 AZN',
        Year: 2007,
        Engine: '2.2 L',
        Mileage: '219,000 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:25',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F03%2F18%2F28%2F02%2Ff72a47dd-d120-4ba6-9585-13ea66b82055%2F88084_y6D6rz_m5e1_ug8-CmfcGQ.jpg',
    },
    {
        Make: 'Toyota',
        Model: 'Highlander',
        Category: 'Barter mümkündür',
        Price: '$58,900',
        Year: 2023,
        Engine: '2.5 L',
        Mileage: '0 km',
        Location: 'Bakı',
        Date_Posted: 'bugün 15:25',
        src: 'https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F21%2F19%2F23%2F28%2Fd2f63e07-99c0-48f3-9b70-82f9eaf45d99%2F31262_3UuMmOsiFh8HensUQnPPlA.jpg',
    },
];

const SelectOptions = () => {
    const marka = document.querySelector('.cars');
    const model = document.querySelector('.models');
    const seher = document.querySelector('.citys');    
    const uniqueMakes = new Set();
    DataBase.forEach((element, index) => {
        const make = element.Make;
        const modelValue = element.Model;
        const locationValue = element.Location;
        if (!uniqueMakes.has(make)) {
            const htmlElemValMake = `<option value='${make}'>${make}</option>`;
            marka.innerHTML += htmlElemValMake;
            uniqueMakes.add(make);
        }
        const htmlElemValModel = `<option value='${modelValue}' key='${index}'>${modelValue}</option>`;
        const htmlElemValLocation = `<option value='${locationValue}' key='${index}'>${locationValue}</option>`;
        model.innerHTML += htmlElemValModel;
        seher.innerHTML += htmlElemValLocation;
    });
};

const handleSubmit = (e) => {
    const Model = e.target.cars.value;
    const MakeModel = e.target.Model.value;
    const City = e.target.Cities.value;
    e.preventDefault();
    if (
        City == 'city_select' &&
        Model == 'cars_select' &&
        MakeModel == 'model'
    ) {
        createNotification('Select Citiy and Car and Model!');
    } else if (Model == 'cars_select') {
        createNotification('Select Model!');
    } else if (City == 'city_select') {
        createNotification('Select Citiy!');
    } else if (MakeModel == 'model') {
        createNotification('Select Car!');
    } else if (e.target.myRadio.value == 'option1') {
        renderForAll(Model, MakeModel, City);
    } else if (e.target.myRadio.value == 'option2') {
        renderForNew(Model, MakeModel, City);
    } else if (e.target.myRadio.value == 'option3') {
        renderForOld(Model, MakeModel, City);
    }
};

const renderForAll = (Model, Mk, City) => {
    const Updated_Db_all = DataBase.filter((item) => {
        return item.Make == Model && item.Location == City && item.Model == Mk;
    });
    if (Updated_Db_all.length == 0) {
        const Row = document.querySelector('.row');
        const notf = document.querySelector('.notf');
        if (notf) {
            notf.remove();
        }
        const ErrorMesage = `
        <div class='notf'>
        Not found
        </div>
        `;
        clearCards();
        createNotification('not found');
        Row.innerHTML += ErrorMesage;
    } else {
        clearCards();
        renderCards(Updated_Db_all);
    }
};

const renderForNew = (Model, Mk, City) => {
    const Updated_Db_new = DataBase.filter((item) => {
        return (
            item.Mileage.trim().startsWith('0') &&
            item.Make == Model &&
            item.Location == City &&
            item.Model == Mk
        );
    });
    if (Updated_Db_new.length == 0) {
        const Row = document.querySelector('.row');
        const notf = document.querySelector('.notf');
        if (notf) {
            notf.remove();
        }
        const ErrorMesage = `
        <div class='notf'>
        Not found
        </div>
        `;
        clearCards();
        createNotification('not found');
        Row.innerHTML += ErrorMesage;
    } else {
        clearCards();
        renderCards(Updated_Db_new);
    }
};

const renderForOld = (Model, Mk, City) => {
    const Updated_Db_old = DataBase.filter((item) => {
        return (
            item.Mileage.trim().startsWith('0') &&
            item.Make == Model &&
            item.Location == City &&
            item.Model == Mk
        );
    });
    if (Updated_Db_old.length == 0) {
        const Row = document.querySelector('.row');
        const notf = document.querySelector('.notf');
        if (notf) {
            notf.remove();
        }
        const ErrorMesage = `
        <div class='notf'>
        Not found
        </div>
        `;
        clearCards();
        createNotification('not found');
        Row.innerHTML += ErrorMesage;
    } else {
        clearCards();
        renderCards(Updated_Db_old);
    }
};

const clearCards = () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((e) => {
        e.remove();
    });
};

const renderCards = (db) => {
    SelectOptions();
    clearCards();
    const myDb = db.sort((a, b) => {});
    const notf = document.querySelector('.notf');
    if (notf) {
        notf.remove();
    }
    myDb.forEach((e) => {
        createCard(e);
    });
    return myDb;
};

const createCard = (data) => {
    const Row = document.querySelector('.row');
    const CartHtmlElemnt = `  <div class="card">    <div class="card-head">     
    ${
        navigator.onLine
            ? `<img src="${data.src}" alt="chevrolet_equinox" width="100%" height="100%">  `
            : "<h2 class='offlne'>your are offline</h2>"
    }
    </div>    <div class="card-main">    <p style=' font-size: 18px;    font-weight: 700;'>${
        data.Price
    }</p>    <p>      <p style='font-size:16px '>  ${data.Model}  ${
        data.Make
    }</p>    ${data.Year}, ${data.Engine},${
        data.Mileage
    }        <span style="color: #8d94ad; font-size: 13px">        <br>        ${
        data.Date_Posted
    } ${data.Location}        </span>    </p>    </div>    </div>`;
    Row.innerHTML += CartHtmlElemnt;
};

const createNotification = (message) => {
    const notif = document.createElement('div');
    notif.classList.add('notif');
    notif.innerText = message;
    notifContainer.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
};

const handleClick = (btn) => {
    All_Label_Buttons.forEach((e) => {
        e.classList.remove('active');
    });
    btn.classList.add('active');
};

All_Label_Buttons.forEach((e, i) => {
    const btn = document.querySelector(`#rl_${++i}`);
    e.addEventListener('click', () => {
        handleClick(btn);
    });
});

const ResNaV = () => {
    const x = document.querySelector('.nav-container nav ul ');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
};

const resetRender = () => {
    clearCards();
    if (document.querySelector('.notf')) {
        document.querySelector('.notf').remove();
    }
    renderCards(DataBase);
};

reserbtn.addEventListener('click', resetRender);
window.addEventListener('load', renderCards(DataBase));
navbtn.addEventListener('click', ResNaV);
Form.addEventListener('submit', handleSubmit);

