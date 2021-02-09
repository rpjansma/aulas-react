//Importar biblioteca padrão do React
import React from 'react'

//O DOM (Document Object Model) são os elementos do HTML,
//que por sua vez são nós de uma árvore.
//O react permite modificar apenas um nós sem alterar os demais.
import ReactDOM from 'react-dom'

import Componente from './Componente'

//o conteúdo HTML retornado pelo componente Componente será renderizado na div root.
ReactDOM.render(<Componente nome="Joaquim" idade="12" cidade="São Carlos"/>, document.getElementById('root'))