import React from 'react';

const IssueForm = () => (
    <div className="column is-6">
        <form>
            <label className="label">Título</label>
            <p className="control">
                <input type="text" className="input" placeholder="Digite o título da Issue" />
            </p>
            <label className="label">Mensagem</label>
            <p className="control">
                <textarea className="textarea" placeholder="Digite a sua mensagem / comentário."></textarea>
            </p>
            <p className="control">
                <button type="submit" className="button is-primary">Enviar</button>
            </p>
        </form>
    </div>
)

export default IssueForm;