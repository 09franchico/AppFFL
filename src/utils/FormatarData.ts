export const FormatarData = (data:Date) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam em zero
    const ano = data.getFullYear();
    const dataFormatada = `${dia}-${mes}-${ano}`;
    return dataFormatada;
}