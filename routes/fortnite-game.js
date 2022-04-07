const express = require('express')
const app = express()
const config = require('../config');
const axios = require('axios');

app.get('/content/api/pages/fortnite-game', async (req, res) => {

    const data = await axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game');

    const banner = config.banner;
    const background = config.background;

    data.data.emergencynoticev2 = {
        'jcr:isCheckedOut': data.data.emergencynoticev2['jcr:isCheckedOut'] || true,
        _title: data.data.emergencynoticev2._title || 'emergencynoticev2',
        _noIndex: data.data.emergencynoticev2._noIndex || false,
        'jcr:baseVersion': data.data.emergencynoticev2['jcr:baseVersion'] || 'a7ca237317f1e7da533b38-74ee-468b-8c63-a7c3c256b313',
        emergencyNotices: {
            _type: data.data.emergencynoticev2.emergencynotices._type || 'Emergency Notices',
            emergencynotices: [
                {
                    hidden: false,
                    _type: 'CommonUI Emergency Notice Base',
                    title: 'XpsyFN!',
                    body: 'Welcome to Xpsy! Created by youtube raxterfn#6969 and psycho#0009',
                }
            ]
        },
        _activeDate: data.data.emergencynoticev2._activeDate || '2018-08-06T19:00:26.217Z',
        lastModified: data.data.emergencynoticev2.lastModified || '2021-05-10T19:37:21.335Z',
        _locale: data.data.emergencynoticev2._locale || 'en-US',
    }

    data.data.subscription = data.data.subscription;
    data.data.shopSections = data.data.shopSections;

    data.data.battleroyalenewsv2 = {
        news: {
            motds: [{
                entryType: 'Website',
                image: banner,
                tileImage: banner,
                videoMute: false,
                hidden: false,
                tabTitleOverride: 'XpsyFN',
                _type: 'CommonUI Simple Message MOTD',
                title: 'XpsyFN',
                body: 'XpsyFN Hybrid - Made by psycho#0009 and youtube raxterfn#6969',
                videoLoop: false,
                videoStreamingEnabled: false,
                sortingPriority: 0,
                id: 'CSNews',
                videoAutoplay: false,
                videoFullscreen: false,
                spotlight: false,
                websiteURL: 'https://dsc.gg/XpsyFN',
                websiteButtonText: 'Join the Discord'
            }]
        },
        'jcr:isCheckedOut': data.data.battleroyalenewsv2['jcr:isCheckedOut'] || true,
        _title: 'battleroyalenews',
        _noIndex: false,
        alwaysShow: false,
        'jcr:baseVersion': data.data.battleroyalenewsv2['jcr:baseVersion'] || 'a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0',
        _activeDate: data.data.battleroyalenewsv2._activeDate || '2020-01-21T14:00:00.000Z',
        lastModified: data.data.battleroyalenewsv2.lastModified || new Date().toISOString(),
        _locale: data.data._locale || 'en-US'
    };
    data.data.shopCarousel = {
      'jcr:isCheckedOut': data.data.shopCarousel['jcr:isCheckedOut'] || true,
      itemsList: {
         _type: 'ShopCarouselItemList',
         items: [{       
           tileImage: 'https://media.discordapp.net/attachments/905191891971223612/960628602641215578/New_Project_2.jpg?width=705&height=397',
           fullTitle: 'Xpsy Shop',
           hidden: false,
           _type: 'ShopCarouselItem',
           landingPriority: 100,
           action: 'ShowOfferDetails',
           offerId: null,
           title: 'Xpsy Shop'
           }]
       },
        _title: 'shop-carousel',
        _noIndex: false,
        'jcr:baseVersion': 'a7ca237317f1e765be23f9-d0fd-4067-ae00-ef29af2376cc',
        _activeDate: '2020-09-25T12:00:00.000Z',
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
     },
    data.data.dynamicbackgrounds = {
        'jcr:isCheckedOut': data.data.dynamicbackgrounds['jcr:isCheckedOut'] || true,
        backgrounds: {
            backgrounds: [
                {
                    backgroundimage: 'https://images-ext-1.discordapp.net/external/mPtjvSL8jbJSZEIqoHlcohpHXjdBMTOD_A2DqNK1Vr0/https/media.discordapp.net/attachments/959789267184394324/961260762196754462/EA7CDAA7AF5B1335517D581803C34BB2394218D1.png?width=1352&height=676',
                    stage: 'Defaultnotris',
                    _type: 'DynamicBackground',
                    key: 'lobby'
                }
            ],
            _type: 'DynamicBackgroundList'
        },
        _title: 'dynamicbackgrounds',
        _noIndex: false,
        'jcr:baseVersion': 'a7ca237317f1e70712af90-59fe-4576-8f32-f80bf513c946',
        _activeDate: '2020-01-21T14:00:00.000Z',
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    };

    res.json(data.data);
})

module.exports = app
//Sunset - https://eurovision-api.qtfraz.repl.co/slushyfn/848c90b3fdacf79ba9299706be8ed5b5.png

//Blue Night - https://eurovision-api.qtfraz.repl.co/slushyfn/ef4c967d7c0a90edc5b5aa51a8b8033a.png

// Pastel blue bg https://eurovision-api.qtfraz.repl.co/slushyfn/ef4c967d7c0a90edc5b5aa51a8b8033a.png