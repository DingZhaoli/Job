module.exports = {
    "BD1：打开百度，可以看到搜索框以及“百度一下”按钮": function (browser) {
        browser.url("https://www.baidu.com")
            .pause(2000)
            .assert.visible("input[id='kw']")
            .assert.visible("input[value='百度一下']")
            .end();
    },
    
    "BD2：搜索“ruanjiangongchengshi”，URL中应包含“wd=ruanjiangongchengshi”，并按照“软件工程师”进行搜索": function (browser) {
        browser.url("https://www.baidu.com")
            .waitForElementVisible("input[id='kw']", 5000)
            .setValue("input[id='kw']", "ruanjiangongchengshi")
            .keys(browser.Keys.ENTER)
            .pause(3000)
            .assert.urlContains("wd=ruanjiangongchengshi")
            .assert.containsText("div[id='super_se_tip']", "软件工程师")
            .end();
    },
    
    "BD3：搜索“成都”， 点击“地图”按钮会跳转至百度地图，并显示“成都市”搜索结果": function (browser) {
        browser.url("https://www.baidu.com")
            .waitForElementVisible("input[id='kw']", 5000)
            .setValue("input[id='kw']", "成都")
            .keys(browser.Keys.ENTER)
            .pause(3000)
            .waitForElementVisible("a[class*='s-tab-map']", 5000)
            .click("a[class*='s-tab-map']")
            .pause(3000)
            .assert.urlContains("map.baidu.com")
            .assert.containsText("div[id='tool-container']", "成都市")
            .end();
    }
};
