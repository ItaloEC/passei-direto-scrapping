const puppeteer = require("puppeteer");

async function getPrint (pageNumber) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1080,
      height: 1620,
    },
  });
  const page = await browser.newPage();
  await page.goto(
    `http://files.passeidireto.com/f49c3d1f-ea9a-4741-9033-f534a2478cbb/${pageNumber}.html`
  );
  await page.screenshot({ path: `./questoes/${pageNumber}.png` });

  await browser.close();
}

let page = 1
setInterval(() => {
    if(page < 771){
        getPrint(page).then(() => page++)
        console.log(`page:`, page)
    } else{
        process.exit()
    }
}, 7000);