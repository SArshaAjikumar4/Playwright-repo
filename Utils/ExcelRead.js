import XLSX from 'xlsx'
export function getData(row,column){
    const workbook=XLSX.readFile('TestData/testData.xlsx')
    const sheet=workbook.Sheets['LoginPage']
    const cellAddress=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1

    })
    const cell=sheet[cellAddress]
    return cell? cell.v:undefined
}