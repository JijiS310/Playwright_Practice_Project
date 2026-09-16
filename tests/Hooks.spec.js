/*
Annotations------
.only -- to run only that specific test
.skip -- to skip running that test
.fix me -- test having some bug so we mark it as fixme so that it can be rechecked and corrected later
.slow -- more timeout added than normal test , slowing the test, triple slowing
.describe -- for grouping similar type of tests

Hooks------
.beforeEach -- I need to login before each test, then in such cases those can be marked under this hook
.afterEach -- same as above but need to run after each test
.beforeAll -- runs before all test cases not in between 
.afterAll -- runs after all test cases not in between
For real test,normally we won't include hooks inside describe test rather will provides hooks outside and real test inside describe annotations
Hooks marked test case won't be considered as separate test count it is part of these runs. Thus showing "Running 5 tests using 1 worker"
npx playwright test FirstTest.spec.js --debug for running in debug mode
*/

import test from "@playwright/test";

test.describe('GroupingTestcase',  ()=> {  //closed this test at ending

test.beforeEach('beforeEachHook', async ({page}) => {
    console.log('Run before each test')
})

test('normalTestCase1', async ({page})=>{
    console.log('First normal test')
})

test('normalTestCase2', async ({page})=>{
    console.log('Second normal test')
})

test.skip('skipTestCase', async ({page})=>{
    console.log('Skipping this test case')
})

test.fixme('bugTestCase', async ({page})=>{
    console.log('Test case having bug')
})

test('slowTestCase', async ({page})=>{
    test.slow()
    console.log('Slowing down test case')
})

test.afterEach('afterEachTestCase', async ({page})=>{
    console.log('Run after each test cases')
})

test.afterAll('afterAllTestCase', async ({browser})=>{ //page fixture and context not supported for beforeAll and afterAll, so instead using browser
    console.log('After all test cases')
})

test.beforeAll('beforeAllTestCase', async ({browser})=>{
    console.log('Before all test cases')
})

} )