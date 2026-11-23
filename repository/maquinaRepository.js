import conexao from "config/conexao.js";

export async function cadastrar(maquina) {
    const sql = 'insert into maquinas (codigo, nome, setor) values (?, ?, ?)'
    const [resultado] = await conexao.execute(
        sql, [maquina.codigo,
            maquina.nome,
            maquina.setor
    ]);

    return resultado.insertId;
}

export async function listar() {
    const sql = 'select * from maquinas order by id'
    const [resultado] = await conexao.execute(sql)

    return resultado.affectedRows
}

export async function buscarPorId(id) {
    const sql = 'select * from maquinas where id = ?'
    const [maquinas] = await conexao.execute(sql, [id])

    return maquinas[0]
}

export async function atualizar(id, maquina) {
    const sql = 'update maquinas set codigo = ?, nome = ?, setor = ?'
    const [resultado] = await conexao.execute(
        sql, [maquina.codigo,
            maquina.nome,
            maquina.setor,
            id
        ]);

        return resultado.affectedRows
}

export async function deletar(id) {
    const sql = 'delete from maquinas where id = ?'
    const [resultado] = await conexao.execute(sql,id)

    return resultado.affectedRows;
}
