import { Page } from "@playwright/test"


export class CalculatorPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page

    }

    async firstInput(input1: number) {
        const first_number = this.page.getByPlaceholder('Your first input')
        await first_number.fill(`${input1}`)
    }

    async operator() {
        const operator_id = this.page.locator('#operator')
        let value = await operator_id.getAttribute('value')
        if (value == '+') {
            await operator_id.selectOption('+')
            return value
        }
        else if(value == '-') {
            await operator_id.selectOption('-')
            return value
        }
        else if (value == '*') {
            await operator_id.selectOption('*')
            return value
        }
        else if (value == '/') {
            await operator_id.selectOption('/')
            return value
        }
    } 
    async secondInput(input2: number) {
        const second_number = this.page.getByPlaceholder('Your second input')
        await second_number.fill(`${input2}`);
    }

    async clearButton() {
        const clear = this.page.getByRole('button')
        clear.click();
    }

    async calculateButton() {
        const calculate = this.page.getByRole('button')
        calculate.click();

    }

    async calculatorResult() {
        const results = this.page.locator('.alert alert-primary mt-3 h5')
        return results
    }
}