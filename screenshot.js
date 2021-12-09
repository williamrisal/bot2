const puppeteer = require("puppeteer")
const num = '06**'
const { exec } = require("child_process");
command = "./pushbullet.sh Crédit '"

const getData = async () =>{
  text = ""
  while (1){
    var d = new Date();
    var hours = d.getHours();
    var second = d.getSeconds();
    var minute = d.getMinutes();
    const browser = await puppeteer.launch({ headless: true, slowMo: 150})
    const page = await browser.newPage()
    await page.goto("https://intra.epitech.eu/auth-***")
    const selector_body = await page.$x("/html/body/div[1]/div[2]/div/div[1]/div[3]/div[1]/span[1]");
    const tmp = text
    text = await page.evaluate(e => e.textContent, selector_body[0]);
    if (tmp != text | (hours == 9 & second == 0 & minute == 0)){
      exec(command.concat(text).concat("'"), (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
      });
  }
    browser.close()
  }
    return text
}

getData().then(value => {
  console.log(value)
})