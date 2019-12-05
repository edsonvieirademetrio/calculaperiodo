/*Função para calcular períodos
formatView: Passar o forma como será exibido o resultado(exemplo: DD/MM/YYYY = 05/12/2019)
formatCalc: Passar o formato de calculo, em inglês (exemplo: year, month, days)
periodoInvestimento: Passar quanto tempo deseja acrescentar (exemplo: 1)
dataInicial: Passar a data inicial do período (padrão: ANO-MÊS-DIA 2019-12-05)
*/
function calculaPeriodo(formatView, formatCalc,timeInterval,dateStart){
    let dateEnd = moment(dateStart).add(timeInterval, formatCalc).format(formatView)
    console.log(dateEnd)
}
calculaPeriodo('DD/MM/YYYY','days',365,'2019-12-20')