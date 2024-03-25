import { test, expect } from '@playwright/test';
import {CalculatorPage} from '../page_objects/calculatorPage';

test.beforeEach(async ({page}) => {
  await page.goto('/')

});

test('calculate the sum of two numbers', async ({page}) => {
  const goToCalculatorApp = new CalculatorPage(page);
  goToCalculatorApp.firstInput(20)
  goToCalculatorApp.operator.arguments('+')
  goToCalculatorApp.secondInput(40)
  goToCalculatorApp.calculateButton()
  expect (goToCalculatorApp.calculatorResult).toBe('60');

});

test('calculate the subtraction of two numbers', async ({page}) => {
  const goToCalculatorApp = new CalculatorPage(page);
  goToCalculatorApp.firstInput(20)
  goToCalculatorApp.operator.arguments('-')
  goToCalculatorApp.secondInput(10)
  goToCalculatorApp.calculateButton()
  expect (goToCalculatorApp.calculatorResult).toBe('10');

});

test('calculate the multiplication of two numbers', async ({page}) => {
  const goToCalculatorApp = new CalculatorPage(page);
  goToCalculatorApp.firstInput(200)
  goToCalculatorApp.operator.arguments('*')
  goToCalculatorApp.secondInput(2)
  goToCalculatorApp.calculateButton()
  expect (goToCalculatorApp.calculatorResult).toBe('400');

});

test('calculate the divison of two numbers', async ({page}) => {
  const goToCalculatorApp = new CalculatorPage(page);
  goToCalculatorApp.firstInput(30)
  goToCalculatorApp.operator.arguments('/')
  goToCalculatorApp.secondInput(2)
  goToCalculatorApp.calculateButton()
  expect (goToCalculatorApp.calculatorResult).toBe('15');

});





