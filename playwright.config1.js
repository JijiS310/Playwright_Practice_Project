// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40*1000,
  expect:{         //timeout for assertions
    timeout: 50*1000 
  },

  retries:1, //retries 1 time upon failure
  workers:2,  //chrome is a worker, 2 allows parallel execution
  //fullyParallel:true, //parallel execution


  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  

  //configure multiple projects

  projects:[
    {
    name:'chromeProject', //ourchoice name
    use: {
      browserName:'chromium',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    ...devices['iPhone 12 Mini'],
    permissions:['geolocation','camera','microphone' ],
  // geolocation:{latitute:9.45,longitude:4.76},
  ignoreHTTPsErrors:true
   
  },
  },
{
  name:'firefoxProject', //ourchoice name
    use: {
      browserName:'firefox',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    viewport:{
      width:500,
      height:700},
      
}
},
{
  
    name:'webkit',
    use: {
      browserName:'webkit',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  
}
}
]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

