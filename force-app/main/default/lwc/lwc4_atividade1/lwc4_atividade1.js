import { LightningElement } from "lwc";

export default class Lwc_maneiro_ex01 extends LightningElement {
  result = "";

  /*Esta função chamada handleClick é executada quando ocorre um evento de clique em algum elemento. Ela recebe o evento como parâmetro. Dentro da função, o valor do elemento alvo do evento é armazenado em uma constante chamada value. Em seguida, o valor é concatenado à propriedade result do componente.*/
  handleClick(event) {
    const value = event.target.value;
    this.result += value;
  }

  /*Essa função chamada handleClear é executada quando ocorre um evento de limpar. Ela redefine a propriedade result como uma string vazia, limpando assim o valor armazenado anteriormente.*/
  handleClear() {
    this.result = "";
  }

  handleEquals() {
    try {
      // Avalia a expressão matemática usando a função eval e armazena o resultado em 'result'
      // eslint-disable-next-line no-eval
      const result = eval(this.result);
      // Verifica se o resultado não é um número (NaN) ou se é infinito (!isFinite)
      if (isNaN(result) || !isFinite(result)) {
        // Lança um erro com a mensagem 'Não é possível' caso a expressão resulte em NaN ou infinito
        throw new Error("Não é possivi");
      }
      // Define o valor de 'result' como o resultado da expressão avaliada
      this.result = result;
    } catch (error) {
      // Em caso de erro durante a avaliação da expressão, define 'result' como 'Não é possível'
      this.result = "Não é possivi";
    }
  }
}
