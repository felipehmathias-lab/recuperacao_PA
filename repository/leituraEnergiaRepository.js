export async function cadastrar(leitura) {
    const sql = 'insert into leituras_energia (maquinaId, dataLeitura, consumoKwh, horasOperacao) values (?, ?, ?, ?)'
    const [resultado] = await conexao.execute(
        sql, [leitura.maquinaId,
            leitura.dataLeitura,
            leitura.consumoKwh,
            leitura.horasOperacao
        ]);

    return resultado.insertId;
}

export async function listar() {
    const sql = 'select * from leituras_energia order by id'
    const [resultado] = await conexao.execute(sql)

    return resultado.affectedRows
}

export async function listarDetalhadas() {
}

export async function buscarPorId(id) {
    const sql = 'select * from leituras_energia where id = ?'
    const leituras = await conexao.execute(sql)

    return leituras[0]
}

export async function atualizar(id, leitura) {
    const sql = 'update leituras_energia set maquinaId = ?, dataLeitura = ?, consumoKwh = ?, horasOperacao = ?'
    const [resultado] = await conexao.execute(
            sql, [leitura.maquinaId,
                leitura.dataLeitura,
                leitura.consumoKwh,
                leitura.horasOperacao,
                id
            ]);
    
            return resultado.affectedRows
}

export async function deletar(id) {
        const sql = 'delete from leituras_energia where id = ?'
        const [resultado] = await conexao.execute(sql,id)
    
        return resultado.affectedRows;
}
