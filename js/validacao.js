export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
  }
}

const validadores = {
  dataNascimento: input =>validaDataNascimento(input)
}

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value)
  let mensagem = ''

  if(!maior18(dataRecebida)) {
    mensagem = 'Você deve ser que 18 anos para se cadastrar.'
  }

  input.setCustomValidity(mensagem)
}

function maior18(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataMais18 <= dataAtual

}