const {Builder, Browser, By, Key} = require("selenium-webdriver");
//import { Builder, Browser, By, Key } from "selenium-webdriver"; // "type": "module"
// const expect = require("chai").expect;
// import { expect, assert } from "chai";

let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");


    // await driver.sleep(5000);
    // await driver.quit();
    await driver.findElement(By.className("search-icon")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike Air", Key.ENTER);
    // await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.sleep(5000);


}

testRunner();
