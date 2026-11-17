import Header from './Header';
import {useEffect} from 'react';
import axios from 'axios';

function Form() {
    
useEffect(() => {
    axios.get('https://
servicodados.ibge.gov.br/api/v1/
localidades/estados')
    .then(response => {
        console.log(response.data);
    })
}, []);  
    
    return(
        <div>
            <Header title ="React Form" />
            <form onChange={handleImputChange}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text " name="txtNome" id= "txtNome" onChange={handleImputChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label>Idade:
                           <input type="number" name="txtIdade" id="txtIdade" onChange={handleImputChange} /> 
                        </label>
                    </div>

                     <div>
                        <label>UF:
                           <select name="cmbUF" id="cmbUF" onChange={handleImputChange}>
                               <option value="0">Selecione uma opção</option>
                           </select> 
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;
