const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const dir = '/home/shinya/datalens/public';

  // SS 1: Dashboard
  console.log('SS 1: Dashboard...');
  const p1 = await context.newPage();
  await p1.goto('http://localhost:3460', { waitUntil: 'networkidle', timeout: 30000 });
  await p1.waitForTimeout(3000);
  await p1.screenshot({ path: path.join(dir, 'ss-dashboard.png') });
  console.log('Done');

  // SS 2: Upload
  console.log('SS 2: Upload...');
  const p2 = await context.newPage();
  await p2.goto('http://localhost:3460/upload', { waitUntil: 'networkidle', timeout: 30000 });
  await p2.waitForTimeout(2000);
  await p2.screenshot({ path: path.join(dir, 'ss-upload.png') });
  console.log('Done');

  // SS 3: Insights
  console.log('SS 3: Insights...');
  const p3 = await context.newPage();
  await p3.goto('http://localhost:3460/insights', { waitUntil: 'networkidle', timeout: 30000 });
  await p3.waitForTimeout(2000);
  await p3.screenshot({ path: path.join(dir, 'ss-insights.png') });
  console.log('Done');

  // SS 4: Agents
  console.log('SS 4: Agents...');
  const p4 = await context.newPage();
  await p4.goto('http://localhost:3460/agents', { waitUntil: 'networkidle', timeout: 30000 });
  await p4.waitForTimeout(2000);
  await p4.screenshot({ path: path.join(dir, 'ss-agents.png') });
  console.log('Done');

  // SS 5: GitHub
  console.log('SS 5: GitHub...');
  const p5 = await context.newPage();
  await p5.goto('https://github.com/ferah1223/datalens', { waitUntil: 'networkidle', timeout: 30000 });
  await p5.waitForTimeout(3000);
  await p5.screenshot({ path: path.join(dir, 'ss-github.png') });
  console.log('Done');

  await browser.close();
  console.log('All 5 screenshots taken!');
})();
